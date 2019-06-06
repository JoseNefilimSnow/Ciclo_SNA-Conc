import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {
  Headers,
  Http
} from '@angular/http';
import {
  Injectable
} from '@angular/core';


@Injectable()
export class odooJsonRpc {

  private odoo_api =
    "http://172.18.8.48:8069"; //Dirección Ip donde está la API de Odoo
  private odoo_db =
    "ValperApp1"; //Nombre de la base de datos a acceder en Odoo

  constructor(private http: Http) {
    this.http = http;
  }

  // Inicio de sesión//

  /**
   * @param email Identidicador para el inicio de sesión principal.
   * @param contraseña Contraseña asosciada al identificador.
   */
  public inicioDeSesion(email, contraseña) {

    let parametros_inicio_sesión = {
      db: this.odoo_db, //Base de datos a la que conectarse
      login: email, // Identidicador para iniciar sesión
      password: contraseña, //Contraseña
      base_location: this.odoo_api, //Dirección IP de la API
      context: {} //Se le pasa un contexto vacio desde la aplicacion para iniciar la sesión;
    }

    let respuesta = this.enviarPropuesta("/web/session/authenticate", parametros_inicio_sesión) // Almacenamos la respuesta de la API

    respuesta.then((res: any) => {
      if (Number(JSON.parse(res._body)["result"].partner_id)) { //Comprobamos si en la respuesta el usuario es valido, en caso que no partner_id sería nulo
        let contexto_de_usuario: any = JSON.parse(res._body)["result"];
        contexto_de_usuario.password = contraseña;
        localStorage.setItem("token", JSON.stringify(contexto_de_usuario)); // Creamos una instancia de el contexto de usuario en un token para diferentes consultas
      }
    });

    return respuesta;
  }

  //---------------Metodo necesario para enviar las propuestas------------------//

  /**
   * 
   * @param urlDeMetodo Esta variable es la extension de odoo_api (la direccion IP donde se encuentra la API) única para cada tipo de acción a realizar
   * @param parametros Variable que contiene parametros de cada metodo para enviar a la API de Odoo
   */
  private enviarPropuesta(urlDeMetodo, parametros) {

    let cuerpo_de_la_propuesta = {
      params: parametros
    };

    let cabecera_de_la_propuesta = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post(this.odoo_api + urlDeMetodo, cuerpo_de_la_propuesta, {
      headers: cabecera_de_la_propuesta
    }).toPromise();
  }

  //---------------Metodo CRUD : Instancias de modelos de Odoo------------------//

  /**
   * 
   * @param modelo Modelo del cual crearemos la instancia
   * @param campos Campos requeridos para realizar la acción
   */
  public crearInstancia(modelo, campos) {
    let argumentos = [campos];
    return this.llamadaAlMetodo(modelo, "create", argumentos, null)
  }

  /** 
   * @param modelo Modelo del cual leeremos la instancia
   * @param condicion Podemos crear una condicion usando este patron: '[[campo,operacion,valor]]' ------>
   *                  Ej: [['id','=',num]]
   * @param campos Campos que recoger de la lectura
   * @param limite Limite de valores a recoger
   * @param intervalo Intervalos en los que se muestran la respuesta
   * @param orden Orden en el que se muestran la respuesta
   */
  public leerInstancia(modelo, condicion, campos, limite, intervalo, orden) {
    let parametros = {
      model: modelo,
      fields: campos,
      domain: condicion,
      offset: intervalo,
      limit: limite,
      sort: orden,
      context: this.obtenerContextoDeUsuario()
    };
    return this.enviarPropuesta("/web/dataset/search_read", parametros);
  }

  /**
   * @param modelo Modelo del que editaremos la instancia
   * @param identificador Id de la instancia a editar 
   * @param campos Campos de la instancia a editar
   *              (e.j)
   *              let argumentos = {
   *                 "name": "Vlp"
   *              }
   */
  public editarInstancia(modelo: string, identificador: number, campos: any) {
    let argumentos = [
      [identificador], campos
    ]
    return this.llamadaAlMetodo(modelo, "write", argumentos, null)
  }

  /**
   * 
   * @param modelo Modelo del que borraremos la instancia
   * @param identificador Id de la intancia a borrar
   */
  public borrarInstancia(modelo, identificador) {
    let argumentos = [identificador]
    return this.llamadaAlMetodo(modelo, "unlink", argumentos, null)
  }

  //---------------Metodo LLamada a metodos del modelo y obtener el contexto ---IMPORTANTE--- ------------------//

  /**
   * 
   * @param modelo Es el modelo sobre el cual realizaremos el método 
   * @param metodo El metodo es una función definida por Odoo 
   *                  en cada modelo de sus modulos, cada uno consta de una gran variedad y 
   *                  estos realizan todo tipo de acciones sobre las instancias de los mismo
   * @param argumentos Son los campos necesarios que el modulo requiere para cada acción
   * @param objeto Son necesarios en algunos metodos para cumplimentar los metodos a realizar
   */
  private llamadaAlMetodo(modelo, metodo, argumentos, objeto) {
    objeto = objeto || {} //El objeto se inicializa en si mismo o vacio depende de lo si llega por parametro o no
    let parametros = {
      model: modelo,
      method: metodo,
      args: argumentos,
      kwargs: objeto == false ? {} : objeto,
      context: this.obtenerContextoDeUsuario()
    }
    return this.enviarPropuesta("/web/dataset/call_kw", parametros);
  }

  /**
   * Este método obtiene un token, creado a la hora de iniciar sesión, que servirá como identificación a Odoo de quien está realizando las acciones.
   */
  private obtenerContextoDeUsuario() {
    let importar_token_de_contexto = localStorage.getItem("token");
    let datos_del_token = JSON.parse(importar_token_de_contexto);
    let contexto_del_usuario = datos_del_token["user_context"];
    return contexto_del_usuario;
  }

  //---------------Métodos de la aplicación------------------//

  /**
   * 
   * @param id Identificador de movimiento
   */
  obtener_movimiento(id) {
    let condicion = [
      ['id', '=', id]
    ];
    return this.leerInstancia('stock.picking', condicion, [], 0, 0, '');

  }
  /**
   * 
   * @param picking_type_id Esta variable muestra el tipo de movimieto de almacén que importaremos, por ejemplo:
   *  '3' sera los movimientos de pick o recogida desde el almacen a "zona de servir", 4 el valor de los movimientos a empaquetar
   */
  obtener_movimiento_de(picking_type_id) {
    let condicion = [
      ['picking_type_id', '=', picking_type_id]
    ];
    return this.leerInstancia('stock.picking', condicion, [], 0, 0, '');
  }

  /**
   * 
   * @param id Identificación de las lineas de movimiento que corresponden a los movimientos y contienen los productos
   */
  obtener_movimientos_productos(id){
    let condicion=[['id','=',id]];
    return this.leerInstancia('stock.move.line',condicion,[],0,0,'');
  }
  
  /**
   * 
   * @param id Identificador del producto
   */
  obtener_detalles_productos(id){
    let condicion=[['id','=',id]];
    return this.leerInstancia('product.template',condicion,[],0,0,'');
  }

}
