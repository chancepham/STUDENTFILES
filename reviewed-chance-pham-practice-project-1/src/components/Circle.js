import React from 'react';

const Circle = (props) => {
    return (

        <div text-align="center">
            <svg align="center" xmlns="http://www.w3.org/2000/svg" width="1000" height="750">

                <circle stroke="#f86f72" style="stroke-dasharray: 1571 1571;stroke-dashoffset:0; stroke-width: 10;" class="text-center justify-content-center shadow" cx="50%" cy="50%" r="250" fill="#151932" id="circle" onclick="clickCircle();" />

            </svg>
            <div className="insideCircle">
                <a href="#">
                    <h3>{this.state.minutes}: {this.state.seconds}</h3>
                </a>
                <a href="#" onClick={this.fromAny} className="mt-4">
                    <h4>{this.state.toggle}</h4>
                </a>

            </div>
        </div>
    )
}

export default Circle;