var btnSubmit = document.getElementById('submitBtn');
var inputVal = document.getElementById('city');
var wReport = document.getElementById('report');
var description = document.getElementById('description');
var cityTemp = document.getElementById('temperature');



// Fetching API Data
btnSubmit.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputVal.value + '&appid=b459275d2c438c02681adf12da174750')
        .then(response => response.json())
        .then(data => console.log(data));
        // .then(ShowData);
})



// Function to DIsplay Data on HTML Page
const ShowData = (weatherData)=> {
    // temp is shown in Kelvin by default
    var kelvinTocel = `${weatherData.main.temp}`
    // conversion of kelvin to celcius
    kelvinTocel = Math.floor(kelvinTocel - 273.5)

    
    cityTemp.innerHTML = `${kelvinTocel} °C`
    description.innerText = `${weatherData.weather[0].description}`
    console.log('it works');
    
}

// function to show and hide weather data
function show(params) {
    document.getElementById(params).style.display = 'block';
    return false;
}
