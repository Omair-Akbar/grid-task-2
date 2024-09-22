import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <div className="left-main">
        <div className="top-section">
          <div className="top-left">
            <div className="orange-box left-tall-box"><img src='14.jpg'></img></div>
            <div className="orange-box left-short-box"><img src="12.jpg" alt="" /></div>
          </div>
          <div className="top-right">
            <div className="top-center">
              <div className="orange-box"><img src='13.jpg'></img></div>
              <div className="orange-box"><img src='15.jpg'></img></div>
            </div>
            <div className="orange-box center-main"><video src='video.mp4' loop autoPlay muted></video></div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="orange-box bottom-left quotes"><p>"The only way to learn a new programming language is by writing programs in it." – Dennis Ritchie</p></div>
          <div className="orange-box bottom-right"><img src='16.jpg'></img></div>
        </div>
      </div>
      <div className="right-main">
        {/* QOUTES */}
        <div class="orange-box tall-box ">In today's fast-paced tech world, staying ahead requires continuous learning and adaptation. Whether you're diving into new programming languages, exploring cutting-edge frameworks, or refining your problem-solving skills, the journey of a developer is one of constant growth. The ability to learn, unlearn <br/> <br/> relearn is what sets great developers apart. Embrace challenges, push boundaries, and never stop coding – because the world of technology waits for no one.</div>
        <div className="orange-box short-box"><img src='12.jpg'></img></div>
      </div>
    </div>
  )
}