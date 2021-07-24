import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const BattleCard = ({ pokemon, currentHealth, totalHealth = 100, attack, reverse }) => {
    const attackHandler = (move) => {
        attack(move)
    }

    const health = currentHealth/totalHealth * 100

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                "border-radius": "10px",
                "margin-top": "20px",
                flexDirection: reverse ? "row-reverse" : "",
                "background-color": "rgba(255, 255, 255, 0.5)",
                height: "40vh"
            }}
        >
            <div style={{display: "flex", flexDirection: "column"}}>
                {reverse && pokemon.moves.slice(0, 4).map(
                    (move) => <button onClick={() => attackHandler(move.move)} className="btn btn-primary">{move.move.name}</button>
                )}
            </div>
            <div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div>{ pokemon.name }</div>
                    <img src={reverse ? pokemon.sprites.back_default : pokemon.sprites.front_default } alt={ pokemon.name } />
                    <div>Health: { currentHealth }/{ totalHealth }</div>
                </div>
                <ProgressBar now={health} />
            </div>
        </div>
    )
};

export default BattleCard;
