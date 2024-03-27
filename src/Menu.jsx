function Menu({setPageIndex}){
    return(
    <div className="menu">
        <button onClick={function(){setPageIndex(1)}}>Play</button>
    </div>
    )
}
export default Menu