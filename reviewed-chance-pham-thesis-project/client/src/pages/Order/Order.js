import React, { Component } from 'react'
import api from '../../api'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartCount: 0,
            isLoading: false,
            payloadReact: {
                name: '',
                email: '',
                phone: '',
                address: '',
                cardCompany: '',
                cardNumber: '',
                comment: '',
                items: [],
            }
        }
    }
    addToCart = (event) => {
        
        let cartCountHold = this.state.cartCount;
        console.log(cartCountHold)
        this.setState({ cartCount: cartCountHold + 1 })
        let shakeThis = document.getElementById('cartIcon')
        console.log(shakeThis)
        
        shakeThis.classList.add('shake')
        setTimeout(function () {
            console.log('removce')
            shakeThis.classList.remove('shake')
        }, 1000);
        
    }
    submitOrder = (event) => {
        let arrayOfOrdered = []
        let goOrNo = true;
        for (let i = 0; i < document.querySelectorAll('.eachNameOrdered').length; i++){
            let eachItemName = document.querySelectorAll('.eachNameOrdered');
            console.log(eachItemName[i].innerText)
            console.log('herer')
            arrayOfOrdered.push(eachItemName[i].innerText)
            console.log(arrayOfOrdered)
        }
        
        let name = document.getElementById('userName').value;
        console.log(name.length + 'length')
        if (name.length > 0) {
            console.log(name)
        }
        else {
            alert('Invalid Name, Insert a Name')
            goOrNo = false;
        }
        
        let phoneText = document.getElementById('userPhoneNumber').value;
        console.log(phoneText.length + 'length')
        if (phoneText[3] === '-') {
            phoneText.replace('-', '')
            console.log('removing dashes')
        }
        if (phoneText[3] === ' ') {
            phoneText.replace(' ', '')
            console.log('removing spaces')
        }
        if (phoneText.length >= 10) {
            console.log(phoneText)
        }
        else {
            alert('Invalid phone length')
            goOrNo = false;
        }
        const emailReg = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        console.log('reg ex test' + emailReg.test())
        let userEmail = document.getElementById('userEmail').value;
        if (userEmail !== '' && emailReg.test(userEmail)) {
            console.log(userEmail)
        }
        else {
            alert('Invalid! Email')
            goOrNo = false;
        }
        let address = document.getElementById('userAddress').value;
        console.log(address)

        if (address !== '') {
            console.log(address)
        }
        else {
            alert('Invalid! Address')
            goOrNo = false;
        }
        let creditCompany = document.getElementById('userCreditCompany').value;
        console.log(creditCompany)
        let creditCard = document.getElementById('userCreditCard').value;
        if (creditCard.length === 25) {
            console.log(creditCard)
        }
        else {
            alert('Invalid! Credit Card is empty')
            goOrNo = false;
        }
        
        let comment = document.getElementById('userComment').value
        if (comment.length !== 0 || comment === '') {
            console.log(comment)
        }
        const payload = {
            name: name,
            email: userEmail,
            phone: phoneText,
            address: address,
            cardCompany: creditCompany,
            cardNumber: creditCard,
            comment: comment,
            items: arrayOfOrdered,
        }
        this.setState({payloadReact: payload})
        if (goOrNo === true) {
            
            console.log(payload)
            api.insertOrder(payload).then(res => {
                console.log(res)
                window.alert(`order inserted successfully`)
                
            }).catch(err => {
                console.log(err)
                window.alert('Order With Address exist already')
            });
            
        }
        
        
        
    }
    componentDidMount() {
        let shakeThis = document.getElementById('cartIcon')
        shakeThis.classList.add('shake')
        setTimeout(function () {
            console.log('removce')
            shakeThis.classList.remove('shake')
        }, 1000);
        
    }
    
    render() {
        return (
            <div>
            
            <div className="p-5 bg-black text-white">
            <div className="text-center bg-muted p-5">
            <h1 className="text-xxx-large p-5">MENU</h1>
            <h1>Combos Come With A Side Of Fries</h1>
            
            </div>
            </div>
            <div className="entireMenu p-5 text-center justify-content-center align-items-center custBack1">
            <div className="row text-center justify-content-center align-items-center">
            <div className="eachItemBox ">
            <img src="./assets/images/burgerandfries.png" className="eachMenuItem"></img>
            <p className="eachName p-3">Burger And Fries Combo</p>
            <p className="eachPrice p-3">$4.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox ">
            <img src="./assets/images/burgerhalf.png" className="eachMenuItem"></img>
            <p className="eachName p-3">Burger And A Half Combo</p>
            <p className="eachPrice p-3">$4.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox ">
            <img src="./assets/images/justburger.png" className="eachMenuItem"></img>
            <p className="eachName p-3">Burger And Slider Combo</p>
            <p className="eachPrice p-3">$4.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox ">
            <img src="./assets/images/fries.jpeg" className="eachMenuItem"></img>
            <p className="eachName p-3">Fries</p>
            <p className="eachPrice p-3">$0.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox ">
            <img src="./assets/images/salad.jpeg" className="eachMenuItem"></img>
            <p className="eachName p-3">Salad</p>
            <p className="eachPrice p-3">$2.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox py-3">
            <img src="./assets/images/shake.jpeg" className="eachMenuItem"></img>
            <p className="eachName p-3">Shake</p>
            <div className="form-group">
            <label htmlFor="exampleSelect1">Flavor</label>
            <select className="form-control rounded-0" id="shakeFlavor">
            <option>Strawberry</option>
            <option>Chocolate</option>
            <option>Vanilla</option>
            
            </select>
            </div>
            <div className="form-group g-mb-25">
            <label htmlFor="exampleSelect1">Size</label>
            <select className="form-control rounded-0" id="shakeSize">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            
            </select>
            </div>
            <p className="eachPrice p-3" id="shakePrice">$1.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox py-3">
            <img src="./assets/images/soda.jpeg" className="eachMenuItem"></img>
            <p className="eachName p-3">Soft Drink</p>
            <div className="form-group">
            <label htmlFor="exampleSelect1">Soda</label>
            <select className="form-control rounded-0" id="drinkFlavor">
            <option>Coke</option>
            <option>Sprite</option>
            <option>Tea</option>
            
            </select>
            </div>
            <div className="form-group g-mb-25">
            <label htmlFor="exampleSelect1">Size</label>
            <select className="form-control rounded-0" id="drinkSize">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            
            </select>
            </div>
            <p className="eachPrice p-3" id="drinkPrice">$0.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox ">
            <img src="./assets/images/swineburger.jpeg" className="eachMenuItem"></img>
            <p className="eachName p-3">Swine And Beef Burger Combo</p>
            <p className="eachPrice p-3">$6.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox ">
            <img src="./assets/images/baconeggburger.jpeg" className="eachMenuItem"></img>
            <p className="eachName p-3">Egg and Pulled Pork Burger Combo</p>
            <p className="eachPrice p-3">$6.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            <div className="eachItemBox ">
            <img src="./assets/images/doublestack.jpeg" className="eachMenuItem"></img>
            <p className="eachName p-3">Double Stack Combo</p>
            <p className="eachPrice p-3">$6.99</p>
            <button className="orderThis p-3" onClick={this.addToCart}>Add To Cart</button>
            </div>
            </div>
            
            </div>
            
            <div className="position-fixed" id="cartIcon">
            <h1 className="text-danger text-xx-large text-right">{this.state.cartCount}</h1>
            <a className="text-xxx-large float-end p-2" href="#!" id="openCart"><i className="fa fa-shopping-cart p-1 mr-1"></i></a>
            </div>
            <div id="orderModal" className="p-5 position-fixed">
            <a className="text-xxx-large float-end" href="#!" id="closeCart"><i className="fa fa-times"></i></a>
            <h1 className="text-xxx-large p-3 py-5">Cart Item(s):</h1>
            <div id="cartItems">
            
            </div>
            
            <hr></hr>
            <h1 className="float-end text-xxx-large">Total: <a className="text-xxx-large py-2 " id="totalPrice">0</a></h1> 
            <div className="container">
            <h1 className="text-center text-xx-large p-5">Delivery Information</h1>
            <div className="form-group p-2">
            <label htmlFor="exampleInputEmail1" className="py-3">Name</label>
            <input type="email" className="form-control rounded-0 form-control-md" id="userName"
            aria-describedby="emailHelp" placeholder="Enter A Name For The Order" maxLength="50"></input>
            
            </div>
            <div className="form-group p-2">
            <label htmlFor="exampleInputEmail1" className="py-3">Phone Number</label>
            <input type="email" className="form-control rounded-0 form-control-md" id="userPhoneNumber"
            aria-describedby="emailHelp" placeholder="Enter Phone-Number" maxLength="12"></input>
            <small id="emailHelp" className="form-text py-2 text-muted">Just In Case We Need To Contact You (no spaces and no dashes please)</small>
            </div>
            <div className="form-group p-2">
            <label htmlFor="exampleInputEmail1" className="py-3">Address</label>
            <input type="email" className="form-control rounded-0 form-control-md" id="userAddress"
            aria-describedby="emailHelp" placeholder="Enter Address" maxLength="100"></input>
            <small id="emailHelp" className="form-text py-2 text-muted">We'll never share your address with anyone else.</small>
            </div>
            <div className="form-group p-2">
            <label htmlFor="exampleInputEmail1" className="py-3">Email</label>
            <input type="email" className="form-control rounded-0 form-control-md" id="userEmail"
            aria-describedby="emailHelp" placeholder="Enter Address" maxLength="100"></input>
            <small id="emailHelp" className="form-text py-2 text-muted">We'll never share your address with anyone else.</small>
            </div>
            <div className="form-group p-2">
            <label htmlFor="exampleSelect1" className="py-3">Card Company</label>
            <select className="form-control rounded-0" id="userCreditCompany">
            <option>Amex</option>
            <option>Discovery</option>
            <option>Master</option>
            <option>Visa</option>
            <option>Chase</option>
            </select>
            </div>
            <div className="form-group p-2">
            <label htmlFor="exampleInputEmail1" className="py-3">Credit Card</label>
            <input type="email" className="form-control rounded-0 form-control-md" id="userCreditCard"
            aria-describedby="emailHelp" placeholder="Enter Card Number" maxLength="30"></input>
            <small id="emailHelp" className="form-text py-2 text-muted">We'll never share your card with anyone else.</small>
            </div>
            <div className="form-group p-2">
            <label htmlFor="exampleTextarea" className="py-3">Comments</label>
            <textarea className="form-control rounded-0 form-control-md" id="userComment" rows="4" maxLength="300"></textarea>
            </div>
            <div className="container text-center">
            <button className="btn btn-large btn-default  p-3 text-white bg-primary" id="submitOrder" onClick={this.submitOrder}>Submit Order</button>
            </div>
            
            </div>
            </div>
            
            <div className="bg-black text-white text-center p-5 justify-content-center">
            <h1 className="text-xxx-large p-4">Take A Look At All Pending Orders</h1>
            <Link to="/pending">
            <button className="px-5 py-3 btn btn-large bg-primary text-white">All Orders</button>
            </Link>
            
            </div>
            
            </div>
            )
        }
    }
    
    export default Order