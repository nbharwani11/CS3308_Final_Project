import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemon, fetchOpponentBag } from '../actions';
import BattleCard from './BattleCard';
import { Container, Modal, Button } from 'react-bootstrap';

class Battle extends Component {
    state = {
        // user state
        activePokemonIndex: 0,
        userHealth: [80, 100, 100],
        userMaxHealth: [80, 100, 100],

        // opponent state
        activeOpponentPokemonIndex: 0,
        opponentHealth: [100, 100, 100, 100],
        opponentMaxHealth: [100, 100, 100, 100],

        isModalOpen: false,
        modalTitle: "Modal Title",
        modalText: "This is modal text",

        opponentCanAttack: true,
        isGameOver: false,
    }

    componentDidMount() {
        // TODO: Add logic to generate a specific array of pokemon with hp equivalent base experience // decides AI/enemy bag
        const opponentBagArray = [25, 37, 87, 104]
        this.props.fetchOpponentBag(opponentBagArray)
    }

    render() {
        const { bag, opponentBag } = this.props;
        const {
            activePokemonIndex,
            userHealth,
            userMaxHealth,
            activeOpponentPokemonIndex,
            opponentHealth,
            opponentMaxHealth,
            isModalOpen,
            modalTitle,
            modalText,
            isGameOver,
            opponentCanAttack,
        } = this.state;
        const pokemon = bag[activePokemonIndex];
        const opponentPokemon = opponentBag[this.state.activeOpponentPokemonIndex];
        
        //Attack button script
        const userAttack = (move) => {
            const userMove  = move.name
            const attackDamage  = 50

            this.setState({ 
                opponentCanAttack: true
            })

            let newOpponentHealthArray = opponentHealth
            newOpponentHealthArray[activeOpponentPokemonIndex] = newOpponentHealthArray[activeOpponentPokemonIndex] - attackDamage
            this.setState({
                opponentHealth: newOpponentHealthArray,
                isModalOpen: true,
                modalTitle: "User Attack",
                modalText: `You used ${userMove} and did ${attackDamage} damage`,
            })

            if (opponentHealth[activeOpponentPokemonIndex] <= 0) {
                this.setState({ 
                    activeOpponentPokemonIndex: activeOpponentPokemonIndex + 1,
                    opponentCanAttack: false
                })
                if (activeOpponentPokemonIndex >= opponentBag.length - 1) {
                    this.setState({ 
                        activeOpponentPokemonIndex: 0,
                        isModalOpen: true,
                        modalTitle: "Congrats",
                        modalText: "Your opponent has no pokemon left. You Win!",
                        isGameOver: true,
                    })
                }
            }
        }

        const opponentAttack = () => {
            const userMove  = "move.name"
            const attackDamage  = 40

            if (opponentCanAttack) {
                let newHealthArray = userHealth
                newHealthArray[activePokemonIndex] = newHealthArray[activePokemonIndex] - attackDamage
                this.setState({
                    userHealth: newHealthArray,
                    isModalOpen: true,
                    modalTitle: "Opponent Attack",
                    modalText: `You used ${userMove} and did ${attackDamage} damage`,
                    opponentCanAttack: false,
                })
                
                if (userHealth[activePokemonIndex] <= 0) {
                    console.log("CHANGE")
                    this.setState({ 
                        activePokemonIndex: activePokemonIndex + 1,
                    })
                    if (activePokemonIndex >= bag.length - 1) {
                        this.setState({ 
                            activePokemonIndex: 0,
                            isModalOpen: true,
                            modalTitle: "Sorry",
                            modalText: "You have no pokemon left. You Lose!",
                            isGameOver: true,
                        })
                    }
                }
            } else {
                this.setState({ 
                    isModalOpen: false,
                })
            }
        }

        return pokemon && opponentPokemon ? (
            <div
                style={{
                    height: "100vh",
                    backgroundImage: "url(https://www.tynker.com/projects/screenshot/57da4d8ba924051b458b4567/pokemon-battles-alpha.png)",
                    "background-position": "center",
                    "background-size": "cover",
                }}
            >
                <Container>
                    <Link to={`/pokedex`}>BACK</Link>
                    <BattleCard pokemon={opponentPokemon} currentHealth={opponentHealth[activeOpponentPokemonIndex]} totalHealth={opponentMaxHealth[activeOpponentPokemonIndex]} />
                    <BattleCard pokemon={pokemon} currentHealth={userHealth[activePokemonIndex]} totalHealth={userMaxHealth[activePokemonIndex]} attack={userAttack} reverse />
                    
                    {isModalOpen && <div
                        style={{
                            backgroundColor: "transparent",
                            height: "100vh",
                            width: "100vw",
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                    >
                        <Modal.Dialog
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                "border-radius": "10px",
                                border: "1px solid rgba(0, 0, 0, 0.3)",
                                "-webkit-box-shadow": "0 3px 7px rgba(0, 0, 0, 0.3)",
                                "-moz-box-shadow": "0 3px 7px rgba(0, 0, 0, 0.3)",
                                "box-shadow": "0 3px 7px rgba(0, 0, 0, 0.3)",
                                "-webkit-background-clip": "padding-box",
                                "-moz-background-clip": "padding-box",
                                "background-clip": "padding-box",
                            }}
                        >
                            <Modal.Body style={{display: "flex", flexDirection: "column"}}>
                                <Modal.Title style={{alignSelf: "center"}}>{modalTitle}</Modal.Title>
                                <p style={{alignSelf: "center"}}>{modalText}</p>
                                {!isGameOver ?
                                    <Button onClick={() => opponentAttack()} variant="primary">Continue</Button> 
                                    : <button type="button" className="btn btn-outline-primary"><Link to={"/pokedex"}>Continue</Link></button>
                                }
                            </Modal.Body>
                        </Modal.Dialog>
                    </div>}
                </Container>
            </div>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return { 
        pokemons: state.pokemons,
        bag: state.bag,
        opponentBag: state.opponentBag,
    };
};

export default connect(
    mapStateToProps, 
    { fetchPokemon, fetchOpponentBag }
)(Battle);
