function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => display(data)); 
}
  loadPosts(); // .then(data => display(data));display function dea...(post)parameter pass kora jabe, no problee 
function display (post){   
        const postContainer = document.getElementById('post');
        for(const posts of post){
            const div = document.createElement('div');
            div.classList.add('p');
            div.innerHTML =`
            <h3> ${posts.title}</h3>
            <p>${posts.id}</p>
            `;
            postContainer.appendChild(div);
        }
                                                                                        
}
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));