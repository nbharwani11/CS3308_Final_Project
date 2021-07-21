import React from 'react';
import { Link } from 'react-router-dom';
import Sound from 'react-sound';
import home_opening from '../utils/audio/home_opening.mp3';


const Home = () => {
    return (
        <div class="p-3 mb-2 bg-light text-dark">
            <div className="home">
                <center><img src="pokemon2.png" width="300" height="200"/></center>
            </div>

            <div className="home" style={{"textAlign": "center"}} >
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

<<<<<<< HEAD
            <Link to={`/pokedex`} className="alert alert-primary">POKEDEX</Link>
=======
            <button type="button" class="btn btn-outline-primary btn-lg btn-block"><Link to={"/pokedex"}>Pokedex</Link></button>

>>>>>>> 4c28c6fd3991eb529d0294cfcba2829f69179f3f
            <Sound 
                url={home_opening}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />
        </div>
    )
};

export default Home;
