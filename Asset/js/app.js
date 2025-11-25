console.log("JS Check");

let txtcity = document.getElementById("txt_city")

txtcity.addEventListener("keypress", e => {
    if (e.key == "Enter") {
        apicall(txtcity.value)

    }
})

let apicall = async (city) => {

    await fetch(`http://api.weatherapi.com/v1/current.json?key=bf647c06d8084567a3385416252411&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
        setWhether(data);
    })
    
}

let setWhether = (data) => {
   
    let city_name = document.getElementById("city_name")
    let country_name = document.getElementById("country_name")
    let main_temparature = document.getElementById("main_temparature")
    
    city_name.innerText = data.location.name;
    country_name.innerText = data.location.country;
    main_temparature.innerText = data.current.temp_c;
    main_status_image.src = data.current.condition.icon;
   
}