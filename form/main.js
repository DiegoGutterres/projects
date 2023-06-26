const form = document.getElementById('form');
const camp = document.getElementById('camp');

form.addEventListener('submit', function(e){
    e.preventDefault()
    window.localStorage.setItem('userName', camp.value);
    console.log(localStorage.getItem('userName'));

    window.location.href = "home.html"

});