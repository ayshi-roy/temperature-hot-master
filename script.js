let search = document.getElementById("search");
let inputValue = document.getElementById("inputValue");
let name = document.getElementById("name");
let temp = document.getElementById("temp");
let describe = document.getElementById("describe");
let weatherIcon = document.getElementById("weatherIcon");

search.addEventListener('click',function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+",&units=metric&appid=cc054050ce7ab6bf8889dbe597b72961")
   .then(res => res.json())
   .then(data => {
        const nameValue = data['name'];
        const tempValue = data['main']['temp'];
        const Describe = data['weather'][0]['description'];
        const weather = ("<img src='https://openweathermap.org/img/wn/" + data.weather[0].icon +"@4x.png'>");
       

        weatherIcon.innerHTML = weather;
        name.innerText = nameValue;
        temp.innerText = tempValue;
        describe.innerText = Describe;     

   })
})
