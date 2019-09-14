import React from 'react';
import './App.css';
import STO from "./components/STO";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/Store";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <STO/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
