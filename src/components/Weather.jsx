import React from "react";

const Weather = (props) => {
	const {
		country,
		countryCode,
		temp,
		min_temp,
		max_temp,
		description,
		iconCode,
		status,
	} = props;
	// console.log(typeof min_temp);
	let icon;

	if (iconCode >= 200 && iconCode < 300) {
		icon = "wi wi-day-sunny display-1 ";
	} else if (iconCode >= 300 && iconCode < 400) {
		icon = "wi wi-thunderstorm display-1 ";
	} else if (iconCode >= 500 && iconCode < 600) {
		icon = "wi wi-rain display-1 ";
	} else if (iconCode >= 600 && iconCode < 700) {
		icon = "wi wi-snow display-1 ";
	} else if (iconCode === 800) {
		icon = "wi wi-day-sunny display-1 ";
	} else if (iconCode >= 801 && iconCode < 805) {
		icon = "wi wi-day-cloudy display-1 ";
	}
	const imgSrc = `https://www.countryflagicons.com/FLAT/64/${countryCode}.png`;
	if (status) {
		return (
			<div className="container border border-warning p-3 text-light mt-5">
				<div className="cards">
					<img className="my-3" src={imgSrc} alt="country-flag" />
					<h1>
						{country},{countryCode}
					</h1>
					<h5 className="py-4">
						<i className={icon}></i>
					</h5>
					<h1 className="py-2">{temp}&deg;</h1>
					<h3>
						<span className="px-4">Max:{min_temp}&deg;</span>
						<span className="px-4">Min:{max_temp}&deg;</span>
					</h3>
					<h4 className="py-3">{description}</h4>
				</div>
			</div>
		);
	} else if (!status) {
		return (
			<div class="alert alert-warning mt-5" role="alert">
				Enter a valid country or city name
			</div>
		);
	}
};

export default Weather;
