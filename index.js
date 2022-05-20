// btns icons
const btns = document.querySelector('.btns')
const btnBar = document.querySelector('.btn-bar')
const btnTimes = document.querySelector('.btn-times')
const button = document.querySelector('.contact-button')

// select the nav links wrapper and contaiiner

const linksContainer = document.querySelector('.links-container')
const navlinkWrapper = document.querySelector('.nav-links-wrapper')

const toggleIcon = () => {
  const linksHeight = linksContainer.getBoundingClientRect().height
  const navHeight = navlinkWrapper.getBoundingClientRect().height

  if (linksHeight === 0) {
    linksContainer.style.height = `${navHeight}px`
    btnBar.style.display = 'none'
    btnTimes.style.display = 'block'
    button.style.display = 'block'
  }
  if (linksHeight === navHeight) {
    linksContainer.style.height = 0
    btnTimes.style.display = 'none'
    btnBar.style.display = 'block'
    button.style.display = 'none'
  }
}
btns.addEventListener('click', toggleIcon)

const navLinks = document.querySelectorAll('.link')

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    linksContainer.style.height = 0
  })
})
// select all the input field for validation
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const address = document.querySelector('#address')
const phoneNumber = document.querySelector('#number')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  inputCheck()
  if (isFormValid() == true) {
    form.submit()
  } else {
    e.preventDefault()
  }
})

function isFormValid() {
  const inputContainers = form.querySelectorAll('.input-state')
  let result = true
  inputContainers.forEach((state) => {
    if (state.classList.contains('error')) {
      result = false
    }
  })
  return result
}

function inputCheck() {
  // username
  const usernameValue = username.value.trim()
  if (usernameValue === '') {
    setError(username, 'username is blank')
  } else if (username != '') {
    setSuccess(username, "It's all good")
  }

  //   validate Email
  const emailValue = email.value.trim()
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/

  if (emailValue === '') {
    setError(email, 'Email input is empty !')
  }
  if (emailValue.match(pattern)) {
    setSuccess(email, 'looks good')
  }
  if (emailValue.length > 20) {
    setError(email, 'email is too long')
  }

  // address validation

  const addressValue = address.value.trim()
  if (addressValue === '') {
    setError(address, 'input address is empty')
  } else if (addressValue.length > 200) {
    setError(address, 'address is longer than 200 character')
  } else if (addressValue != '') {
    setSuccess(address, 'it looks good')
  }

  //  validate the phone number input
  const phoneNumberValue = phoneNumber.value.trim()
  let phoneValidator = /^[0][1-9][0-1]\d{8,12}$/
  if (phoneNumberValue === '') {
    setError(phoneNumber, 'Add your phone number')
  } else if (!phoneNumberValue.match(phoneValidator)) {
    setError(phoneNumber, 'Invalid phone number')
  } else if (phoneNumberValue.match(phoneValidator)) {
    setSuccess(phoneNumber, 'looks good')
  }

  // password and confirm password
  const passwordValue = password.value.trim()
  const cfrnpasswordValue = confirmPassword.value.trim()

  if (passwordValue === '') {
    setError(password, "password can't be empty")
  } else if (passwordValue != '' && passwordValue.length < 5) {
    setError(password, 'password length should be greater than 5')
  } else {
    setSuccess(password, 'looks good')
  }

  //   confirm password
  if (cfrnpasswordValue === '') {
    setError(confirmPassword, "password can't be empty")
  } else if (cfrnpasswordValue != '' && cfrnpasswordValue.length < 5) {
    setError(password, 'password length should be greater than 5')
  } else if (cfrnpasswordValue != passwordValue) {
    setError(confirmPassword, 'password does not match')
  } else {
    setSuccess(confirmPassword, 'looks good')
  }
}

// error function
function setError(inputElement, message) {
  const inputParent = inputElement.parentElement
  if (inputParent.classList.contains('success')) {
    inputParent.classList.remove('success')
  } else {
    inputParent.classList.add('error')
    const errorMessage = inputParent.querySelector('small')
    errorMessage.textContent = message
  }
}

// success function

function setSuccess(inputElement, message) {
  const inputParent = inputElement.parentElement
  if (inputParent.classList.contains('error')) {
    inputParent.classList.remove('error')
  } else {
    inputParent.classList.add('success')
    const successMessage = inputParent.querySelector('small')
    successMessage.textContent = message
  }
}

// functionality for hiding and showing the password
const showIcon1 = document.querySelector('.visible-icon-1')
const showIcon2 = document.querySelector('.visible-icon-2')
const hideIcon1 = document.querySelector('.hidden-icon-1')
const hideIcon2 = document.querySelector('.hidden-icon-2')

//
showIcon1.addEventListener('click', function () {
  password.setAttribute('type', 'text')
  showIcon1.style.display = 'none'
  hideIcon1.style.display = 'block'
})

hideIcon1.addEventListener('click', function () {
  confirmPassword.setAttribute('type', 'password')
  showIcon1.style.display = 'block'
  hideIcon1.style.display = 'none'
})

showIcon2.addEventListener('click', function () {
  confirmPassword.setAttribute('type', 'text')
  showIcon2.style.display = 'none'
  hideIcon2.style.display = 'block'
})

hideIcon2.addEventListener('click', function () {
  confirmPassword.setAttribute('type', 'password')
  showIcon2.style.display = 'block'
  hideIcon2.style.display = 'none'
})

// let state = false
// showIcon1.addEventListener('click', function () {
//   //   if (passwordValue.length > 1) {
//   if (state) {
//     password.setAttribute('type', 'text')
//     showIcon1.style.display = 'none'
//     hideIcon1.style.display = 'block'
//     state = false
//   } else {
//     state = true
//   }
// })

// hideIcon1.addEventListener('click', function () {
//   if (!state) {
//     password.setAttribute('type', 'password')
//     showIcon1.style.display = 'block'
//     hideIcon1.style.display = 'none'
//   }
// })
