import './ScoreBoard.css';
function ScoreBoard({score, maxScore}){

    return (
        <div className='score-board'>
            <div className='score'>Score:{score}</div>
            <div className='score'>Max-Score: {maxScore}</div>
            
        </div>
    )
}
export default ScoreBoard;