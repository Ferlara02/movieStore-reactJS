# Movie Store

Este proyecto ha sido creado por [Fernando Lara](https://www.linkedin.com/in/fernando-agust%C3%ADn-lara-929539241/).

## Navegabilidad

![navegabilidad1](https://user-images.githubusercontent.com/80276829/209209696-6dc28afe-e56a-4b16-9025-cec2d2ee3943.gif)

## Funcionalidad

Este proyecto basado en React JS simula un eCommerce de Películas en Blu-Ray, componetizado para su optimización. 
* Recopila una colección de películas guardadas en `Firestore` y mapea cada una generando su propio componente Item para su reutilización -usando el método getDocs() de `Firebase`-. Se incorpora en Item list, contenido a su vez en un container homónimo. 
* También contiene una funcionalidad para filtrar las películas de acuerdo al género, basandose en `react-router-dom`. Utilizando dicha herramienta, se permite la navegación hacia el detalle de cada película, con el Smart component `Item Detail Container` que utiliza el método getDoc() de `Firebase` para acceder a la película especificada con el ID de useParams().
* Además, la opción de Agregar al carrito con `React Context` permite ir almacenando cada película en el cart, con la cantidad de Blu-ray´s elegida por el usuario a través de un item count. 
* Finalmente, ya en el Cart, el usuario puede: eliminar cada item individual, vaciar el carrito, o ir a Finalizar compra, donde se le redirigirá a un Checkout. Con la persistencia del Context y los métodos proporcionados de Firebase, el usuario ingresa sus datos en un formulario y al simular el pago se crea un nuevo documento en la colección de Ventas de Firestore, en la que se incluyen los datos ingresados del cliente, como así también el detalle de todos los items que compró.
Una vez finalizada la promesa, al usuario se le devuelve el ID de la compra a través de un SweetAlert.

### Se usó:
* `HTML5 & CSS3`
* `React JS`
   1. Context:
        - Para: Persistencia en Cart & Counter en CartWidget 
   2. useState
   3. useEffect
   4. react-router-dom
* `Firebase - Firestore`
    - Métodos:
        - getDoc, getDocs, addDoc, collection, doc, getFirestore, updateDoc, query, where,serverTimestamp (para indicar la fecha y hora de la compra).
    - Para: 
        - Incorporar una base de datos no relacional de Películas.
        - Modificar una colección de ventas, agregando un documento con datos del usuario y los items seleccionados por cada compra.
* `SweetAlert & Toastify`
* `Bootstrap`
