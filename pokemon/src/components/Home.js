import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="home">
                <center><img src="pokemon2.png" width="300" height="200"/></center>
            </div>

            <div className="home" style={{"text-align": "center"}} >
                <h1> Welcome Pokémon Trainers!</h1>
            </div>
            
            <center><pre>{`
            Welcome to the world of Pokémon! This world is inhabited by creatures called Pokémon! 
            For some people, Pokémon are pets. Others use them for fights. 
            Your very own Pokémon adventure is about to unfold! 
            A world of dreams and adventures with Pokémon awaits!
            Let's go!
            `}</pre></center>

            <center><img src="pokemon5.jpeg" width="300" height="200"/></center>

            <Link to={`/pokedex`} className="alert alert-primary">POKEDEX</Link>

        </div>
    )
};

export default Home;
