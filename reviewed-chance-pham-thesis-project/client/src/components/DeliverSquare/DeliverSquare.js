import React, { Component } from 'react';


class DeliverSquare extends Component {


    render() {
        return (
            <div className="col-lg-3 col-sm-6 p-6  ">
                <div className="brd-around brd-gray-dark-v2 p-6"><i
                    className="fa fa-truck text-white text-xxx-large p-4 iconCircleSimp"></i>
                    <div className="text-white text-xx-large  p-4">500+</div>
                    <h4 className=" text-white  mb-2">Deliveries</h4>
                </div>
            </div>
        )
    }
}

export default DeliverSquare;