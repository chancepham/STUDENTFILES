import React, { Component } from 'react';
import api from '../../api'

class OrderCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemArr: '',
            booleanFix: 'Not In Progress'
        }
    }
    deleteOrder = event => {
        event.preventDefault()
        let userPrompt = prompt('Verify The Phone Number of This Order')
        if (userPrompt === this.props.phone) {
            api.deleteOrderById(this.props.id)
            this.props.doDeleteOrder(this.props.id)
        }
        else {
            ReactDOM.render(<Alert echo='Invalid Phone Number' />, document.querySelector('#root'))
        }
    }
    componentDidMount() {
        if (this.props.inProgress === true) {
            this.setState({ booleanFix: 'In Progress' })


        }
        else {
            this.setState({ booleanFix: 'Not In Progress' })


        }
        if (this.props.items.length > 1) {
            let holdFix = this.props.items;
            holdFix = holdFix.join(", ");
            this.setState({ itemArr: holdFix })

        }
        else {
            let holdFix = this.props.items;
            this.setState({ itemArr: holdFix })
        }

        if (this.props.items.length > 1) {
            let holdFix = this.props.items;
            holdFix = holdFix.join(", ");
        this.setState({itemArr: holdFix})
            console.log(holdFix)
        }
        else {
            let holdFix = this.props.items;
            this.setState({ itemArr: holdFix })
        }
     
    }
    render() {
        return (
            <div className="container p-5 bg-white">
            <div className="p-5 border ">
            <div className="float-end py-2 align-content-center">
            
            <button className="btn btn-large bg-primary text-white p-3" id="deleteOrder" onClick={this.deleteOrder}>Delete</button>
            
            </div>
            
            
            <div>
            <h1 id="entireOrder" className="text-xx-large py-2">ID: {this.props.id}</h1>
            <h1 id="entireName" className="text-xx-large py-2">Name: {this.props.name}</h1>
            <h1 id="entireItems" className="text-xx-large py-3">Items: {this.state.itemArr}</h1>
            <h1 id="entirePrice" className="text-xx-large py-3">Price: ${this.props.price}</h1>
            <h1 id="entireProgress" className="text-xx-large py-3">Progress: {this.state.booleanFix}</h1>
            </div>
            
            
            
            </div>
            </div>
            )
        }
    }
    
    export default OrderCard;