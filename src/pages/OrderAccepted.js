import React, { Component } from 'react';
import DasherHeader from "../Component/DasherHeader";
import "./DasherOrder.css"

class OrderAccepted extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="dasher-page">
                <DasherHeader />
                <div className="dasher-page-container">
                    <div className="dasher-page-content">
                        {/* {this.props.location.state} */}
                        {/* Add your content here */}
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderAccepted;