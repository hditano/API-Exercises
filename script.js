const body = document.querySelector('body');
const div = document.createElement('div');
const submitBtn = document.querySelector('.submit-btn');
body.appendChild(div)
let postsArrays = []





fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        postsArrays = data.slice(0, 5);
        renderPosts();
    })


// Will trigger the submit button.
// Line 41: will create an object containing the values that will be used on the fetch.
// Line 47: Will create options that goes along with the fetch function
// line 55: Will post everything to the API, adding whatever we wrote on the form to be sent to the API, along to adding to the List already created

function renderPosts() {
    let html = '';
    for (let post of postsArrays) {
        html += `<h3>${post.title} </h3> 
                <p>${post.post}</p>
                <hr />`
    }
    div.innerHTML = html;
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const textTitle = document.getElementById('text-title').value;
    const textArea = document.getElementById('text-area').value;

    const data = {
        title: textTitle,
        post: textArea
    }


    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(post => {
            postsArrays.unshift(post);
            renderPosts()
        })
})