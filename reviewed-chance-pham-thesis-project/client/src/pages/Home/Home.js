import React, { Component } from 'react'
import HomeCar from '../../components/HomeCar'
import RowHomeHalf1 from '../../components/RowHomeHalf1'
import RowHomeHalf2 from '../../components/RowHomeHalf2';
import DeliverSquare from '../../components/DeliverSquare';
import PeopleServed from '../../components/PeopleServed';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            rating: '',
            time: '',
        }
    }
    
    
    render() {
        return (
            <div>
            <HomeCar></HomeCar>
            <div className="row no-gutters p-0">
            <RowHomeHalf1></RowHomeHalf1>
            <RowHomeHalf2></RowHomeHalf2>
            </div>
            <div className="row text-center text-uppercase p-4 bg-black threeFix fixRow">
            <PeopleServed></PeopleServed>
            <DeliverSquare></DeliverSquare>
            <div className="col-lg-3 col-sm-6 p-6  ">
            <div className="brd-around brd-gray-dark-v2 p-6">
            <Link to="/order">
            <i className="fa fa-cutlery text-white text-xxx-large p-4   iconCircleSimp"></i>
            <div className="text-white text-xx-large  p-4">10+</div>
            <h4 className=" text-white  mb-2">Menu Items</h4>
            </Link>
            </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-6  ">
            <div className="brd-around brd-gray-dark-v2 p-6"><i
            className="fa fa-gavel text-white text-xxx-large p-4   iconCircleSimp"></i>
            <div className="text-white text-xx-large  p-4">1000+</div>
            <h4 className=" text-white  mb-2">4+ Star Reviews</h4>
            </div>
            </div>
            </div>
            
            </div>
            
            )
            
        }
        
    }
    
    export default Home