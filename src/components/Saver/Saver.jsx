import "./Saver.css"
// import Apple from "../../assets/Apple2.svg"
import Andriod from "../../assets/google.svg"
import Testimonial from "../../assets/Olabisi.png"

function Saver() {


  return (
    <div className="Saver-container">
     
      <div className="Saver-text">
        <h2>Meet Our Saver of the Month</h2>
        <p>Every month, we shine a spotlight on one saver, asking them about their savings culture and how Piggyvest has helped them.</p>
      </div>

      <video muted src="www.youtube.com/embed/2EnGMGxKuII?autoplay=1&mute=1"></video>

      <div className="Test-sec">
    <img className="test" src={Testimonial} alt="" />
    <div className="testi-text">
        <h3>Join 5+ million people who save and invest with us</h3>
        <div className="btn-cover">
        {/* <button className="dwl"><img src={Apple} alt="" />Get on Iphone</button> */}
        <button className="dwl"><img src={Andriod} alt="" />Get on Android</button>
        <div/>
    </div>
</div>
    </div>

</div>

  )
}

export default Saver






