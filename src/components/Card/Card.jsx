import typeColors from '../../helpers/typeColors';
import './card.css';

export default function Card({ pokemon }) {
    return (
        <div className="card">
            <div className="cardImg">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="cardName">
                {pokemon.name}
            </div>
            <div className="cardType">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="cardType" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="cardInfo">
                <div className="cardData cardData--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="cardData cardData--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="cardData cardData--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}
