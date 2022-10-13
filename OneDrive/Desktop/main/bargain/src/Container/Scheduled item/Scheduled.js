import React from "react"
import './Scheduled.css'
import { Button } from "react-bootstrap"
import pic from '../images/pic.webp'
import pic1 from '../images/pic1.webp'
import pic2 from '../images/pic2.webp'
import pic3 from '../images/pic3.webp'
import pic4 from '../images/pic4.webp'
import pic5 from "../images/th.webp"

const Scheduled = () => {
    return(
        <>
        <div className="Scheduled">
          <div className="ScheduledHeader">
            <h4> Item Managemen </h4>
            <p>Scheduled Item</p>
          </div>
          <div className="ScheduledBody">
              <div className="ScheduledName">
                TCL Television 44 inches
                <button type="button" className="btn btn-warning TableButtonScheduled">pending</button>
              </div>
              <div className="ScheduledButton">
              <button type="button" className="btn btn-success TableButtonScheduled1">completed</button>
              <Button className="TableButtonScheduled1" variant="outline-danger">Reject <i className="bi bi-chevron-down"></i></Button>
              </div>
             </div>
             <div className="ScheduledMainBody">
              <ul>
                <li>General information</li>
                <li>Iterm Category</li>
                <li>Iterm Category</li>
              </ul>
             </div>
             <div className="ScheduledForm">
             <form>
                <h5 className="ScheduledInputsTittle">General information</h5>
               <div className="ScheduledInputs" >
                <label>Seller name <br/> <span><input type="text" placeholder="" className="input" /> <br /></span> </label>
                <label>Type of Business <br /> <span> <input type="text" placeholder=""  className="input"/> <br /></span> </label><br/>
               </div>
               <div className="ScheduledInputs" >
                <label>Email <br/> <span><input type="text" placeholder="" className="input" /> <br /></span> </label>
                <label>Mobile number <br /> <span> <input type="text" placeholder="" className="input" /> <br /></span> </label><br/>
               </div>
               <h5 className="ScheduledInputsTittle">Item Category</h5>
               <div className="ScheduledInput" >
                <label>item name<br/> <span><input type="text" placeholder="" className="input1" /> <br /></span> </label>
                 <label> Category<br/><input type="text" placeholder=""  className="input2"/> <br /></label> 
               </div>
               <div className="ScheduledInputsDescription"  >
               <label>Description <br/> <span>   <textarea type="text"  className="textarea"/></span></label>
               </div>
               <div className="ScheduledInputs" >
                <label>Market Value <br/> <span><input type="text" placeholder="" className="inputs" /> <br /></span> </label>
                <label>Starting price <br /> <span> <input type="text" placeholder="" className="inputs" /> <br /></span> </label><br/>
               </div>
               <div className="ScheduledInputs" >
                <label>Bid increment <br/> <span><input type="text" placeholder="" className="inputs" /> <br /></span> </label>
                <label>Reserved price <br /> <span> <input type="text" placeholder="" className="inputs" /> <br /></span> </label><br/>
               </div>
               <div className="ScheduledInputsDescription"  >
               <label>Scheduled Date/Time <br/> <span>   <textarea type="text"  className="textarea1"/></span></label>
               </div>
               <h5 className="ScheduledInputsTittle">Item Gallery</h5>
                <div className="ScheduledInputs">
                  <img src={pic} alt="" className="ScheduledPic" />
                  <img src={pic1} alt="" className="ScheduledPic" />
                  <img src={pic2} alt="" className="ScheduledPic" />
                  <img src={pic3} alt="" className="ScheduledPic" />
                </div>
                <div className="ScheduledInputsDescription"  >
               <label>Iterm retrieval <br/> <span>   <textarea type="text" placeholder=" iterm will be delivered" className="textarea1"/></span></label>
               </div>
             </form>
             </div>
             <div className="ScheduledIterm">
              <div className="Iterm">
              <img src={pic4} alt="" className="ItermPic" />
             <button type="button" className="btn  ItermButton">completed</button>
              </div>

             </div>
          </div>

        </>
    )

}

export default Scheduled