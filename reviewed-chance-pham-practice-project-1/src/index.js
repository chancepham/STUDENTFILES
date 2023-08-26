import React, { Component } from "react";
import ReactDOM from 'react-dom';

import './style.css'

let presetPomo = 1500; //Preset for Pomo Time
let presetLong = 900; // Preset for Long Break
let presetShort = 300; // Preset to Short Break
let from = presetPomo; // By default set for Pomo Time
let whatOrg = presetPomo; // orginal time to compare to elasped time

function getCSSRule(ruleName) { //function that grabs specific css rule 
    ruleName = ruleName.toLowerCase();
    var result = null;
    var find = Array.prototype.find;
    
    find.call(document.styleSheets, styleSheet => {
        result = find.call(styleSheet.cssRules, cssRule => {
            return cssRule instanceof CSSStyleRule
            && cssRule.selectorText.toLowerCase() == ruleName;
        });
        return result != null;
    });
    return result;
}
class Clock extends React.Component {
    
    constructor() {
        super();
        this.state = {
            toggle: 's t a r t', // text that switches start and pause
            minutes: Math.floor(from/60), // calculate minutes from time
            seconds: 60 - (from % 60), // calculate seconds from time
            paused: false, // variable for seeing if paused
            firstTime: true, // is it the first time starting timer?
            whatFont: 'sans-serif', // font preset
            whatColor: 'Default', // color theme preset
            applying: false, // are you currently applying a setting
            selectColor: '#f8706f'  // color theme preset
            
            
        }
    };
    
    componentDidMount() {
        document.getElementById('circle').style.stroke = '#f8706f' //apply default stroke color to circle
        let actThis = this; // declare this because react is wierd
        document.getElementById('change25').onclick = function () { //on click function that is by default Pomo set for 25 minutes
            document.getElementById('change15').classList.remove('selected') //remove selected from the other possible presets
            document.getElementById('change5').classList.remove('selected')//remove selected from the other possible presets
            document.getElementById('change25').classList.add('selected')// add selected preset to selected preset
            from = presetPomo // from which is the time is set to the pomo preset
            whatOrg= presetPomo // orginal time that will be used to compare set to Pomo preset
            let percentageComp = from / whatOrg; // percentage calculation between time elasped and original set time
            let circleVal = percentageComp * 1571 // percentage of stroke that should be shown
            document.getElementById('circle').style.strokeDashoffset = circleVal; // display correct percentage of stroke
            actThis.setState({ toggle: 's t a r t' }) // paused when change preset
            actThis.setState({ paused: true })  // paused when change preset
            actThis.setState({ minutes: Math.floor(from / 60) }) // calculate minutes and save to state
            if (from % 60 == 0) {
                actThis.setState({ seconds: '00' }) // if seconds is zero make sure that there are two to look correct
            }
            else {
                actThis.setState({ seconds: (from % 60) }) // else just show normally
            }
            
        };
        document.getElementById('change15').onclick = function () {
            document.getElementById('change25').classList.remove('selected') //remove selected from the other possible presets
            document.getElementById('change5').classList.remove('selected')  //remove selected from the other possible presets
            document.getElementById('change15').classList.add('selected') // add selected preset to selected preset
            from = presetLong// from which is the time is set to the Long preset
            whatOrg = presetLong// orginal time that will be used to compare set to Long preset
            let percentageComp = from / whatOrg; // percentage calculation between time elasped and original set time
            let circleVal = percentageComp * 1571 // percentage of stroke that should be shown
            document.getElementById('circle').style.strokeDashoffset = circleVal; // display correct percentage of stroke
            actThis.setState({ toggle: 's t a r t' })   // paused when change preset
            actThis.setState({ paused: true })  // paused when change preset
            actThis.setState({ minutes: Math.floor(from / 60) }) // calculate minutes and save to state
            if (from % 60 == 0) {
                actThis.setState({ seconds: '00' })  // if seconds is zero make sure that there are two to look correct
            }
            else {
                actThis.setState({ seconds: (from % 60) }) // else just show normally
            }
            
        };
        if (this.state.seconds == 0 || this.state.seconds == '0') {
            this.setState({ seconds: '00' }) // if seconds is zero make sure that there are two to look correct
        }
        else if (this.state.seconds == 60 || this.state.seconds == '60') {
            this.setState({ seconds: '00' })// if seconds is sixty then it is a minute
        }
        document.getElementById('change5').onclick = function () {
            document.getElementById('change25').classList.remove('selected') //remove selected from the other possible presets
            document.getElementById('change15').classList.remove('selected') //remove selected from the other possible presets
            document.getElementById('change5').classList.add('selected') // add selected preset to selected preset
            from = presetShort // from which is the time is set to the short preset
            whatOrg = presetShort // orginal time that will be used to compare set to short preset
            let percentageComp = from / whatOrg; // percentage calculation between time elasped and original set time
            let circleVal = percentageComp * 1571 // percentage of stroke that should be shown
            document.getElementById('circle').style.strokeDashoffset = circleVal;  // display correct percentage of stroke
            actThis.setState({ toggle: 's t a r t' })  // paused when change preset
            actThis.setState({ paused: true })   // paused when change preset
            actThis.setState({ minutes: Math.floor(from / 60) }) // calculate minutes and save to state
            if (from % 60 == 0) {
                actThis.setState({ seconds: '00' })  // if seconds is zero make sure that there are two to look correct
            }
            else {
                actThis.setState({ seconds: (from % 60) })  // else just show normally
            }
        };
    }
    changeSans = () => {
        this.setState({ whatFont: 'sans-serif' }) //change font preset
    }
    changeMonospace = () => {
        this.setState({ whatFont: 'monospace' }) //change font preset
        
    }
    changeFantasy = () => {
        this.setState({ whatFont: 'fantasy' }) //change font preset
    }
    changeColorDefault = () => {
        this.setState({ whatColor: 'Default' }) //change color preset
    }
    changeColorGreen = () => {
        this.setState({ whatColor: 'Green' })//change color preset
    }
    changeColorPurple = () => {
        this.setState({ whatColor: 'Purple' })//change color preset
    }
    applySettings = () => { //apply settings function
        this.setState({applying:true}) //set state to current applying settings
        presetPomo = document.getElementById('pomodoroPreset').value * 60; //calculate preset time in seconds
        presetShort = document.getElementById('pomodoroPresetShort').value * 60; //calculate preset time in seconds
        presetLong = document.getElementById('pomodoroPresetLong').value * 60; //calculate preset time in seconds
        if (this.state.whatFont == 'sans-serif') { //check preset
            document.body.style.fontFamily = 'sans-serif'; // change to preset
        }
        else if (this.state.whatFont == 'monospace') {//check preset
            document.body.style.fontFamily = 'monospace';// change to preset
        }
        else if (this.state.whatFont == 'fantasy') {//check preset
            document.body.style.fontFamily = 'fantasy';   // change to preset
        }
        if (this.state.whatColor == 'Default') {//check preset
            document.getElementById('circle').style.stroke = '#f8706f'  // change to preset
            this.setState({ selectColor: '#f8706f' })  // change to preset
        }
        else if (this.state.whatColor == 'Green') {//check preset
            document.getElementById('circle').style.stroke = '#92fff7'  // change to preset
            this.setState({ selectColor: '#92fff7' })  // change to preset
        }
        else if (this.state.whatColor == 'Purple') {//check preset
            document.getElementById('circle').style.stroke = '#d481f5'  // change to preset
            this.setState({ selectColor: '#d481f5' })  // change to preset
        }
        document.getElementById('change25').click()
    }
    incUp= (event) => {
        let currentVal = event.currentTarget.parentElement.parentElement.parentElement.querySelector('.js-result').value // grab value of box
        currentVal = Number.parseInt(currentVal) + 1 //add one
        if (currentVal > 1) { // dont go less than 1 minute
            event.currentTarget.parentElement.parentElement.parentElement.querySelector('.js-result').value = currentVal
        }
    }
    incDown = (event) => {
        let currentVal = event.currentTarget.parentElement.parentElement.parentElement.querySelector('.js-result').value // grab value of box
        currentVal = Number.parseInt(currentVal) - 1 // minus one
        if (currentVal > 1) { // dont go less than 1 minute
            event.currentTarget.parentElement.parentElement.parentElement.querySelector('.js-result').value = currentVal
        }        
    }
    
    fromAny = (e) => {
        e.preventDefault(); // duh
        let toggle = this.state.toggle //button text
        let actThis = this; //wierd react this
        this.setState({ firstTime: false }) // not first time anymore cowboy
        if (toggle === 'p a u s e') { // check button text
            this.setState({ toggle: 's t a r t' }) // change button text
            this.setState({ paused: true }) // it is paused now
        }
        else {
            this.setState({ toggle: 'p a u s e' }) // change button text
            this.setState({ paused: false }) // it isnt paused now
        }    
        if (this.state.firstTime === true){ // first time?
            let interval = setInterval(function () { // actual timer function
                if (from == 0) { // if you are out of time
                    clearInterval(interval); // end this function
                }
                else if (actThis.state.paused === false) {// otherwise keep running if it is not paused
                    from--; // take a second away
                    let percentageComp = from / whatOrg; // calculate percentage
                    let circleVal = percentageComp * 1571 // calculate percentage
                    document.getElementById('circle').style.strokeDashoffset= circleVal; // apply percentage complete to stroke
                    actThis.setState({ minutes: Math.floor(from / 60) })// calculate minutes
                    if (from % 60 < 10) { // if seconds less than 10 add a zero to the front so it looks right
                        let addZero = '0' + (from % 60) // add the zero
                        actThis.setState({ seconds: addZero }) // save to state
                    }
                    else {
                        actThis.setState({ seconds: (from % 60) })  // otherwise you can do it normally
                    }
                }
            }, 1000); // everu second
        }
        
    }
    render() {
        let changeSelectedRule = getCSSRule('.selected') // get css rule of selected class
        changeSelectedRule.style.backgroundColor= this.state.selectColor //change the color to the preset color
        return (
            <div>
            <div className="insideCircle">
            <h3>{this.state.minutes}: {this.state.seconds}</h3>
            <a href="#" onClick={this.fromAny} className="mt-4">
            <h4 className="aTarget1" id="toggleStart">{this.state.toggle}</h4>
            </a>
            </div>
            <div className="position-fixed settingsModal bg-white text-dark py-5">
            <div className="row px-5 pb-4">
            <div className="col-3">
            <h5 className="">Settings</h5>
            </div>
            <div className="col-6"></div>
            <div className="col-3">
            <a href="#" className="align-content-right text-right xOut text-muted">
            <h6>x</h6>
            </a>
            </div>
            </div>
            <hr></hr>
            <h4 className="pt-2">TIME(MINUTES)</h4>
            <div className="row p-5 text-left justify-content-left">
            <div className="col-4">
            <h3>Pomodoro</h3>
            <div className="pt-4 input-group">
            <input className="js-result form-control text-center g-font-size-16 rounded-5 g-pa-10-16" type="text" value={presetPomo/60}
            readOnly id="pomodoroPreset"></input>
            <div className="input-group-append g-color-gray">
            <div className="input-group-text align-items-center text-center rounded-5 d-block">
            <img className="d-block cursor-pointer js-up" onClick={this.incUp} src="images/up.png"></img>
            <img className="d-block cursor-pointer js-down" onClick={this.incDown} src="images/down.png"></img>
            </div>
            </div>
            </div>
            </div>
            <div className="col-4">
            <h3>short break</h3>
            <div className="pt-4 input-group">
                                <input className="js-result form-control text-center g-font-size-16 rounded-5 g-pa-10-16" type="text" value={presetShort / 60}
            readOnly id="pomodoroPresetShort"></input>
            <div className="input-group-append g-color-gray">
            <div className="input-group-text align-items-center text-center rounded-5 d-block">
            <img className="d-block cursor-pointer js-up" onClick={this.incUp} src="images/up.png"></img>
            <img className="d-block cursor-pointer js-down" onClick={this.incDown} src="images/down.png"></img>
            </div>
            </div>
            </div>
            </div>
            <div className="col-4">
            <h3>long break</h3>
            <div className="pt-4 input-group">
                                <input className="js-result form-control text-center g-font-size-16 rounded-5 g-pa-10-16" type="text" value={presetLong/60}
            readOnly id="pomodoroPresetLong"></input>
            <div className="input-group-append g-color-gray">
            <div className="input-group-text align-items-center text-center rounded-5 d-block">
            <img className="d-block cursor-pointer js-up" onClick={this.incUp} src="images/up.png"></img>
            <img className="d-block cursor-pointer js-down" onClick={this.incDown} src="images/down.png"></img>
            </div>
            </div>
            </div>
            </div>
            </div>
            <hr className="mx-5"></hr>
            <div className="row py-4 text-center justify-content-center">
            <div className="col-3">
            <h2 className="fontTitle text-left ml-4">F o n t</h2>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
            <div className="row">
            <div className="col">
            <p id="fontSan" onClick={this.changeSans} className="fontChoice cursor-pointer p-3 selectedFont fontSans">Aa</p>
            </div>
            <div className="col">
            <p id="fontMono" onClick={this.changeMonospace} className="fontChoice cursor-pointer p-3 fontMono">Aa</p>
            </div>
            <div className="col">
            <p id="fontFantasy" onClick={this.changeFantasy} className="fontChoice cursor-pointer p-3 fontFant">Aa</p>
            </div>
            </div>
            </div>
            </div>
            <hr className="mx-5"></hr>
            <div className="row py-4 text-center justify-content-center">
            <div className="col-3">
            <h2 className="fontTitle text-left ml-4">C O L O R</h2>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
            <div className="row">
            <div className="col">
            <p onClick={this.changeColorDefault} className="colorChoice cursor-pointer p-3 colorC1 selectedColor">+</p>
            </div>
            <div className="col">
            <p onClick={this.changeColorGreen} className="colorChoice cursor-pointer colorC2 p-3">+</p>
            </div>
            <div className="col">
            <p onClick={this.changeColorPurple} className="colorChoice cursor-pointer colorC3 p-3">+</p>
            </div>
            </div>
            </div>
            </div>
            <button className="text-white applyBut text-center justify-content-center py-4 px-5 mx-3 cursor-pointer" onClick={this.applySettings}>Apply</button>
            </div>
            </div>
            );
        }
    }
    
    ReactDOM.render(<Clock />, document.querySelector('#root'))