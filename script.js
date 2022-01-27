const image = document.getElementById("my-body");
image.onload = function () {
  const engine = new RainyDay({
    image: "my-body",
  });
  engine.rain([[5, 2, 2]]);
};

const desc = document.getElementById("description");
		



const city = document.getElementById("city");
let cityName = "";

city.addEventListener("keyup", (event) => {
  if(event.key==="Enter"){
    cityName = event.target.value;

    const APIkey = "181a8471fec1b0c34c161f8a1dabcd8d";
  
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric&lang=tr`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        document.getElementById("name").textContent =
        data["name"];
        const descriptionData=data["weather"]["0"]["description"]
        document.getElementById("description").textContent =
          descriptionData;

          if( descriptionData==="kapalı"){
            document.getElementById("weather-info-img").src="./images/cloudy.png"
          }
          else if(descriptionData==="parçalı bulutlu"||descriptionData==="parçalı az bulutlu"||descriptionData==="az bulutlu"){
            document.getElementById("weather-info-img").src="./images/semi-cloudy.png"

          }
          else if(descriptionData==="açık"){
            document.getElementById("weather-info-img").src="./images/full-moon.png"
          }
          
  
        document.getElementById("derece").textContent =
          data["main"]["temp"].toFixed(1);
        document.getElementById("hissedilen").textContent =
          data["main"]["feels_like"].toFixed(1);
  
        document.getElementById("nemOrani").textContent =
          "% " + data["main"]["humidity"];
      
        
      })
      .catch((err) => {
        console.error(err);
      });
  
    
    if (desc.innerText.length === 0 || cityName.length===0) {
      document.querySelector("ul").style.display = "none";
      } 
      document.querySelector("ul").style.display = "block";
      
  }
  
});


