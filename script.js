const excuseURL = 'https://excuser-three.vercel.app/v1/excuse'
const dadJokeURL = 'https://icanhazdadjoke.com/';
const programmingJokeURL = 'https://v2.jokeapi.dev/joke/Programming';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

function getExcuse() {
    fetch(excuseURL)
        .then(response => response.json())
        .then(data => {
            // Exibe a desculpa no parágrafo
            document.getElementById('excuse').textContent = data[0].excuse;
        })
        .catch(error => console.error('Error while finding excuse:', error));
}

function getDadJoke(){
    fetch(dadJokeURL, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('dadJoke').textContent = data.joke;
            })
            .catch(error => console.error('Error while finding dad joke:', error));
}

function getProgrammingJoke(){
    fetch(programmingJokeURL)
        .then(response => response.json())
        .then(data => {
            let joke = data.type === 'single' ? data.joke : `${data.setup} ... ${data.delivery}`;
            document.getElementById('programmingJoke').textContent = joke;
        })
        .catch(error => console.error('Error while finding programming joke:', error));
}