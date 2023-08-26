## Installing and starting Frontend Dependencies ##
- 1. Go ahead and start a new terminal
- 2. Use cd to navigate to the client file directory, When you use the command pwd you should be in something like this /Users/chance.pham.95454/Documents/ComptencyProject/client
- 3. npm i to install dependencies
- 4. npm start will start it on the front end
## Installing and starting Backend Dependencies ##
- 1. Go ahead and start a new terminal
- 2. Use cd to navigate to the client file directory, When
you use the command pwd you should be in something like this /Users/chance.pham.95454/Documents/ComptencyProject/server
- 3. npm i to install dependencies
4.Go ahead and start a new terminal
- 5. If you have mongo then just do the command 'mongo' and then 'mongod'
- 6. You add and view the data on the server by accessing the database by doing the command 'use burgerWizard' then 'use orders'
- 7. You can add data manually by using the db.orders.insert({}) method or just view them using db.orders.find({}) method.
- 8. npm start will start it on the back end
## New Features (Thesis Project) ##
## Overview ##
For the Thesis Project, I decided to do the following option.
> Build onto your full-stack MERN skills by implementing robust validation logic, which is always needed, especially on new projects that want to be careful about how they initialize their database. Add validation to ensure that users don't submit junk into your Mongo database (less difficult) by utilizing any combination of:
- > Front-end validation logic when controlling events in React
- > RegEx statements (check back in your WDF/Track 1 course) in your front-end
- > Conditionals in your Mongoose controller files
- By adding more user inputs and more conditionals in my front end, along with regex validation, and backend exists conditionals. 
- I was able to prevent spammers and most junkdata from even getting to my database
## Front End Validation ##
I already had simple frontend Javascript .length and simple conditional methods that prevented empty data strings from even getting pushed to my database. Like this
```javascript
if (address !== '') {
            console.log(address)
        }
```
Or This making sure that it is an actual length of a phone number.
```javascript
  if (phoneText.length >= 10) {
            console.log(phoneText)
        }
```
This was not enough, spammers and junk data could still load our database with dummy information. You could add loads of frontend and backend information that will prevent diffrent types of junk data. I decided that by adding this frontend logic and using a regex with an email user input we could prevent some junk data.
```javascript
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
```

So far we have furfilled
- > Front-end validation logic when controlling events in React
and we have done
- > RegEx statements (check back in your WDF/Track 1 course) in your front-end
## Back End Junk Fix ##
Now we have to do logic on the backend to make sure that we don't add any data that already exists. You could change this logic to check any specific key property, but I set it to address for the demo. You could also waterfall .find() to make sure that none of the data exists. I held off on this because I thought that it might hurt the presentation of the demo if the inputs were to strict.
```javascript
const Menu2 = {
    'Burger And Fries Combo': 4.99,
    'Burger And A Half Combo': 4.99,
    'Burger And Slider Combo': 4.99,
    'Fries': 0.99,
    'Salad': 2.99,
    'Shake(Small Strawberry)': 0.99,
    'Shake(Medium Strawberry)': 1.99,
    'Shake(Large Strawberry)': 2.99,
    'Soft Drink(Small Coke)': 0.99,
    'Soft Drink(Small Sprite)': 0.99,
    'Soft Drink(Small Tea)': 0.99,
    'Soft Drink(Medium Coke)': 1.99,
    'Soft Drink(Medium Sprite)': 1.99,
    'Soft Drink(Medium Tea)': 1.99,
    'Soft Drink(Large Coke)': 1.99,
    'Soft Drink(Large Sprite)': 1.99,
    'Soft Drink(Large Tea)': 1.99,
    'Swine And Beef Burger Combo': 6.99,
    'Double Stack Combo': 6.99,
    'Egg and Pulled Pork Burger Combo': 6.99
}
createOrder =  (req, res) => {
    console.log('creating')
    let realTotal = 0;
    console.log(JSON.stringify(req.body))
    for (let i = 0; i < req.body.items.length; i++) {
        console.log(req.body.items[i].toString() + 'First')
        let thisSearch = req.body.items[i].toString()
        let thisVal = Menu2[thisSearch];
        realTotal += thisVal
        console.log(thisVal)
    }
    console.log(realTotal + 'why')
    const order = new Order({
        name: req.body.name,
        total: realTotal,
        email: req.body.email,
        items: req.body.items,
        phone: req.body.phone,
        address: req.body.address,
        cardCompany: req.body.cardCompany,
        cardNumber: req.body.cardNumber,
        comment: req.body.comment
    });
   Order.findOne({ 'address': req.body.address }, function (error, exist) {
        if (exist && !error) {
            res.status(500).send({
                message: 'already exists'
            });
        } else {
     

  
            console.log(order)
            // SAVE A Order IN THE MongoDB
            order.save()

                // THEN PROMISE (successCallback)
                .then(data => {
                    res.send(data);

                    // THEN PROMISE (failureCallback)    
                }).catch(err => {
                    res.status(500).send({
                        message: 'Error Not created'
                    });
                });

            return;
        }
    });
    
    
}

```
Watch out for async and sync issues, it takes mongo some time before it can find data in its database.
We have now furfilled 
- > Conditionals in your Mongoose controller files
## Stylized Login ##
- The admin screen on my original burger wizard could use some love. 
- It is just an alert. Which is very good at what it does (prevent user exploitation and logs the admin in)
-  but we could do better
> Lets make a component
We have to make sure that multiple things happen in this component we will call Login
- That it will prevent user exploitation
- It won't load the data if password is incorrect
- It will let the user try again if the password is incorrect
```javascript
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
```
Notice how compared to original it has to go through this component to even get to the data cards that we get from our api. Don't forget to export on the index.js of this component.
-  Lets change the original page so it only has this component
```javascript
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
```
>Looks pretty clean
>  Just cause we can and maybe in the future.
>  We want to use stylized alerts as well we will add the component base and use it to display some alerts on our page concerning the admin
``` javascript
import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemArr: '',
            booleanFix: 'Not In Progress'
        }
    }
    refreshPage = event => {
        window.location.reload()
    }
                    componentDidMount() {
             
                        
                    }
                    
                    render() {
                        return (
                            <div className="custBack1 position-fixed alertModal">
                                <div className="row text-right p-5 float-end" onClick={this.refreshPage}>
                                    <a className="text-xxx-large cursor-pointer border" ><i className="fa fa-window-close"></i></a>
                                </div>
                                <div className="container">
                           
                                 
                                    <div className="container text-center mt-5 pt-5">
                                  
                                        <img height="500px" src="./assets/images/burgerwiz.png" alt="wizard"></img>
                                        <h1 className="text-xxx-large p-5 text-center">Burger Wizard says: {this.props.echo}</h1>
                          
                                    </div>
                    
                            </div>
                            </div>
                            )
                        }
                    }
                    
                    export default Alert;
```
> Pretty cool modal with room to add the alert as a prop of echo
> Lets see how a future dev would use it
``` javascript

  ReactDOM.render(<Alert echo='Invalid Phone Number' />, document.querySelector('#root'))
```
> Oops notice how it refreshes the page everytime you hit the x
- This would work for errors and failed submissions, but how about successes, we can't use this for successful submissions :(.
## Future addons ##
> In the future we will probably have to create another component or use the same component and have it change what it does onClick= through this. props.
- We need one that refreshes the page when exited
- And one that just hides the modal.
## Conclusion ##
> This website is a great base but like all websites there is always more we can do. On the validation front and
> Maybe a cleaer backend???