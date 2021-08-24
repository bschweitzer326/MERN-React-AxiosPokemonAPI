import react, {useState} from 'react';
import axios from 'axios'

const Pokemon = (props) => {

    const [poke, setPoke] = useState({});

    const buttonClick = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then(response => setPoke(response.data.results))
    }

    return (
        <div className="container">
            <button onClick={buttonClick} className="btn btn-secondary mt-5">Fetch Pokemon</button>
            <p>
                {poke.length > 0 && poke.map((item, index)=>{
                return (<li key={index}>{item.name}</li>)
            })}
            </p>
        </div>
    )
}

export default Pokemon;