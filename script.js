let url = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '8bb581fa26f3d40971f0875e469d8519'
let difKelvin = 273.15
const leng = '&lang=es'

document.getElementById('botonBusqueda').addEventListener('click', () =>{
    const city = document.getElementById('ciudadEntrada').value
    if(city){
        fetchDatosClima(city)
    }
})

function fetchDatosClima(city){
    fetch(`${url}?q=${city}&appid=${api_key}${leng}`)
    .then(data => data.json())
    //.then(response => console.log(response))
    .then(data => mostrarDatosClima(data))


}
function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const cityname = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const hum = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const citytitle = document.createElement('h2')
    citytitle.textContent = `${cityname}, ${countryName}`

    const tempinfo = document.createElement('p')
    tempinfo.textContent = `La Temperatura Es: ${Math.floor(temp-difKelvin)}°C`

    const huminfo = document.createElement('p')
    huminfo.textContent = `La Humedad Es: ${hum}%`

    const iconinfo = document.createElement('img')
    iconinfo.src= `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptioninfo = document.createElement('p')
    descriptioninfo.textContent = `La descripción Meteorológica Es: ${description}`

    divDatosClima.appendChild(citytitle)
    divDatosClima.appendChild(tempinfo)
    divDatosClima.appendChild(huminfo)
    divDatosClima.appendChild(iconinfo)
    divDatosClima.appendChild(descriptioninfo)
}

