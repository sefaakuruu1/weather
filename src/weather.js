const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'dedcc327aa0e08a6ee804c3f6375745c'

const setQuery = (e)=>{
if(e.keyCode == '13')
getResult(searchBar.value)
}

const getResult=(cityName) => {
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
       return weather.json() //promise yapısında kullanıldıgı için direkt kullanamıyoruz.
    })
    .then(displayResult)
}

const displayResult=(result)=>{
    let city=document.querySelector('.city')
    city.innerText=`${result.name},${result.sys.country}`

    let temp=document.querySelector('.temp')
     temp.innerText=`${result.main.temp}°C`
    let desc=document.querySelector('.desc')
    console.log(result.weather[0].description)
    desc.innerText=result.weather[0].description;
    let minmax=document.querySelector('.minmax')
    minmax.innerText=`${result.main.temp_min}°C/${result.main.temp_max}°C`
}

const searchBar=document.getElementById('searchbar')
searchBar.addEventListener("keypress",setQuery)