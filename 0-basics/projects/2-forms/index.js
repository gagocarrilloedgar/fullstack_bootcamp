// Selectig the main Form
const myForm = document.forms[0]
console.log(myForm)

// Validate the form for every change in the form
myForm.addEventListener('change', event => {
  // Select alert division
  const alertDiv = document.getElementById('alertMessage')
  const successDiv = document.getElementById('successMessage')

  // Build a Validation Array for every required element
  let validationArr = []
  for (const formEntry of myForm) {
    if (formEntry.required) {
      formEntry.checkValidity()
        ? validationArr.push(true)
        : validationArr.push(false)
    }
  }

  // Analyse Validation Array - if every entry is true, it's good to go. Else, warning alert!
  let validForm = validationArr.every(el => (el ? true : false))
  if (validForm) {
    alertDiv.style.display = 'none'
    successDiv.style.display = 'block'
  } else {
    alertDiv.style.display = 'block'
    successDiv.style.display = 'none'
  }
})

// Example starter JavaScript for disabling form submissions if there are invalid fields
;(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Select alert division
  const alertDiv = document.getElementById('alertMessage')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(form => {
    form.addEventListener(
      'submit',
      event => {
        if (!form.checkValidity()) {
          console.log('chego aqui')
          alertDiv.style.display = 'block'
          event.preventDefault()
          event.stopPropagation()
        } else {
          alertDiv.style.display = 'none'
        }
        form.classList.add('was-validated')
      },
      false
    )
  })
})()
