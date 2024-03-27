function Card({cardData="", handleSelection}){
    cardData = cardData.split(" ");
    function handleClick(){
        handleSelection(cardData)
    }
    return <div className = "Card" onClick={handleClick}>
        <div className="img-holder">
            <img src={cardData[1]} alt="" />
        </div>
        <div className="name-holder">
            <p>{cardData[0]}</p>
        </div>
    </div>
}
export default Card;