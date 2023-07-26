import viteLogo from '/vite.svg'
import davidleal from './assets/david-leal.jpeg'
import './App.css'
import Card from './components/Card'

function App() {
  const projects = ["Proyecto 1", "Proyecto 2", "Proyecto 3"]

  return (
    <>
      <div>
        <a href="https://davidleal.cl" target="_blank">
          <img src={viteLogo} className="logo" alt="Logo David Leal" />
        </a>
      </div>
      <div className="App">
      <Card
        profileImage={davidleal}
        name="David Leal Olivares"
        projects={projects}
      />
    </div>
    </>
  )
}

export default App
