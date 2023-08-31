import Link from "next/link";
import "./globals.css"

export default function NotFound(){
    return (
        <section className="notfound">
            <h1>404</h1>
            <p>Pagina no encontrada</p>
            <Link href="/about"> Volver</Link>
        </section>
            
        
    )
}