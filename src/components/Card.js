import { useState } from "react";
import Button from '@mui/material/Button';

function Card({id, name, info, image, price, removeTour}){
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,190)}....`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} alt={name} className="image"></img>
            <div className="tour-info">
                <div className="tours-details">
                    <h4 className="price">₹ {price}</h4>
                    <h4 className="name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="readmore" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>
            <Button className="btn" variant="outlined" onClick={() => removeTour(id)}>Not Intrested</Button>
        </div>
    );
}

export default Card;