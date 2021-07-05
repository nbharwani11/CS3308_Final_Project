import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Link to={`/pokedex`}>POKEDEX</Link>
    )
};

export default Home;