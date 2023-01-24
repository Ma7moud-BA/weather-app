import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Weather from "./Weather";

function GetWeather(props) {
	const [countryCode, setCountryCode] = useState("");
	const [country, setCountry] = useState("");
	const [temp, setTemp] = useState("");
	const [min_temp, setMinTemp] = useState(0);
	const [max_temp, setMaxTemp] = useState(0);
	const [description, setDescription] = useState("");
	const [iconCode, setIconCode] = useState();
	const [COUNTRY, setCOUNTRY] = useState("");
	const [flag, setFlag] = useState("");

	useEffect(() => {
		const API_KEY = "879c42e605297f3d137b574a9e277192";

		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${COUNTRY}&appid=${API_KEY}`;
		axios.get(URL).then((responce) => {
			setCountry(responce.data.name);
			setCountryCode(responce.data.sys.country);
			setTemp((responce.data.main.temp - 237.15).toFixed(2));
			setMinTemp((responce.data.main.temp_min - 237.15).toFixed(2));
			setMaxTemp((responce.data.main.temp_max - 237.15).toFixed(2));
			setDescription(responce.data.weather[0].description);
			setIconCode(responce.data.weather[0].id);
			// console.log("App ~ temp", temp);
			// console.log("App ~ temp", typeof min_temp);
			// console.log("App ~ temp", temp);
			console.log(responce.data);
			// console.log(responce.data.weather[0].description);
		});
	}, [COUNTRY]);
	if (props.status === true) {
		return (
			<div>
				<Weather
					country={country}
					countryCode={countryCode}
					temp={temp}
					min_temp={min_temp}
					max_temp={max_temp}
					description={description}
					iconCode={iconCode}
				/>
			</div>
		);
	}
}

export default GetWeather;
