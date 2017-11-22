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

const HUD = ({ gameStarted, showOptions, options, numTrialsLeft, tpScore, fpScore, fnScore, pct, onStartClick, onStopClick, onShowOptions, onCloseOptions, onSaveOptions }) => {
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
                    Body
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onSaveOptions()}>Save</Button>
                    <Button onClick={() => onCloseResult()}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HUD;
