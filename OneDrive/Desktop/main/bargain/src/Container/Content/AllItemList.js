import React from "react"
import { Button } from "react-bootstrap"
import pic from '../images/th.webp'
import pic1 from "../images/pic1.webp"
import pic2 from "../images/pic2.webp"
import pic3 from "../images/pic3.webp"
import pic4 from "../images/pic4.webp"
import pic5 from "../images/pic5.webp"


const AllItermList = () =>{
    return (
        <table className="table">
        <thead >
          <tr className="ItermTable">
            <th scope="col">Item ID</th>
            <th scope="col">Iterm name</th>
            <th scope="col">Category</th>
            <th scope="col">Update date</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col"> Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">000001</td>
            <td> <img src={pic} alt="" className="TableImage" />TCL Television</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <img src={pic3} alt="" className="TableImage" />SSD disk</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-warning TableButtonAll">pending</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <img src={pic1} alt="" className="TableImage" />HP desktop</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <img src={pic} alt="" className="TableImage" />TCL Television</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <img src={pic2} alt="" className="TableImage" />MacBook Revamp</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
            <td> <button type="button" className="btn btn-secondary TableButtonAll">failed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <img src={pic4} alt="" className="TableImage" />Iphone</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
              
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
          <tr>
            <td scope="row">000001</td>
            <td> <img src={pic5} alt="" className="TableImage" />Ipad</td>
            <td>Electronics</td>
            <td>20/7/2022 12:00PM</td>
            <td>$20.000</td>
            <td scope="row">Description</td>
            
              
            <td> <button type="button" className="btn btn-success TableButtonAll">completed</button></td>
            <td><i className="bi bi-three-dots-vertical"></i></td>
          </tr>
         
          
        </tbody>
      </table>
    )
}

export default AllItermList