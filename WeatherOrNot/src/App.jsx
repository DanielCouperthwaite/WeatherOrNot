import './App.css'
import Header from './Header'
import WeatherContent from './WeatherContent'
import video from './assets/background.mp4'

function App() {

  return (
    <main className="whole" alt="rolling clowds on a light blue sky">
      <section className="background">
        <video id="myVideo" autoPlay={"autoplay"} muted preLoad="auto" loop ><source src={video} type="video/mp4" alt="moving blue particles swirling on a light blue background"/></video>
      </section>
      <section className = "content-box">
        <Header />
        <WeatherContent />
      </section>
    </main>
  )
}

export default App;