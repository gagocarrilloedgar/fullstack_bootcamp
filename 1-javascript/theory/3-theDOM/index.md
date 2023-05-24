# DOM (Modelo de Objetos del Documento)

El DOM es una interfaz de programación para documentos HTML y XML. Representa la estructura del documento como un árbol de objetos, donde cada nodo del árbol representa un elemento, atributo o fragmento de texto. A través del DOM, puedes acceder y manipular los elementos de una página web.

## Eventos

Los eventos son acciones o sucesos que ocurren en una página web, como hacer clic en un botón, mover el cursor del ratón, cargar una página, etc. La programación de eventos te permite responder a estas acciones y realizar acciones específicas en respuesta a ellas.

## Manejadores de Eventos / Event Handlers

Los manejadores de eventos son funciones que se ejecutan cuando ocurre un evento específico en un elemento. Se asignan directamente a propiedades específicas del elemento HTML utilizando el atributo "on[evento]". Por ejemplo:

```html
<button onclick="miFuncion()">Haz clic</button>
```

En este ejemplo, se asigna la función `miFuncion` al evento `onclick` del botón. Cuando el botón se hace clic, se ejecutará la función `miFuncion`.

## Event listeners

Los _event listeners_ de eventos son funciones que se ejecutan en respuesta a un evento específico en un elemento, pero se asignan utilizando métodos JavaScript en lugar de atributos HTML. Los métodos más comunes para agregar _event listeners_ de eventos son `addEventListener` y `attachEvent` (este último se utiliza en versiones antiguas de Internet Explorer). Aquí tienes un ejemplo de cómo usar `addEventListener`:

```javascript
var elemento = document.getElementById("miElemento");
elemento.addEventListener("click", miFuncion);

function miFuncion() {
  // Código a ejecutar cuando ocurra el evento
}
```

En este ejemplo, se agrega un escuchador de eventos al elemento con el ID "miElemento". Cuando se haga clic en ese elemento, se ejecutará la función `miFuncion`.

## Lista de distintos event listeners

Lista de algunas de las keys más comunes utilizadas en los listeners de eventos en JavaScript:

**Eventos del teclado:**

- `"keydown"`: Se dispara cuando se presiona una tecla.
- `"keyup"`: Se dispara cuando se suelta una tecla.
- `"keypress"`: Se dispara cuando se presiona una tecla y se mantiene pulsada.

**Eventos del ratón:**

- `"click"`: Se dispara cuando se hace clic en un elemento.
- `"dblclick"`: Se dispara cuando se hace doble clic en un elemento.
- `"mousedown"`: Se dispara cuando se presiona un botón del ratón mientras el cursor está sobre un elemento.
- `"mouseup"`: Se dispara cuando se suelta un botón del ratón después de presionarlo.
- `"mousemove"`: Se dispara cuando se mueve el cursor del ratón sobre un elemento.

**Eventos de formulario:**

- `"submit"`: Se dispara cuando se envía un formulario.
- `"input"`: Se dispara cuando el valor de un elemento de entrada (input) cambia.
- `"change"`: Se dispara cuando el valor de un elemento de entrada cambia y pierde el foco.

**Eventos de ventana:**

- `"load"`: Se dispara cuando se completa la carga de una página web.
- `"resize"`: Se dispara cuando se cambia el tamaño de la ventana del navegador.
- `"scroll"`: Se dispara cuando se desplaza la barra de desplazamiento de la ventana.

Estos son solo algunos ejemplos de los eventos más comunes. Hay muchos más eventos disponibles en JavaScript que puedes utilizar según tus necesidades.

## Ejemplos de manipulación del DOM

¡Por supuesto! Aquí tienes algunos ejemplos de manipulación del DOM utilizando JavaScript:

1. **Crear y agregar elementos al DOM:**
   Puedes crear nuevos elementos HTML y agregarlos al documento utilizando métodos como `document.createElement` y `elemento.appendChild`. Por ejemplo:

```javascript
// Crear un nuevo párrafo
var nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo.";

// Agregar el párrafo al elemento con el ID "miDiv"
var miDiv = document.getElementById("miDiv");
miDiv.appendChild(nuevoParrafo);
```

2. **Modificar el contenido de un elemento:**
   Puedes cambiar el contenido HTML o el texto de un elemento utilizando las propiedades `innerHTML` y `textContent`. Por ejemplo:

```javascript
// Cambiar el contenido HTML de un elemento
var miElemento = document.getElementById("miElemento");
miElemento.innerHTML = "<strong>Nuevo contenido HTML</strong>";

// Cambiar el texto de un elemento
var otroElemento = document.getElementById("otroElemento");
otroElemento.textContent = "Nuevo texto";
```

3. **Eliminar un elemento del DOM:**
   Puedes eliminar un elemento del documento utilizando el método `remove` o navegando hasta su elemento padre y utilizando `removeChild`. Por ejemplo:

```javascript
// Eliminar un elemento directamente
var elementoEliminar = document.getElementById("elementoEliminar");
elementoEliminar.remove();

// Eliminar un elemento a través de su padre
var padreElemento = document.getElementById("padreElemento");
var elementoEliminar = document.getElementById("elementoEliminar");
padreElemento.removeChild(elementoEliminar);
```

## Ejemplos de Programación orientada a Eventos (JS+HTML)

1. **Ejemplo de manejo de evento onclick:**

```html
<button onclick="saludar()">Haz clic</button>

<script>
  function saludar() {
    console.log("¡Hola! Has hecho clic en el botón.");
  }
</script>
```

2. **Ejemplo de escucha de eventos con addEventListener:**

```html
<button id="miBoton">Haz clic</button>

<script>
  var boton = document.getElementById("miBoton");
  boton.addEventListener("click", saludar);

  function saludar() {
    console.log("¡Hola! Has hecho clic en el botón.");
  }
</script>
```

3. **Ejemplo de evento de teclado utilizando addEventListener:**

```html
<input type="text" id="miInput">

<script>
var input = document.getElementById("miInput");
input.addEventListener("keydown", function(event) {
  console.log
```

## Recursos y listas de keys y programación de eventos

- [MDN Web Docs - Event reference](https://developer.mozilla.org/en-US/docs/Web/Events): MDN (Mozilla Developer Network) es una excelente fuente de referencia para desarrolladores web, y su documentación sobre eventos proporciona una lista completa de eventos con detalles sobre su uso y compatibilidad.

- [W3Schools - JavaScript Event Reference](https://www.w3schools.com/jsref/dom_obj_event.asp): W3Schools es otro recurso popular para aprender y consultar información sobre desarrollo web. Su referencia de eventos de JavaScript ofrece una lista completa de eventos junto con ejemplos y explicaciones.

- [DOM Standard - Events](https://dom.spec.whatwg.org/#events): La especificación del DOM proporciona información detallada sobre la interfaz de eventos y los eventos disponibles. Sin embargo, ten en cuenta que esta es una fuente más técnica y puede ser más adecuada para desarrolladores con conocimientos avanzados.
