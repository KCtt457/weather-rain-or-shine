import React from "react";

function WeatherForm(): JSX.Element {
    return (
        <div>
            <h1>Enter your city and country to get the current weather update</h1>
            <form id="weatherForm" autoComplete="on">
                <label htmlFor="cityName">City: </label>
                <input type="text" id="cityName" name="cityName"/><br/>
                <label htmlFor="countryCode">Country: </label>
                <input type="text" id="countryCode" name="countryCode" pattern="[A-Za-z]{2}" title="Three letter country code"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default WeatherForm;