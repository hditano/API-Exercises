const body = document.querySelector('body');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const triggerButton = document.createElement('button');
const p = document.createElement('p');
body.appendChild(div)
div.appendChild(h1);
div.appendChild(p);
div.appendChild(triggerButton);
triggerButton.textContent = 'Show Posts';
const newArray = [];

// const img = document.createElement('img');
// const addImg = div.appendChild(img)

// triggerButton.addEventListener('click', function () {
//     fetch('https://apis.scrimba.com/jsonplaceholder/users')
//         .then(Response => Response.json())
//         .then(data => {
//             const newArray = data.slice(0,5);
//             p.textContent = newArray
//         })
// })


triggerButton.addEventListener('click', function() {
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
            const postArray = data.slice(0,5);
            let html = '';
            for(let post of postArray) {
                html += `<h3>${post.title} </h3> 
                        <p>${post.body}</p>
                        <hr />`
            }
            div.innerHTML = html;
        })
})