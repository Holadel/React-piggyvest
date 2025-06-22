import Yellowf from "../../assets/sunflower.png"
import Apple from "../../assets/Apple.svg"
import Andriod from "../../assets/google.svg"
import Lady from "../../assets/lady.avif"
import Green from '../../assets/green.png'
import Sblue from '../../assets/sblue.png'
import Pink from '../../assets/pink.png'
import Purple from '../../assets/purple.png'
import Blue from '../../assets/blue.png'
import Orange from '../../assets/org.png'
import "./Hero.css"
import { TbChevronCompactRight } from "react-icons/tb";
import { LiaAngleRightSolid } from "react-icons/lia";





function Hero() {


  return (
    <div className="Hero-container">
      <div className="text">
        <button className="blue-btn"><img className="spin-image" src={Yellowf} alt="" />The 2024 PiggyVest Savings Report <span className="partialArrow"><TbChevronCompactRight/></span><span className="fullArrow"><LiaAngleRightSolid/></span></button>
        <h1>The Better Way to Save & Invest</h1>
        <p>Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with ease.</p>
       <div className="btn-cover">
         <button className="iph"><img src={Apple} alt="" />Get on Iphone</button>
        <button className="iph"><img src={Andriod} alt="" />Get on Android</button>
       </div>
        
      </div>
      <div className="Hero-img">
    <div className="main-img">
        <img src={Lady} alt="" className="Lady" />
    </div>
    <div className="card-imgs">
        <img src={Green} alt="" className="Green" />
        <img src={Sblue} alt="" className="Sblue" />
        <img src={Pink} alt="" className="Pink" />
        <img src={Purple} alt="" className="Purple" />
        <img src={Blue} alt="" className="Blue" />
        <img src={Orange} alt="" className="Orange" />
    </div>
      </div>
    </div>
  )
}

export default Hero
