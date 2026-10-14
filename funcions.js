
document.getElementById("nouUsuari").addEventListener("click",function(){


    fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("nom").innerHTML=data.results[0].name.first+" "+data.results[0].name.last
    document.getElementById("email").innerHTML=data.results[0].email
  });

  
})


