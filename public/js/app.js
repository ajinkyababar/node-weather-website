console.log('Client side javascript file is loaded!')



const weatherFrom = document.querySelector('form')
const serachElement = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherFrom.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = serachElement.value 
    messageOne.textContent = 'loding...'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
            messageTwo.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})


})