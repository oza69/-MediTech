import React, { Component } from 'react'
import "./OverView.css";
import axios from "axios";
import { withRouter } from 'react-router-dom';
export class OverView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      receiver_address: "",
      receiver_phone: "",
      receiver_name: "",
      orderID: ""
    }
  }

  componentDidMount() {
    this.setState({ orderId: this.props.location.orderId })
    this.getOrderDetails()
  }

  getOrderDetails = (orderId) => {
    let url = 'https://meditech-backend.herokuapp.com/order/' + this.props.location.orderId
    axios.get(url).then((response) => {
      if (response && response.data && response.data.status === 200) {
        let result = response.data.data
        this.setState({ receiver_address: result.receiver_address })
        this.setState({ receiver_phone: result.receiver_phone })
        this.setState({ receiver_name: result.receiver_name })
      }
    })
  }


  render() {
    return (
      <div>
        <h2 >{this.state.orderId} - Confirmed</h2>
        <div className="box">
          <p>
            <strong>Delivery Information</strong>
          </p>
          <hr />

          <div className="order_detail">
            <p>Name: {this.state.receiver_name}</p>
            <p>Address: {this.state.receiver_address}</p>
            <p>Phone: {this.state.receiver_phone}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OverView);
