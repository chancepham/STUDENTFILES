import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api'
import AdminOrderCard from '../../components/AdminOrderCard'
import Alert from '../Alert';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            isLoading: false,
        }
    }
    checkPassFunct = id => {
        let inputted = document.getElementById('adminPassword').value;


        if (inputted.length > 0) {
            let tempObj = {
                Password: inputted
            }
            api.checkPass(tempObj).then(res => {
                if (res.data.result === true) {
                    window.alert('You are logged in')
                    this.setState({ isLoading: true })
                    api.getAllOrders().then(orders => {
                        console.log('here are my orders: ', orders)
                        this.setState({
                            orders: orders.data.data,
                            isLoading: false
                        })
                        ReactDOM.render(<div className="custBack1 py-5 text-center">
                      
                            <div className="container p-4">
                                <div className="text-center py-3 justify-content-center">
                                    <a href="/pending">
                                        <button className="bg-primary text-white p-3">Back To Client-Side Orders</button>
                                    </a>
                                </div>
                            


                                <h1 className="text-center text-xxx-large p-2">All Orders(admin)</h1>

                            </div>
                            {this.state.isLoading ?
                                <div>Please wait</div>
                                :
                          
                                this.state.orders.map((order, idx) => (
                                    <AdminOrderCard
                                        key={order._id}
                                        id={order._id}
                                        name={order.name}
                                        items={order.items}
                                        price={order.total}
                                        phone={order.phone}
                                        email={order.email}
                                        inProgress={order.inProgress}
                                        address={order.address}
                                        cardCompany={order.cardCompany}
                                        cardNumber={order.cardNumber}
                                        comment={order.comment}
                                        doDeleteOrder={this.doDeleteOrder}
                                        doUpdateOrder={this.doUpdateOrder}
                                    />

                                ))
                            }


                        </div>, document.querySelector('#root'))
                    }).catch(err => {
                        ReactDOM.render(<Alert echo={err.message} />, document.querySelector('#root'))
                
                    });
                }


            })
        }
        else {

            ReactDOM.render(<Alert echo="Invalid Password" />, document.querySelector('#root'))
        
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container p-5 bg-white text-center" id="loginBox">
                <img height="200px" src="./assets/images/burgerwiz.png" alt="wizard"></img>
                <h1 className="py-4 text-dark text-xx-large">Admin Password</h1>
                <input type="email" className="form-control rounded-0 form-control-md" id="adminPassword"
                    aria-describedby="emailHelp" placeholder="Enter Password" maxLength="25"></input>
                <button className="bg-primary text-white p-4 mt-4" onClick={this.checkPassFunct}>Submit</button>
            </div>
        )
    }
}

export default Login;