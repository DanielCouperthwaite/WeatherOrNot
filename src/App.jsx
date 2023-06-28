import './App.css'
import Header from './Header'
import WeatherContent from './WeatherContent'
import Background from './Background'

function App() {

  return (
    <>
    <main className="whole" alt="rolling clowds on a light blue sky">
        <Background />
      <section className = "content-box">
        <Header />
        <WeatherContent />
      </section>
    </main>
    </>
  )
}

export default App;