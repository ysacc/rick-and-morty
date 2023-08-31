import Cards from "@/components/Cards";
import "./style.css"
async function loadCards(){
    const res= await fetch('https://rickandmortyapi.com/api/character/?page=19');
    const data = await res.json();
    // await newPromise((resolve)=>setTimeout(resolve,3000));
    return data;
}
export default async function Search(){
    const cards = await loadCards();
    // console.log(cards)
    return(
        <div className="characters">
            <h1 className="title">Characters</h1>
            <div className="card">
            {cards.results.map((card) => (
                <Cards  card={card} key={card.id}/>
            ))}
            </div>
        </div>
    )
}