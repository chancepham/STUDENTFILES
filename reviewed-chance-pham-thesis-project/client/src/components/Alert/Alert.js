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