import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Modal from 'react-bootstrap/lib/Modal';
import Overlay from 'react-bootstrap/lib/Overlay';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import popover from 'react-bootstrap/lib/Popover';
import tooltip from 'react-bootstrap/lib/Tooltip';
import PropTypes from 'prop-types';
import '../App.css';

const HUD = ({ gameStarted, showOptions, options, numTrialsLeft, tpScore, fpScore, fnScore, pct, onStartClick, onStopClick, onCloseOptions, onShowOptions, onSaveOptions }) => {
    let btnText = gameStarted ? "Stop Game" : "Start Game";
    let toggleGame = () => {
        if (gameStarted) {
            onStopClick();
        }
        else {
            onStartClick(options);
        }
    }
    let displayOptions = () => {
        onShowOptions();
    }
    let saveOptions = () => {
        console.log(options);
        onSaveOptions(options);
    }
    let handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        options[name] = value;
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-5 col-lg-5 col-sm-6 col-xs-6">
                    <ButtonToolbar style={{ marginLeft: "0.5em" }}>
                        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                        <Button bsStyle={gameStarted ? "danger" : "success"} onClick={() => toggleGame()} >{btnText}</Button>
                        <Button onClick={() => displayOptions()}><Glyphicon glyph="cog" /></Button>
                    </ButtonToolbar>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6">
                    <p style={{ fontSize: "0.9em", marginLeft: "0.5em" }}>Trials left: {numTrialsLeft}<br />
                        <span style={{ fontSize: "0.7em" }}>TP: {tpScore} FP: {fpScore} FN: {fnScore} PCT: {Math.round(pct)}</span></p>
                </div>
            </div>
            <Modal show={showOptions} onHide={() => onCloseOptions()}>
                <Modal.Header closeButton>
                    <Modal.Title>Manage Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="form-group">
                            <label for="numTrials">Number of Trials</label>
                            <input id="numTrials" type="text" className="form-control" placeholder="Enter number of trials" value={options.numTrials} onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div class="form-group">
                            <label for="timeDelay">Delay between trials (seconds)</label>
                            <input id="timeDelay" type="text" className="form-control" placeholder="Enter delay in seconds" value={options.delay} onChange={(e) => handleInputChange(e)}/>
                        </div>
                        <div class="form-group">
                            <label for="numLevel">N-Back numLevel</label>
                            <select className="form-control" id="numLevel" value={options.level} onChange={(e) => handleInputChange(e)} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onSaveOptions()}>Save</Button>
                    <Button onClick={() => onCloseOptions()}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HUD;
