import React, { Component } from 'react'




class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            isLoading: false,
        }
    }
    
    render() {
        return (
            <div>
            <div className="bg-dark p-5 text-white text-center">
            <h1 className="text-xxx-large p-2">Feel Free to Contact Us</h1>
            <p className="text-xx-large p-2">25, Lorem Lis Street, Orange</p>
            <p className="text-xx-large p-2">California, US</p>
            <p className="text-xx-large p-2">Phone: 800 123 3456</p>
            <p className="text-xx-large p-2">Fax: 800 123 3457</p>
            <p className="text-xx-large p-2">Email: info@apex.com</p>
            </div>
            <div className="custBack1 text-center py-5">
            <img className="p-3" width="250px" height="200px" src="./assets/images/burgerwiz.png"></img>
            <h1 className="p-3 text-xxx-large">Work At Burger Wizard</h1>
                    <p className="p-4 text-xx-large">Burger Wizard is always looking to expand and hire the best. Feel free to <a href="#">download</a> our resume and apply.
            Please use our resume here</p>
                    <p className="pb-3 text-xx-large">Feel free to <a href="#" className="text-primary">download</a> our resume and apply.
            Please use our resume here</p>
            <a className="btn btn-md bg-primary rounded-0 text-white py-3 px-2 mt-2 mb-3" href="mailto:chance.pham.95454@code7370.org">Get in touch</a>
            </div>
            </div>
            )
        }
    }
    
    export default Contact 