import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class HomeCar extends Component {


    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item homeoverlay">

                        <div className="container">
                            <div className="carousel-caption">
                                <a className="u-icon-v3 text-xxx-large text-primary heartIcon" href="#!"><i className="fa fa-heart heartPosi"></i></a>
                                <h1 className="p-3 text-xxx-large">Bacon And Egg Burger Combo $6.99</h1>
                                <p className="p-3 text-xxx-large">Breakfast In A Burger</p>
                                <Link to="/order"><p className="p-2 mt-2 text-x-large btn btn-lg btn-primary">Order Now</p></Link>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item homeoverlay2">

                        <div className="container">
                            <div className="carousel-caption">
                                <a className="u-icon-v3 text-xxx-large text-primary heartIcon" href="#!"><i className="fa fa-heart heartPosi"></i></a>
                                <h1 className="p-3 text-xxx-large">Burger And A Half $4.99</h1>
                                <p className="p-3 text-xxx-large">A Cheeseburger and Another Half Of Another</p>
                                 <Link to="/order"><p className="mt-2 p-2 text-x-large btn btn-lg btn-primary">Order Now</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active homeoverlay3">

                        <div className="container">
                            <div className="carousel-caption">
                                <a className="u-icon-v3 text-xxx-large text-primary heartIcon" href="#!"><i className="fa fa-heart heartPosi"></i></a>
                                <h1 className="p-3 text-xxx-large">Burger and Slider Combo $4.99</h1>
                                <p className="p-3 text-xxx-large">The Same Experience Now With A Son</p>
                                 <Link to="/order"><p className="mt-2 p-2 text-x-large btn btn-lg btn-primary">Order Now</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default HomeCar;