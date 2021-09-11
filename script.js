const body = document.querySelector('body');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const triggerButton = document.createElement('button');
body.appendChild(div)
div.appendChild(h1);
div.appendChild(triggerButton);
triggerButton.textContent = 'New Idea';
// const img = document.createElement('img');
// const addImg = div.appendChild(img)

triggerButton.addEventListener('click', function () {

    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(Response => Response.json())
        .then(data => h1.textContent = `Idea is: ${data.activity}`);

})