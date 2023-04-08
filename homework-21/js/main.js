const block = document.querySelector('.js--weather');
const form = document.querySelector('.js--form');
const formCity = document.querySelector('.js--input-city');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    block.innerHTML = "";
    getWeather();
});

function getWeather() {
    let cityName = formCity.value;
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=uk&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    let weatherImage = document.createElement('img');

    const promise = fetch(weatherAPI, {
        method: "GET"
    });

    promise.then(res => res.json()).then(data => {
        weatherImage.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        block.innerHTML = `<table><tbody>
            <tr><td>Місто</td><td>${data.name}</td>
            <tr><td>Температура</td><td>${data.main.temp}</td></tr>
            <tr><td>Тиск</td><td>${data.main.pressure}</td></tr>
            <tr><td>Опис</td><td>${data.weather[0].description}</td></tr>
            <tr><td>Вологість</td><td>${data.main.humidity}</td></tr>
            <tr><td>Швидкість вітру</td><td>${data.wind.speed}</td></tr>
            <tr><td>Напрям у градусах</td><td>${data.wind.deg}</td></tr>
            <tr><td>Іконка</td><td><img src="${weatherImage.src}"></td></tr>
        </tbody></table>`;
    });
}