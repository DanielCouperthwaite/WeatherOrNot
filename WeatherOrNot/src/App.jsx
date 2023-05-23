
import './App.css'
import Header from './Header'
import WeatherContent from './WeatherContent'
import video from './assets/background.mp4'
// import video1 from './assets/04.mov'

function App() {

  return (
    <section className="whole">
    <div className="background">
      <video id="myVideo" autoPlay={"autoplay"} muted preLoad="auto" loop ><source src={video} type="video/mp4"/></video>
      {/* <video id="myVideo" autoPlay={"autoplay"} muted preLoad="auto" loop ><source src={video1} type="video/mov"/></video> */}
      </div>
      <div className = "whole">
        <Header />
        <WeatherContent />
      </div>
    </section>
  )
}

export default App


// function App() {

//   return (
//     <section className="whole">
//     <div className="background">
//       <video id="myVideo" autoPlay loop><source src={video} type="video/mp4"/></video></div>
//       <div className = "whole">
//         <Header />
//         <WeatherContent />
//       </div>
//     </section>
//   )
// }

// export default App