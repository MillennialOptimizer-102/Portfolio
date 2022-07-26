const Cards = (props) => {
    return (
        <div>
            <div className="card">
                
                <div className="titleSection">
                    <h1 className='extra-bold'>{props.company}</h1>
                    <div className="logoSection">
                    <img src = {props.logo} className='logo'/>
                </div>
                    <p>{props.position}</p>
                    <p>{props.dates}</p>
                </div>
            </div>
        </div>
    )
}
export default Cards;