![clipboard](https://i.imgur.com/bII7upb.png)
# CICLO DE INVENTARIO:
### Análisis de funcionamiento actual e implementación en Odoo.


## Descripción Breve:

Se nos asigna el análisis del funcionamiento actual del almacén principal de Toyota Canarias con vistas a adaptar los procedimientos actuales que los operarios realizan (entrada de productos, salida de productos y control de stock) sobre una nueva aplicación que se conecte a los servicios y módulos que Odoo ofrece.


## Organización del almacén:

El almacén cuenta con 2 grandes zonas: 
Zona para servir(a clientes): Aquí se acumula producto que llega ya reservado a cliente y las cajas preparadas para enviar.
Zona de almacén: En esta zona, dividida en ubicaciones, se encuentran los productos. Cada producto debe estar en una ubicación (aunque puede darse el caso que existan en más de una).
Los productos cuentan con una referencia y a la hora de servirlo. Los productos de introducen en cajas. Estas cajas cuentan con una referencia formada por “referencia de cliente” + “fecha” + “número de caja por día”


## Análisis de Ciclo de Trabajo:


### Recepción:
La recepción de productos se realiza siguiendo el siguiente esquema: 

![Diagrama_de_Entrada](https://i.imgur.com/ldSn9YL.jpg)


### Envío:
Al inciar el cierre, cada operario se asigna una lista de productos para clientes o es asignado por el resposable de almacen. Tras ello el envío de productos sigue el siguiente recorrido:

![Diagrama_de_Salida](https://i.imgur.com/aoODxJC.jpg)



## Implementación en Odoo:


Para satisfacer los ciclos mostrados, Odoo requiere la activación de las herramientas de 'Rutas Multietapa' y 'Ubicaciones de Almacén' desde el módulo de Inventario , apartado de Ajustes. Una vez hecho esto, desde la configuración del almacén seleccionaremos la opción "en tres pasos" para las operaciones de recepción y envio, las cuales permiten control de calidad antes de entrar en stock en la recepción  y la recogida, empaquetamiento y llegada.

Además añadiremos 2 módulos, uno que asigne listas de productos para clientes a los operarios y el otro crea paquetes para clientes y un packing list de los productos en ese paquete.

#### Módulo de asignación de listas (Envío de productos):
![assign](https://i.imgur.com/02bLvUL.png)

#### Módulo de creación de paquetes:
![packing](https://i.imgur.com/w6zlTMk.jpg)




## Implementación en plataforma móvil:

La plataforma móvil debera cumplir las siguientes acciones: 

  - Mostrar de los listados pertienentes (Entrada, Salida, Empaquetado)
  - Cumplimentar acciones de cierres de listados
  - Creación de Ubicaciones
  - Lecturas de Referencias
  - Creación de Facturas
  - CRUD de Paquetes y 'Packing List'

## Cuaderno de batalla: preguntas a encargado y varios trabajadores del inventario

- ### ¿Como funcionan los carros en el ciclo?¿Son asignados a cada operario?
Los carros son usados para pedidos con grandes volúmenes, en otros usamos sencillamente cestas y no, cada operario no se identifica cada uno con el carro que usa, si se dispone de  uno libre pues usan ese durante la jornada y si lo llenan, lo dejan en la zona donde esta la caja de envío y cogen otro.

- ### ¿Con que frecuencia ocurren casos de los tipos "Los productos no cumplen las condiciones" en Recepción o "El producto no se encuentra en la ubicación/No existe la cantidad suficiente del producto" en Envio?
La cantidad de veces es despreciable teniendo en cuenta la cantidad de movimientos al día
(*Cabe apuntar que se nos muestra ejemplos en la aplicación de Administrador de PDA)

- ### ¿En cuanto dista el trabajo de los procesos descritos en los diagramas de estado
En Recepciones, el proceso de control de calidad se hace a posteriori, una vez le damos entrada en el stock. En el Envio normalmente los operarios recogen los productos de cada planta en caso de poder añadir más de un pedido a su lista, tras ello lo añaden a su respectivo pedido.

- ### ¿Realizan rotaciones de ubicaciones?
Si, el factor determinante es el espacio que ocupan. En vez de tener una lista con todas las ubicaciones posibles de dicho producto, al llegar a cierta capacidad vaciamos toda ubicación de dicho producto y lo reubicamos en otra. 

- ### Entonces ¿Verían necesario una asignacion de volumenes por producto // ubicación?
Si y no, para realizar una Recepción no es necesario puesto que el empaquetamiento de los productos varía pero a la hora de realizar un Envio puede ser útil para decidir como transportarlo.

## Mejoras Propuestas:

  - Implementación de recogida por productos. En este momento se realiza por posicion de los productos en las plantas.
  - Mostrar ubicaciones ordenadas por cercanía para evitar rutas innecesarias a la hora de la recepción.
  - Mejora de la asignación de productos al tipo de empaquetado con posibilidad a borrar y editar el mismo.
  - Mejora a la hora de la navegación entre listas de pedidos en el envio.
  - Eliminación completa de la ubicación 'Articulos sin ubicación' con la creación de una sugerencia de ubicación y creación de su código.
  - Asignación de el tipo de facturación que recibe un cliente ya que existen los que prefieren recibirla físicamente antes que por correo, esto podra ser editado por un responsable en cualquier momento.

