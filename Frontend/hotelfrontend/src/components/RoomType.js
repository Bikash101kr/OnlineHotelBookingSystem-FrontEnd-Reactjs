import React, { Component } from "react";
import "../css/main.css";
import { Link } from "react-router-dom";
import Roomtypeform from "./Roomtypeform";
<<<<<<< HEAD
import $ from "jquery";
import singlebed from "../image/singlebed.jpeg"
class RoomType extends Component {
  componentDidMount(){
    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      });
        }
         render() {return(
        <div className="roomtype">
          <div className="container-fluid">
                <h2 className="ml-4 font-weight-bold">Room Type</h2>               
                {/* <Link to="Roomtypeform"><button type="button" id="add" className="btn font-weight-bold btn-primary ml-4"> ADD</button></Link> */}
                <div className="roomtypeform container-fluid">
                 <form >
                <div className="form-group">
                  <label for="roomtype">Room Type:</label>
                  <input type="text" className="form-control" placeholder="Room Type" id="roomtype"/>
                </div>
                <label>Room Type Photo</label>
                <div className="custom-file">
                  
                  <input type="file" className="custom-file-input" id="customFile"/>
                  <label className="custom-file-label" for="customFile">Room Type Photo </label>
                </div>
                <div className="form-group">
                  <label for="roomtype">Room Number:</label>
                  <input type="text" className="form-control" placeholder="Room Number" id="roomnumber"/>
                </div>
                <div className="form-group">
                  <label for="roomtype">Price:</label>
                  <input type="text" className="form-control" placeholder="Price" id="price"/>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Upload</button>
               {/* <Link to="HotelDashboard"> <button type="submit" className="btn btn-primary mt-4 ml-3" >Exit</button></Link> */}
                </form>
             </div>
                <table className="table table-striped mt-5">
                  <thead>
                    <tr>
                      
                      <th>Upload Photo</th>
                      <th>Room Type</th>
                      <th>Room Number</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                   <tbody>
                   <tr className="table-info col-mb-7">
                    
                     <td><img src={singlebed} style={{width:"39%"}}/></td>
                     <td className="font-weight-bold">Single Bed</td>
                     <td className="font-weight-bold">2</td>
                     <td className="font-weight-bold">2500</td>
                     <td><button type="button" className="btn btn-danger mt-3"><i className="fa fa-trash-o"/></button></td>         
                   </tr>    
                  </tbody>
                  </table>
            </div>    
=======
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class RoomType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      },
      room_no: "",
      roomType: "",
      price: ""
    }
  }
  render() {
    return (
      <div className="roomtype">
        <div className="container-fluid">
          <h2 className="ml-4 font-weight-bold">Room Type</h2>
          <Form>
            <FormGroup>
              <Label>Room Number</Label>
              <Input type="text"></Input>
            </FormGroup>
            <FormGroup>
              <Label>Room Type</Label>
              <Input type="text"></Input>
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input type="text"></Input>
            </FormGroup>
          </Form>
          <Button>Save Room</Button>
          {/* <Link to="Roomtypeform"><button type="button" id="add" className="btn font-weight-bold btn-primary ml-4"> ADD</button></Link> */}
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Upload Photo</th>
                <th>Room Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="table-info col-mb-7">
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
>>>>>>> 6b16dc1baa7d4f1fa5c6f6fc9cb2d90bf7532504
        </div>
      </div>
    );
  }
}
export default RoomType;
