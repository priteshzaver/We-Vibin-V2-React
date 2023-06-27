import React, { useEffect, useState } from "react";
import { Login } from "./components/Login";
import { getTokenFromUrl } from "./spotify";

export const App = () => {
	const [token, setToken] = useState();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
		}
	}, []);

	return <div>{token ? <h1>Logged In</h1> : <Login />}</div>;
};
