import { useEffect, useState } from "react"
import Card from './Card.jsx'
import './Game.css';

function Game({score, setScore, setMaxScore}){
    const [poke, setPoke] = useState([]);
    const [selected, setSelected] = useState([])
    const [isLost, setIsLost] = useState(false);
    const [isWon, setIsWon] = useState(false);
    let lastScreen = "";
    const pokeNames = [
        'vaporeon',
        'jolteon',
        'flareon',
        'espeon',
        'umbreon',
        'leafeon',
        'glaceon',
        'sylveon',
        'eevee'
        ]
    //loading required pokemons
    useEffect(() => {
        pokeNames.forEach(pokeName => fetchPokemon(pokeName, setPoke))
    }, [])

    useEffect(()=>{
        if(score==9){
            setIsWon(true)
        }
    }, [score])
    function handleSelection(curSelection){
        if(selected.includes(curSelection[0])){
            setIsLost(true)
        }else{
            setSelected(prev => [...prev, curSelection[0]])
            setScore(score => score+1)

        }
        setPoke(p => [...p].sort(() => Math.random() - 0.5))
    }

    function handleRetry(){
        setScore(0)
        setIsLost(false)
        setSelected([])
    }
    function handleRestart(){
        setScore(0)
        setMaxScore(0)
        setIsWon(false)
        setSelected([])
    }
    return(
    <>
    <div className="Game">
         {poke.map(p =>{
            return <Card cardData={p} key={p} handleSelection={handleSelection}></Card>
        }
      )}
    </div>

    {isLost && <div className="last-screen lost">
        <div className="last-card">
            <div className="card-name">You Lost</div>
            <button onClick={handleRetry}>Retry?</button>
        </div>
    </div>}

    {isWon && <div className="last-screen won">
        <div className="last-card">
            <div className="card-name">You Won</div>
            <button onClick={handleRestart}>Restart?</button>
        </div>
    </div>}
    </>
    )
}
function fetchPokemon(pokeName, setPoke){
        fetch("https://pokeapi.co/api/v2/pokemon/"+pokeName)
        .then(response => response.json())
        .then(data => {
            let url = data.sprites.front_default;
            setPoke(previous => !previous.includes(pokeName+" "+url)?[...previous, pokeName+" "+url]:previous)

        })
}
export default Game