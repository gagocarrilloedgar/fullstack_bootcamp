window.onload = function () {
  const newButton = document.getElementById('newButton')
  newButton.addEventListener('click', myNewButtonOnClickListener)

  function myNewButtonOnClickListener () {
    console.log('Se hizo clic en el botón.')
  }

  // Obtener referencias a los elementos HTML
  const agregarBoton = document.getElementById('agregarBoton')
  const eliminarBoton = document.getElementById('eliminarBoton')
  const miDiv = document.getElementById('miDiv')

  // Agregar evento click para agregar un nuevo párrafo
  agregarBoton.addEventListener('click', function () {
    // Crear un nuevo párrafo
    const nuevoParrafo = document.createElement('p')
    nuevoParrafo.textContent = 'Este es un nuevo párrafo.'

    // Agregar el párrafo al elemento miDiv
    miDiv.appendChild(nuevoParrafo)
  })

  // Agregar evento click para eliminar el párrafo existente
  eliminarBoton.addEventListener('click', function () {
    // Obtener el párrafo existente
    const miParrafo = document.getElementById('miParrafo')

    // Eliminar el párrafo
    miParrafo.remove()
  })

  // Event Listener para el evento "click"
  const clickBoton = document.getElementById('clickBoton')
  clickBoton.addEventListener('click', function () {
    console.log('Se hizo clic en el botón.')
  })

  // Event Listener para el evento "input"
  const inputTexto = document.getElementById('inputTexto')
  inputTexto.addEventListener('input', function () {
    const valor = inputTexto.value
    if (valor === '') {
      alert('El campo no puede estar vacío.')
    }
  })

  // Event Listeners para eventos del mouse
  const mouseDiv = document.getElementById('mouseDiv')
  mouseDiv.addEventListener('mouseenter', function () {
    mouseDiv.style.backgroundColor = 'lightgreen'
  })
  mouseDiv.addEventListener('mouseleave', function () {
    mouseDiv.style.backgroundColor = 'lightblue'
  })
  mouseDiv.addEventListener('mousemove', function (event) {
    const x = event.clientX
    const y = event.clientY
    console.log('Posición del mouse:', x, y)
  })

  const borrar = document.getElementById('borrar')

  // Función de evento
  function handleClick () {
    console.log('Se hizo clic en el botón.')
  }

  // Agregar event listener
  borrar.addEventListener('click', handleClick)

  // Eliminar event listener después de 3 segundos
  setTimeout(function () {
    borrar.removeEventListener('click', handleClick)
    console.log('Se eliminó el event listener.')
  }, 3000)
}
