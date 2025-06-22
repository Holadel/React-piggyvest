import "./Savings.css"
import { FiCornerDownRight } from "react-icons/fi";
import Bscreen from "../../assets/bscreen.png"
import Sbscreen   from "../../assets/sbscreen.png"
import Blscreen from "../../assets/Blscreen.avif"
import gscreen from "../../assets/gscreen.avif"
import ORscreen from "../../assets/ORscreen.png"
import Pscreen from "../../assets/pscreen.avif"


function Savings() {


  return (
    <div className="Savings-container">
     <div className="textarea">
        <h1>Many ways to build your savings</h1>
        <p>Earn 12%-22% when you save with any of these Piggyvest plans.</p>
     </div>
     <div className="cards">
        <div className="card" id="blue">
            <div className="cardtext">
            <h2>Automated Savings</h2>
            <p>Build a dedicated savings faster on your terms, automatically or manually</p>
            </div>
            <p className="drop-p"><FiCornerDownRight/>Piggyvest</p>
            <img src={Bscreen} alt="" />
        </div>
        <div className="card" id="Sblue">
            <div className="cardtext">
            <h2>Fixed Savings</h2>
            <p>Lock money away for a fixed duration without having access to it until maturity. it's like having a custom fixed deposit</p>
            <p className="drop-p"><FiCornerDownRight/>Safelock</p>
            </div>
            <img src={Sbscreen} alt="" />
        </div>
        <div className="card" id="Green">
            <div className="cardtext">
            <h2>Goal-oriented Savings</h2>
            <p>Reach all your savings goals faster. save towards multiple goals on your own or with a group</p>
            </div>
            <p className="drop-p"><FiCornerDownRight/>Target savings</p>
            <img src={gscreen} alt="" />
        </div>
        <div className="card" id="pink">
            <div className="cardtext">
            <h2>Flex Naira</h2>
            <p>Save,tranfer manage,organise,and withdraw your money at any time</p>
            </div>
            <p className="drop-p"><FiCornerDownRight/>Flex Naira</p>
            <img src={Pscreen} alt="" />
        </div>
        <div className="card" id="Black">
            <div className="cardtext">
            <h2>Flex Dollar</h2>
            <p>Save and grow your money in forein currencies such as Dollars</p>
            </div>
            <p className="drop-p"><FiCornerDownRight/>Flex Dollar</p>
            <img src={Blscreen} alt="" />
        </div>
        <div className="card" id="Orange">
            <div className="cardtext">
            <h2>HouseMoney</h2>
            <p>Plan for your rent and household expenses</p>
            </div>
            <p className="drop-p"><FiCornerDownRight/>House Money</p>
            <img src={ORscreen} alt="" />
        </div>
     </div>
    </div>
  )
}

export default Savings