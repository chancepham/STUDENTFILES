import React, { Component } from 'react'

import Login from '../../components/Login';




class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            isLoading: false,
        }
    }
    doDeleteOrder = id => {
        this.setState({ orders: this.state.orders.filter(order => order._id !== id) })
    }
    doUpdateOrder = id => {
        this.setState({ orders: this.state.orders.filter(order => order._id !== id) })
        
    }
    
    
    componentDidMount = async () => {
       
  
        
    }
    render() {
        return (
            <Login></Login>
            
                )
            }
        }
        
        export default Admin 