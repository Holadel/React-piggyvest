import "./Investment.css"
import { FiCornerDownRight } from "react-icons/fi";
import Phone from "../../assets/iphone.avif"


function Investment() {


  return (
    <div className="Investment">
    <div className="Investment-container">
     <div className="inv-text">
        <h2>Diverse ways to Invest</h2>
        <p>Grow your money and invest for your future confidently</p>
      </div>
      <div className="inv-img">
        <div className="purple">
          <h1>Earn up to 35% returns</h1>
        <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunity</p>
        </div>
        
        <p className="drop"><FiCornerDownRight/>Learn about investments</p>
        <img src={Phone} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Investment