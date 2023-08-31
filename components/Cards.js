"use client"

import Link from "next/link"
import "../app/characters/style.css"
export default function Cards({ card }){
    return(
        <div className="cards">
            <img className="image" src={card.image} alt={card.name} /> 
            <Link href={`/search/${card.id}`}>
                <h3 style={{ textDecoration: 'none' }}>{card.id} . {card.name}</h3> 
            </Link>
            
            <p>STATUS : {card.status}</p> 
            <p>SPECIES : {card.species}</p> 
            <button className="btn" onClick={()=>{}}>
                More
            </button>
            <br></br>
        </div>
    )
}