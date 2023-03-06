import React from 'react'

import {Route, Routes } from "react-router-dom"


import "./App.css";
import Home from "./Pages/Home"
const login =() => {
	alert("umefinya")
}
const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home logged={login}/>}/>
			</Routes>
			
		</div>
	)
}

export default App