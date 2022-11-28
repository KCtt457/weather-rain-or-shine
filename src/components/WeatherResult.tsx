import React from "react";

type Props = {
    weatherData: any;
}

const WeatherResults: React.FC<Props> = ({ weatherData }) => {
    return (
        <div>
            {`${weatherData}`}
        </div>
    )
};

export default WeatherResults;