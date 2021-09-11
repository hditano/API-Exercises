const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div)
const img = document.createElement('img');
const addImg = div.appendChild(img)

fetch('https://dog.ceo/api/breeds/image/random')
    .then(Response => Response.json())
    .then(data => img.setAttribute('src', `${data.message}`));