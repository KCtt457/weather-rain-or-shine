import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherResults from "./WeatherResult";

const apiURL = (cityName: string, countryCode: string) => `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=` + config.weatherKey;

interface WeatherFormElements extends HTMLFormControlsCollection {
    cityName: HTMLInputElement;
    countryCode: HTMLInputElement;
}

function WeatherHomePage(): JSX.Element {

    const [weatherData, setWeatherData] = React.useState({});

    async function getCurrentWeatherByCityCountry(event: SubmitEvent) {
        const form = document.getElementById('weatherForm') as HTMLFormElement;
        event.preventDefault();
        const formElements = form.elements as WeatherFormElements;
        const city = formElements['cityName'];
        const country = formElements['countryCode'];

        try {
            const response = await fetch(apiURL(city.value, country.value));
            const responseData = await response.json();
            setWeatherData(responseData);
            console.log(responseData);
        } catch(error) {
            const errorMessage = 'An errror has occurred';
            setWeatherData({ error: errorMessage });
        }
    }

    React.useEffect(() => {
        document.addEventListener('submit', getCurrentWeatherByCityCountry);
        return () => document.removeEventListener('submit', getCurrentWeatherByCityCountry);
    }, []);

    return (
        <>
            <WeatherForm/>
            <WeatherResults weatherData={weatherData}/>
        </>
    )
}

export default WeatherHomePage;