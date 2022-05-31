"use strict";
const URL = "https://api.openweathermap.org/data/2.5/onecall";

$(function ()
{
    $('.flip-card').mouseenter(function () {
        $('#blur').css("display","block")
    })
    $('.flip-card').mouseleave(function () {
        $('#blur').css("display","none")
    })


})





$.get(URL, {
    APPID: OPEN_WEATHER_KEY,
    lat: 40.74,
    lon: -73.98,
    unit: "imperial"
}).done(function (results) {
    console.log(results)
})

geocode("San Antonio, US", MAP_API_KEY).then(function (data) {
    console.log(data)
    $.get(URL, {
        APPID: OPEN_WEATHER_KEY,
        lat: data[1],
        lon: data[0],
        unit: "imperial"
    }).done(function (results) {
        console.log(results)
    })
});

