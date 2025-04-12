
// Au clic sur le bouton #register, envoyez les informations renseignées dans les différents champs vers le backend avec la toute POST /signup.
// Si les informations sont correctes, renvoyez true et redirigez votre page vers index.html (en utilisant window.location.assign()).
document.querySelector('#register').addEventListener('click', function(){
    const name = document.querySelector('#registerName').value
    const email = document.querySelector('#registerEmail').value
    const password = document.querySelector('#registerPassword').value

    fetch('https://weatherapp-part4-backend-iota.vercel.app/users/signup', {
        
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ name, email, password })
    }).then(response => response.json())
    .then(data => {
        if(data.result === true){
            console.log(true)
            window.location.assign('index.html') 
        }
    })
})

// Au clic sur le bouton #connection, envoyez les informations renseignées dans les différents champs vers le backend avec la toute POST /signin.
// Si les informations sont correctes et qu’elles correspondent bien à un utilisateur en BDD, renvoyez true et redirigez votre page vers index.html (en utilisant window.location.assign()).
document.querySelector('#connection').addEventListener('click', function(){
    const email = document.querySelector('#connectionEmail').value
    const password = document.querySelector('#connectionPassword').value

    fetch('https://weatherapp-part4-backend-iota.vercel.app/users/signin', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email, password })
    }).then(response => response.json())
    .then(data => {
        if(data.result === true){
            console.log(true)
            window.location.assign('index.html') 
        }
    })
})