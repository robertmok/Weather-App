function mySearch() {
  var cityname = document.getElementById("city").value; 
  var xhttp;
  document.getElementById("hcast").innerHTML = "";
  document.getElementById("dcast").innerHTML = "";
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       displayFunc(xhttp);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&mode=xml&APPID=_OPENWEATHERMAP_KEY_HERE_" , true);
  xhttp.send();
}

function displayFunc(xml){
   var xmlDoc = xml.responseXML;
   var loc = xmlDoc.getElementsByTagName("city");
   var temp = xmlDoc.getElementsByTagName("temperature");
   var weather = xmlDoc.getElementsByTagName("weather");
   var wind = xmlDoc.getElementsByTagName("wind");
   var humidity = xmlDoc.getElementsByTagName("humidity");
   var temptxt, weathertxt, windtxt, humiditytxt, locationtxt;

   locationtxt = loc[0].getAttribute("name");
   document.getElementById("location").innerHTML = locationtxt;

   temptxt = temp[0].getAttribute("value");
   document.getElementById("ctemp").innerHTML = temptxt;

   weathertxt = weather[0].getAttribute('value');
   document.getElementById("wcondition").innerHTML = weathertxt.toUpperCase();

   windtxt = wind[0].getElementsByTagName('speed')[0].getAttribute('name') + "<br>" + wind[0].getElementsByTagName('speed')[0].getAttribute('value') + " m/s  " + wind[0].getElementsByTagName('direction')[0].getAttribute('name');
   document.getElementById("cwind").innerHTML = windtxt;

   humiditytxt = humidity[0].getAttribute('value') + humidity[0].getAttribute('unit');
   document.getElementById("chumidity").innerHTML = humiditytxt;

   if (weathertxt == "few clouds"){
    document.body.style.backgroundImage = "url('http://4.bp.blogspot.com/-91ob4kWBKJI/USjFezcV6WI/AAAAAAAAEQM/i7pPFzBY5QI/s1600/IMG_2603.JPG')";
         document.getElementById("rightside").innerHTML = '<img src="http://www.free-icons-download.net/images/cloud-icon-46233.png" alt="few clouds">';

   } else if (weathertxt == "scattered clouds"){
    document.body.style.backgroundImage = "url('http://www.myfreetextures.com/wp-content/uploads/2014/10/sky2.jpg')";
                document.getElementById("rightside").innerHTML = '<img src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Clouds-icon.png" alt="scattered clouds">';

   } else if (weathertxt == "broken clouds" || weathertxt == "overcast clouds") {
    document.body.style.backgroundImage = "url('http://img06.deviantart.net/f330/i/2015/068/6/0/broken_clouds_1__by_terraluna5-d8l479n.jpg')";
               document.getElementById("rightside").innerHTML = '<img src="https://cdn1.iconfinder.com/data/icons/weather-icons-6/512/clouds-256.png" alt="broken clouds">';

   } else if (weather[0].getAttribute('number') >= 300 && weather[0].getAttribute('number') <= 321) {
    document.body.style.backgroundImage = "url('http://wall.alphacoders.com/big.php?i=593235')";
                document.getElementById("rightside").innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/wthr-color/32/cloud-drizzle-256.png" alt="drizzle">';

   } else if (weather[0].getAttribute('number') >= 500 && weather[0].getAttribute('number') <= 531) {
    document.body.style.backgroundImage = "url('https://s.w-x.co/56a3d494-ae4e-48be-a657-43197dac5401.jpg')";
                document.getElementById("rightside").innerHTML = '<img src="http://simpleicon.com/wp-content/uploads/rain-256x256.png" alt="rain">';

   } else if (weather[0].getAttribute('number') >= 200 && weather[0].getAttribute('number') <= 232) {
    document.body.style.backgroundImage = "url('http://seattletimes.wpengine.netdna-cdn.com/today/files/2014/08/Lightning.jpg')";
               document.getElementById("rightside").innerHTML = '<img src="http://cdn.flaticon.com/png/256/17785.png" alt="thunderstorm">';

   } else if (weather[0].getAttribute('number') >= 600 && weather[0].getAttribute('number') <= 622) {
    document.body.style.backgroundImage = "url('http://www.traemcneely.com/wp-content/uploads/2015/03/wpid-wp-14264236759511.jpeg')";
               document.getElementById("rightside").innerHTML = '<img src="http://downloadicons.net/sites/default/files/snow-icon-46069.png" alt="snowing">';

   } else {
     document.body.style.backgroundImage = "url('https://annesturetucker.files.wordpress.com/2012/06/img_0941.jpg')";
          document.getElementById("rightside").innerHTML = '<img src="http://cdn.flaticon.com/png/256/53565.png" alt="clear sky">';
   }
}

function changeUnit(unit) {
  var cityname = document.getElementById("city").value; 
  var cunit = unit;
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       displayUnit(xhttp);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units="+cunit+"&mode=xml&APPID=_OPENWEATHERMAP_KEY_HERE_" , true);
  xhttp.send();
}

function displayUnit(xml){
   var xmlDoc = xml.responseXML;
   var temp = xmlDoc.getElementsByTagName("temperature");
   var temptxt;
   temptxt = temp[0].getAttribute("value");
   document.getElementById("ctemp").innerHTML = temptxt;
}

function hourly() {
  var cityname = document.getElementById("city").value; 
  var xhttp;
  document.getElementById("hcast").innerHTML = "";
  document.getElementById("dcast").innerHTML = "";
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       displayHourly(xhttp);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q="+cityname+"&units=metric&mode=xml&APPID=_OPENWEATHERMAP_KEY_HERE_" , true);
  xhttp.send();
}

function displayHourly(xml){
   var xmlDoc = xml.responseXML;
   var x = xmlDoc.getElementsByTagName("time");
   var i;
   var hourlytxt = '<br> <div class="table-responsive"> <table class="table table-striped"> ';
   <!-- x.length -->
   for(i = 0; i < 3; i++){
  hourlytxt += "<thead> <tr> <th> Time: " + x[i].getAttribute("from").slice(11,16) + "</th> <th> Temperature: </th> <th> Wind: </th> <th> Humidity: </th> </tr> </thead> <tbody> <tr> <td>" + x[i].getElementsByTagName("symbol")[0].getAttribute("name").toUpperCase() + "</td> <td>" + x[i].getElementsByTagName("temperature")[0].getAttribute("value") + " "+ x[i].getElementsByTagName("temperature")[0].getAttribute("unit") + "</td> <td>" + x[i].getElementsByTagName("windSpeed")[0].getAttribute("name") + "<br>" + x[i].getElementsByTagName("windSpeed")[0].getAttribute("mps") + " m/s " + x[i].getElementsByTagName("windDirection")[0].getAttribute("name") + "</td> <td> " + x[i].getElementsByTagName("humidity")[0].getAttribute("value") + x[i].getElementsByTagName("humidity")[0].getAttribute("unit") + "</td> </tr> </tbody>"; 
   }
   hourlytxt += " </table> </div>";
   document.getElementById("hcast").innerHTML = hourlytxt;
}

function daily() {
  var cityname = document.getElementById("city").value; 
  var xhttp;
  document.getElementById("hcast").innerHTML = "";
  document.getElementById("dcast").innerHTML = "";
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       displayDaily(xhttp);
    }
  };
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityname+"&units=metric&mode=xml&APPID=_OPENWEATHERMAP_KEY_HERE_" , true);
  xhttp.send();
}

function displayDaily(xml){
   var xmlDoc = xml.responseXML;
   var x = xmlDoc.getElementsByTagName("time");
   var i;
   var dailytxt = '<br> <div class="table-responsive"> <table class="table table-striped">';
   <!-- x.length -->
   for(i = 0; i < 5; i++){
     dailytxt += "<thead> <tr> <th> Date: " + x[i].getAttribute("day") + "</th> <th> Temperature: </th> <th> Wind: </th> <th> Humidity: </th> </tr> </thead> <tbody> <tr> <td>" + x[i].getElementsByTagName("symbol")[0].getAttribute("name").toUpperCase() + "</td> <td>" + x[i].getElementsByTagName("temperature")[0].getAttribute("day") + "</td> <td>" + x[i].getElementsByTagName("windSpeed")[0].getAttribute("name") + "<br>" + x[i].getElementsByTagName("windSpeed")[0].getAttribute("mps") + " m/s " + x[i].getElementsByTagName("windDirection")[0].getAttribute("name") + "</td> <td>" + x[i].getElementsByTagName("humidity")[0].getAttribute("value") + x[i].getElementsByTagName("humidity")[0].getAttribute("unit") + "</td> </tr> </tbody>"; 
   }
   dailytxt += " </table> </div>";
   document.getElementById("dcast").innerHTML = dailytxt;
}
