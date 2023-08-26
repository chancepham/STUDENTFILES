import React from 'react';

const Presets = (props) => {
        return (
            <div className="row text-center justify-content-center">
                <div className="quickC d-flex mt-4">
                    <div className="col-4 selected eachOptionPreset">
                        <a href="#" id="change25" onClick="switchTo25">
                            <h2>pomodoro</h2>
                        </a>

                    </div>
                    <div className="col-4 eachOptionPreset">
                        <a href="#" id="change5" onClick="switchTo5">
                            <h2>short break</h2>
                        </a>
                    </div>
                    <div className="col-4 eachOptionPreset">
                        <a href="#" id="change15" onClick={this.switchTo25}>
                            <h2>long break</h2>
                        </a>
                    </div>


                </div>

            </div>
    )
}

export default Presets;