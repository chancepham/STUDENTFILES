import React, { Component } from 'react';
import api from '../../api'

class AdminOrderCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemArr: '',
            booleanFix: 'Not In Progress'
        }
    }
    doDeleteOrder = id => {
        this.setState({ orders: this.state.orders.filter(order => order._id !== id) })
    }
    doUpdateOrder = id => {
        this.setState({ orders: this.state.orders.filter(order => order._id !== id) })

    }
    deleteOrder = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Do you want to delete the order ${this.props.name} permanently?`,
                )
                ) {
                    api.deleteOrderById(this.props.id)
                    this.state.doDeleteOrder(this.props.id)
                }
            }
            updateOrder = event => {
                event.preventDefault()
                if (
                    window.confirm(
                        `Do you want to start ${this.props.name}'s order ?`,
                        )
                        ) {
                            api.updateOrderById(this.props.id).then(res => {
                                
                                window.alert(res.data.message)
                                window.location.reload()
                                
                            })
                    this.state.doDeleteOrder(this.props.id)
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
                        
                        
                    }
                    
                    render() {
                        return (
                            <div className="container p-5">
                            <div className="p-5 border ">
                            <div className="row py-2 align-content-center justify-content-center">
                            
                            <button className="btn btn-large bg-primary text-white p-3" id="deleteOrder" onClick={this.deleteOrder}>Delete</button>
                            <button className="btn btn-large bg-success text-white p-3 ml-3" id="progressOrder" onClick={this.updateOrder}>Start Order</button>
                            </div>
                            
                            
                            <div>
                            <h1 id="entireOrder" className="text-xx-large py-2">ID: {this.props.id}</h1>
                            <h1 id="entireEmail" className="text-xx-large py-2">Email: {this.props.email}</h1>
                            <h1 id="entireName" className="text-xx-large py-2">Name: {this.props.name}</h1>
                            <h1 id="entireItems" className="text-xx-large py-3">Items: {this.state.itemArr}</h1>
                            <h1 id="entirePrice" className="text-xx-large py-3">Price: ${this.props.price}</h1>
                            <h1 id="entireAddress" className="text-xx-large py-3">Address: {this.props.address}</h1>
                            <h1 id="entirePhone" className="text-xx-large py-3">Phone: {this.props.phone}</h1>
                            <h1 id="entireComment" className="text-xx-large py-3">Comment: {this.props.comment}</h1>
                            <h1 id="entireCardCompany" className="text-xx-large py-3">Card Company: {this.props.cardCompany}</h1>
                            <h1 id="entireCardNumber" className="text-xx-large py-3">Card Number: {this.props.cardNumber}</h1>
                            <h1 id="entireProgress" className="booleanFix text-xx-large py-3">Progress: {this.state.booleanFix}</h1>
                            </div>
                            
                            
                            
                            </div>
                            </div>
                            )
                        }
                    }
                    
                    export default AdminOrderCard;