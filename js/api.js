function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadUserData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => display(data));

}
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));

}
//loadPosts();
function display(data){
      const ul = document.getElementById('users');
        for(const datas of data){
            //console.log(datas);
            const li = document.createElement('li');
            li.innerText = `name : ${datas.name} Phone : ${datas.phone}`;
            ul.appendChild(li);
        }
}



