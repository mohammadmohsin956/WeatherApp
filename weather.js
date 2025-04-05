const input = document.getElementById('inp')
const button = document.querySelector('.btn')
const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const humid = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

button.addEventListener('click',updatelocation)


let cities = "agra"
async function weatherDetails(location) {
    let url = await fetch(`http://api.weatherapi.com/v1/current.json?key=ce706d7138b9450e8a8113449252502&q=${location}&aqi=no`)
    let data = await url.json()
    console.log(data);
   let locationName = data.location.name
   let temprature = data.current.temp_c
   let humidity = data.current.humidity
   let windspeed = data.current.vis_km
   updateonUi(locationName,temprature,humidity,windspeed)
    
}

function updatelocation() {
    cities = input.value
    input.value=""
    weatherDetails(cities)
}
weatherDetails(cities)

function updateonUi(locationName,temprature,humidity,windspeed) {
    city.innerHTML=locationName
    temp.innerHTML=temprature
    humid.innerHTML=humidity
    wind.innerHTML=windspeed
}
