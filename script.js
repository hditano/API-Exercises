const body = document.querySelector('body');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const triggerButton = document.createElement('button');
const submitBtn = document.querySelector('.submit-btn');
const textTitle = document.querySelector('#text-title');
const textArea = document.querySelector('#text-area');
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


triggerButton.addEventListener('click', function () {
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            const postArray = data.slice(0, 5);
            let html = '';
            for (let post of postArray) {
                html += `<h3>${post.title} </h3> 
                        <p>${post.body}</p>
                        <hr />`
            }
            div.innerHTML = html;
        })
})


// Will trigger the submit button.
// Line 52: will create an object containing the values that will be used on the fetch.
// Line 58: Will create options that goes along with the fetch function
// line 71: Will post everything to the API, adding whatever we wrote on the form to be sent to the API, along to adding to the List already created


submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const data = {
        title: `${textTitle.value}`,
        post: `${textArea.value}`,
    }

    const options = {
        method: 'POST',
        body: JSON.stringify({
            data
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(post => {
            div.innerHTML = `<h3>${textTitle.value} </h3> 
                        <p>${textArea.value}</p>
                        <hr />
                        ${div.innerHTML}`
        })
})


// Fetch that will use method 'POST' to send data to the API