import React from "react";
import "./App.css";

import { useSelector ,useDispatch} from "react-redux";
import {incNumber,decNumber,resetNumber} from "./actions/index"

const App = () => {

	const myState=useSelector((state)=>{
		return state.changeTheNumber
	})
	const dispatch=useDispatch()

	return (
		<>
		<div className="container">
			<h1>Increament/decrement counter</h1>
			<h3>Using react and redux</h3>
			<div class="quantity">
				<button className="minus" title="Decrement" onClick={()=> dispatch(decNumber(3))}><span>-</span></button>
				<input name="quantity" type="text"  value={myState}></input>
				<button className="plus" title="Increment" onClick={()=> dispatch(incNumber(5))}><span>+</span></button>
				<button className="reset" title="Reset" onClick={()=> dispatch(resetNumber(0))}><span>#</span></button>
			</div>
		</div>
		</>
	);
};

export default App;
