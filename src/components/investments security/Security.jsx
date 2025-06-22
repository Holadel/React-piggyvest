import "./Security.css"
import Padlock from "../../assets/securitylock.svg"
import { FiCornerDownRight } from "react-icons/fi";

function Security() {


  return (
    <div className="Security-container">
      <img src={Padlock} alt="" />
      <div className="Stext">
        <h4>Your security is our priority</h4>
        <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud</p>
        <h6><FiCornerDownRight/>More on our security measures</h6>
      </div>
    </div>
  )
}

export default Security
