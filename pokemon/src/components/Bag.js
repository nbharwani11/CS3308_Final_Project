import React from 'react';

import Card from './Card'

const Bag = ({ bag, updateBag }) => {
    const renderList = () => {
        return bag ? (
            bag.map(pokemon => {
                return (
                    <Card
                        showDetails
                        isBag
                        key={pokemon.name}
                        pokemon={ pokemon }
                        bag={bag}
                        updateBag={updateBag}
                    />
                );
            })) : "LOADING..."
    }
    
    return (
        <>
            <div>BAG</div>
            <div className="row">
                {renderList()}
            </div>
        </>
    )
};

export default Bag;
