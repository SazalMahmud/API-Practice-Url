const LoadQuotes =() =>{
    fetch('https://api.kanye.rest/')
    .then(Response => Response.json())
    .then(data =>display(data));
}

const display = datas =>{
    const element = document.getElementById('quote');
    element.innerText = datas.quote;
}