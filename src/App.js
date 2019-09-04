import React, { Component} from 'react';
import {hot} from 'react-hot-loader';

import Header from './components/Header'
import AuthPage from './components/AuthPage'
import './App.css';

class App extends Component{
	render(){
		return(
			<div className="App">
				<Header/>
				<AuthPage />
			</div>
		);
	}
}

export default hot(module)(App);