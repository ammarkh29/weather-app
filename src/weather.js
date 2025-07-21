export async function getWeather(locationInput) {
    try {

        const formattedLocation = locationInput.split(" ").join("%20")
        console.log(formattedLocation)
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formattedLocation}/today?unitGroup=us&key=T698TWLFDQ8PMU5FRFRDX2VRQ&contentType=json`, {
            "method": "GET",
            "mode": "cors",
            "headers": {
            }
        })

        const weatherData = await response.json()

        return weatherData.description


    } catch (error) {
        console.log(error)
    }

}


