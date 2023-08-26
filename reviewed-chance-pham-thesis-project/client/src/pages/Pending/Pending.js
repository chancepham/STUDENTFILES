import React, { Component } from 'react'
import api from '../../api'
import OrderCard from '../../components/OrderCard'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';




class Pending extends Component {
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

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getAllOrders().then(orders => {
            console.log('here are my orders: ', orders)
            this.setState({
                orders: orders.data.data,
                isLoading: false
            })
        }).catch(err => {
            window.alert(err.message)
        });
    }
    render() {
        return (
            <div className="custBack1 py-5">
                <div className="float-end mr-5 p-5  ">
                    <Link to="/admin">
                        <button className="px-5 py-3 btn btn-large bg-primary text-white text-center">ADMIN</button>
                    </Link>
                </div>
                <div className="container p-4">
            
             
                <h1 className="text-center text-xxx-large p-2">All Orders</h1>
                    <p className="text-center p-3">You will have to verify details to change or cancel orders</p>
                </div>
                {this.state.isLoading ?
                    <div>Please wait</div>
                    :
                    this.state.orders.map((order, idx) => (
          
                        <OrderCard
                            key={order._id}
                            id={order._id}
                            name={order.name}
                            items={order.items}
                            price={order.total}
                            phone={order.phone}
                            inProgress={order.inProgress}
                            doDeleteOrder={this.doDeleteOrder}
                        />
              
                    ))
                }

            
            </div>
        )
    }
}

export default Pending 