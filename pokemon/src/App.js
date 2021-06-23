import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pokedex from './components/Pokedex';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Pokedex } />
        </BrowserRouter>
    )
};

export default App;