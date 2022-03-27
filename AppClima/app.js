window.addEventListener('load', ()=>{
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('temp-valor')
    let temperaturaDescripcion = document.getElementById('temp-desc')
    let Ubicacion = document.getElementById('ubicacion')
    let velocidad = document.getElementById('vel-viento')



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            //console.log(posicion);
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            //ubicacion actual
            //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=53efd0bac4afba45f442bf68668ec2e9'
            //ubicacion por ciudad
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=vedia&lang=es&unitsmetric&appid=53efd0bac4afba45f442bf68668ec2e9'

            //console.log(url)
            fetch(url)
            .then(response => {return response.json()})
            .then(data => {
                console.log(data.main.temp)
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent= `${temp}° K`
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                Ubicacion.textContent = data.name
                velocidad.textContent = `${data.wind.speed} m/s`
                //iconos animados
                console.log(data)

                switch(data.weather[0].main){
                    case 'Thunderstorm':
                        iconoAnimado.src = 'animated/thunder.svg'
                    console.log('Tormenta')
                    break;
                    case 'Drizzle':
                        iconoAnimado.src = 'animated/rainy-2.svg'
                    console.log('Llovizna')
                    break;
                    case 'Rain':
                        iconoAnimado.src = 'animated/rainy-7.svg'
                    console.log('lluvia')
                    break;
                    case 'Nieve':
                        iconoAnimado.src = 'animated/snowy-6.svg'
                    console.log('Snow')
                    break;
                    case 'Clear':
                        iconoAnimado.src = 'animated/day.svg'
                    console.log('limpio')
                    break;
                    case 'Atmosphere':
                        iconoAnimado.src = 'animated/weather.svg'
                    console.log('Atmosfera')
                    break;
                    case 'Clouds':
                        iconoAnimado.src = 'animated/day-1.svg'
                    console.log('Nubes')
                    break;
                   
                }

            })
            .catch(error => {
                console.log("error!")
            })
            
        })
    }
})