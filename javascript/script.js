$(document).ready(function() {
    var temp, condition;
    var wid = document.getElementById('wid').innerHTML;
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=' + wid, 
        dataType: 'json',
        success: function(data) {
           temp = data['main']['temp'];
           condition = data['weather'][0]['id'];
           $('#Temp').prepend(convert_temp(temp));
           document.getElementById("icon").src = get_icon(condition);
           document.getElementById("favicon").href = get_icon(condition);
        },
         error: function() {
            alert('Error: failed to retrieve weather data.');
        }
    });
});


function convert_temp(temp)
{
    return Math.round((temp - 273.15) * 1.8 + 32);
}

function get_icon(weather_code)
{
    if(weather_code <= 300)
        //thunderstorms
        return 'images/cloud310.png';
    else if(weather_code <= 500)
        //rain
        return 'images/rain4.png';
    else if(weather_code <= 600)
        //snow
        return 'images/cloud324.png';
    else if(weather_code <= 700)
        //weird stuff FIXME
        return 'images/sun94.png';
    else if(weather_code == 800)
        //sunny
        return 'images/sun94.png';
    else if(weather_code <= 900)
        //clouds
        return 'images/cloudy19.png';
    else if(weather_code != 903 && weather_code != 904)
        //windy
        return 'images/winds2.png';
    else if(weather_code == 906)
        //hail
        return 'images/cloud324.png';
    else
        //sunny
        return 'images/sun94.png';
}
