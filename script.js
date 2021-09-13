const body = document.querySelector('body');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const triggerButton = document.createElement('button');
const fetchArray = document.querySelector('fetch-array');
const p = document.createElement('p');
body.appendChild(div)
div.appendChild(h1);
div.appendChild(p);
div.appendChild(triggerButton);
triggerButton.textContent = 'New Idea';
const newArray = [];

// const img = document.createElement('img');
// const addImg = div.appendChild(img)

triggerButton.addEventListener('click', function () {
    fetch('https://apis.scrimba.com/jsonplaceholder/users')
        .then(Response => Response.json())
        .then(data => {
            const newArray = data.slice(0,5);
            console.log(newArray);
        })
})

