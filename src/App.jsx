import './App.css'
import Greetings from './componentes/Greetings'
import { Header } from './componentes/Header'

const user = window.prompt("Qual é o seu nome?") || "Visitante"

function App() {
  return (
  <> 
  <Header />
  <Greetings nome = {user} />
    
  </>
  )
}

export default App