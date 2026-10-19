import Greetings from "../componentes/Greetings";

const user = window.prompt("Qual é o seu nome?") || "Visitante"

function Home() {
    return (
        <>
            <Greetings nome={user} />
        </>
    )
}
export default Home;