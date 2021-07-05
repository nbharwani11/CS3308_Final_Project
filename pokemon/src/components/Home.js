import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Link to={`/pokedex`} className="alert alert-primary">POKEDEX</Link>
    )
};

export default Home;