document.addEventListener('DOMContentLoaded', function () {
    $('#selector').on('click', function () {
        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=fJ9SlU4rVsUv2yCqN5v9e61T29VDHSKa'
        })
            .done(function (data) {
                console.log(data);
            })
    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     $('button').on('click', function () {
//         $.ajax({
//             method: 'GET',
//             url: 'https://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&appid=4a48e1e1428fd83889074671fbf259d9'
//         }).done(function (data) {
//             const currentWeather = data.weather[0].main;
//             const weatherDesc = data.weather[0].description;
//             const weatherIcon = data.weather[0].icon;

//             $('.results').empty();
//             $('.results').append('<img src="http://openweathermap.org/img/wn/' + weatherIcon + '.png">');
//             $('.results').append('<p>' + currentWeather + '</p>');
//             $('.results').append('<p>' + weatherDesc + '</p>');
//             $('.weatherText').remove();
//             ;
//         })
//     })
// });
