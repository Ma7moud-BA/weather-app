import React, { useRef } from "react";

const FormInputs = (props) => {
	const countryRef = useRef(null);

	const handlerClickGetWeather = () => {
		const country = countryRef.current.value;
		props.changeCountry(country);
	};
	const handlerInputEnter = (e) => {
		if (e.key === "Enter") {
			const country = countryRef.current.value;
			props.changeCountry(country);
		}
	};
	return (
		<div className="container ">
			<div className="row">
				<div className="col-md-6 my-sm-2">
					<input
						type="text"
						name="country"
						className="form-control"
						autoComplete="off"
						placeholder="Country / City"
						ref={countryRef}
						onKeyUp={handlerInputEnter}
					/>
				</div>

				<div className="col-md-6 my-sm-2 ">
					<button onClick={handlerClickGetWeather} className="btn btn-warning">
						Get Weather
					</button>
				</div>
			</div>
		</div>
	);
};

export default FormInputs;
