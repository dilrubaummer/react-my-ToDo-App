import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {

    return (

        <div className="App">
           
            <Header/>
            <Todo/>
           
        </div>


        
    );
}

export default App;
