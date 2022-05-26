"use strict";
const URL = "https://api.openweathermap.org/data/2.5/onecall";

$(function ()
{
    $('img').mouseenter(function () {
        $('#map').css('background', 'black')
    })


})





// $.get(URL, {
//     APPID: OPEN_WEATHER_KEY,
//     lat: 40.74,
//     lon: -73.98,
//     unit: "imperial"
// }).done(function (results) {
//     console.log(results)
// })
//
// geocode("San Antonio, US", MAP_API_KEY).then(function (data) {
//     console.log(data)
//     $.get(URL, {
//         APPID: OPEN_WEATHER_KEY,
//         lat: data[1],
//         lon: data[0],
//         unit: "imperial"
//     }).done(function (results) {
//         console.log(results)
//     })
// });

