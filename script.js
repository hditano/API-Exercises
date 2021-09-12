const body = document.querySelector('body');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const triggerButton = document.createElement('button');
const p = document.createElement('p');
body.appendChild(div)
div.appendChild(p);
div.appendChild(h1);
div.appendChild(triggerButton);
triggerButton.textContent = 'New Idea';
const newArray = [];

// const img = document.createElement('img');
// const addImg = div.appendChild(img)

triggerButton.addEventListener('click', function() {
    fetch('https://apis.scrimba.com/jsonplaceholder/users')
    .then(Response => Response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            const myTempArray  = `Name: ${data[i].name} email: ${data[i].email}`
            console.log(data[i].name + data[i].email)
            newArray.push(myTempArray);
        }  
    })
})


// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then(Response => Response.json())
//     .then(data => h1.textContent = `Idea is: ${data.activity}`);