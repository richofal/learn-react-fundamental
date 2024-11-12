import './App.css'
import Article from "./components/Article"

function App() {
  return (
    <div className="App">
      <Article name="Richo" titles={["ReactJ", "NextJS", "NodeJS"]}/>
      <br />
      <Article name="Febrian" titles={["VueJS", "NuxtJS", "Deno"]}/>
    </div>
  )
}

export default App
