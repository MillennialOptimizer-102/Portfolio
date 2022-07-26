const TechCards = (props) => {
    return (
        <div>
            <div className="tech">
                
                <div className="titleSection">
                    <h1 className='extra-bold'>{props.company}</h1>
                    <div className="logoSection">
                    <img src = {props.logo} className='TechLogo'/>
                    
                </div>
                <div className="stuff">
                <p>{props.desc}</p>
                <ul>
                {
                        props.points.map((point) => {
                            return (
                                <li>{point}</li>
                            )
                        })
                    }
                </ul>
                </div>
                    
                </div>
            </div>
        </div>
    )
}
export default TechCards;