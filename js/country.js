const country = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then (data => display(data));
}
country();

const display = data2 =>{
    const countryDiv = document.getElementById('countrys');
    //for(const countrys of data2){
       // console.log(countrys);
   // }
 // for loop er altarnative
   data2.forEach(data3 =>{
       const div = document.createElement('div');
       //color
       div.classList.add('country');

          // shortcut
          div.innerHTML =`
              <h2>${data3.name.common} </h2>
              <p>${data3.name.official} </p>
              <button onclick="cuntryName('${data3.name.common}')">Details</button>

          `;
        //....... h2 tag
       /* const h2 = document.createElement('h2');>
       h2.innerText = data3.name.common;
       div.appendChild(h2);
        // p tag
       const p = document.createElement('p');
       p.innerText =data3.name.official;
       div.appendChild(p) */
       //..........

       countryDiv.appendChild(div);
          
   });

}

const cuntryName = name =>{
    const url =`https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(Response => Response.json())
    .then(data =>displayConutry(data[0]));
    
}
const displayConutry = data4 =>{
    const countryDiv = document.getElementById('con-details');
    countryDiv.innerHTML =`
         <h4>${data4.name.common}</h4>
         <p>${data4.name.official}</p>
    
    `;

}