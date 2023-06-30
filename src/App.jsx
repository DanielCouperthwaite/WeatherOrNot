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
        <small>Created By <a target="_blank" href="https://www.linkedin.com/in/alefrondini/">Alessandro Frondini</a> & <a target="_blank" href="https://www.linkedin.com/in/danielcouperthwaite/">Daniel Couperthwaite</a></small>
    </footer>
    </>
  )
}

export default App;