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
    <footer>
        <medium>Created By <a target="_blank" href="https://www.linkedin.com/in/alefrondini/">Alessandro Frondini</a> & <a target="_blank" href="https://www.linkedin.com/in/danielcouperthwaite/">Daniel Couperthwaite</a></medium>
        <p><small><a href="https://www.flaticon.com/free-icons/cloud" title="cloud icons">Cloud icons created by Freepik - Flaticon</a></small></p>
    </footer>
    </>
  )
}

export default App;