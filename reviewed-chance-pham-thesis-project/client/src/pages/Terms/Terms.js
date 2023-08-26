import React, { Component } from 'react'




class Terms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            isLoading: false,
        }
    }
    
    render() {
        return (
            <div className="bg-white py-5">
            <section class="container py-5 ">
            <div class="row">
            <div class="col-lg-6">
            <div class="d-inline-block g-width-80 g-height-4 bg-black mb-3"></div>
            <h2 class="g-color-black g-font-weight-700 g-font-size-50 g-line-height-1 mb-4">Terms &amp; Conditions</h2>
            <p class="mb-0 g-line-height-1_5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>
            </section>
            <section class="g-bg-gray-light-v5">
            <div class="container g-py-100">
            <div class="row">
            <div id="stickyblock-start" class="col-md-4 g-mb-30">
            <div class="js-sticky-block g-sticky-block--lg" data-type="responsive" data-start-point="#stickyblock-start" data-end-point="#stickyblock-end">
            <ul class="list-unstyled mb-0">
            <li class="g-bg-gray-dark-v2 g-rounded-top-5 px-5 g-pt-30">
            <a class="d-block text-uppercase rounded px-5 py-3 text-white" href="#license">License</a>
            </li>
            <li class="g-bg-gray-dark-v2 px-5">
            <a class="d-block text-uppercase rounded px-5 py-3 text-white" href="#ownership">Ownership</a>
            </li>
            <li class="g-bg-gray-dark-v2 px-5">
            <a class="d-block text-uppercase rounded px-5 py-3 text-white" href="#usage">Usage</a>
            </li>
            <li class="g-bg-gray-dark-v2 g-rounded-bottom-5 px-5 g-pb-30">
            <a class="d-block text-uppercase rounded px-5 py-3 text-white" href="#privacy">Privacy</a>
            </li>
            </ul>
            </div>
            </div>
            
            <div class="col-md-8">
            
            <div id="license" class="u-shadow-v19 bg-white rounded g-pa-40 g-mb-50">
            <h2 class="h3 g-color-black mb-3">License</h2>
            <div class="d-inline-block g-width-50 g-height-2 bg-black mb-3 g-line-height-1_5"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            
            <div id="ownership" class="u-shadow-v19 bg-white rounded g-pa-40 g-mb-50">
            <h3 class="h3 g-color-black mb-3">Ownership</h3>
            <div class="d-inline-block g-width-50 g-height-2 bg-black mb-3 g-line-height-1_5"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            
            <div id="usage" class="u-shadow-v19 bg-white rounded g-pa-40 g-mb-50">
            <h3 class="h3 g-color-black mb-3">Usage</h3>
            <div class="d-inline-block g-width-50 g-height-2 bg-black mb-3 g-line-height-1_5"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            
            <div id="privacy" class="u-shadow-v19 bg-white rounded g-pa-40">
            <h3 class="h3 g-color-black mb-3">Privacy</h3>
            <div class="d-inline-block g-width-50 g-height-2 bg-black mb-3 g-line-height-1_5"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            
            </div>
            </div>
            </div>
            </section>
            
            </div>
            )
        }
    }
    
    export default Terms 