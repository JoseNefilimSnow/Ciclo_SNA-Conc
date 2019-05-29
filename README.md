![clipboard](https://i.imgur.com/bII7upb.png)
# CICLO DE INVENTARIO:
### Análisis de funcionamiento actual e implementación en Odoo.


<br/><br/>

## Descripción Breve:
<br/>

Se nos asigna el análisis del funcionamiento actual del almacén principal de Toyota Canarias con vistas a adaptar los procedimientos actuales que los operarios realizan (entrada de productos, salida de productos y control de stock) sobre una nueva aplicación que se conecte a los servicios y módulos que Odoo ofrece.

<br/>
<br/>

## Organización del almacén:
<br/>

El almacén cuenta con 2 grandes zonas: 
Zona para servir(a clientes): Aquí se acumula producto que llega ya reservado a cliente y las cajas preparadas para enviar.
Zona de almacén: En esta zona, dividida en ubicaciones, se encuentran los productos. Cada producto debe estar en una ubicación (aunque puede darse el caso que existan en más de una).
Los productos cuentan con una referencia y a la hora de servirlo. Los productos de introducen en cajas. Estas cajas cuentan con una referencia formada por “referencia de cliente” + “fecha” + “número de caja por día”

<br/>

## Análisis de Ciclo de Trabajo:
<br/>


### Recepción:
La recepción de productos se realiza siguiendo el siguiente esquema: 

![clipboard](https://i.imgur.com/TW91woh.png)

<br/>

### Envío:
Al inciar el cierre, cada operario se asigna una lista de productos para clientes o es asignado por el resposable de almacen. Tras ello el envío de productos sigue el siguiente recorrido:

![clipboard](https://i.imgur.com/IU5D8TU.png)

<br/>

## Implementación en Odoo:
<br/>

Para satisfacer los ciclos mostrados, Odoo requiere la activación de las herramientas de 'Rutas Multietapa' y 'Ubicaciones de Almacén' desde el módulo de Inventario , apartado de Ajustes. Una vez hecho esto, desde la configuración del almacén seleccionaremos la opción "en tres pasos" para las operaciones de recepción y envio, las cuales permiten control de calidad antes de entrar en stock en la recepción  y la recogida, empaquetamiento y llegada.

Además añadiremos 2 módulos, uno que asigne listas de productos para clientes a los operarios y el otro crea paquetes para clientes y un packing list de los productos en ese paquete.

#### Módulo de asignación de listas (Envío de productos):
![clipboard](https://i.imgur.com/02bLvUL.png)

#### Módulo de creación de paquetes:
![clipboard](https://i.imgur.com/QwRstUi.png)


<br/>

## Implementación en plataforma móvil:
<br/>

La plataforma móvil debera cumplir las siguientes acciones: 

  - Mostrar de los listados pertienentes (Entrada, Salida, Empaquetado)
  - Cumplimentar acciones de cierres de listados
  - Creación de Ubicaciones
  - Lecturas de Referencias
  - Creación de Facturas
  - Creación de Paquetes y 'Packing List' 

## Diseño de la aplicación (Pendiente a cambios)