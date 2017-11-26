import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Overlay from 'react-bootstrap/lib/Overlay';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import popover from 'react-bootstrap/lib/Popover';
import tooltip from 'react-bootstrap/lib/Tooltip';
import PropTypes from 'prop-types';
import '../App.css';
import alphabet_a from '../assets/audio/a.mp3';
import alphabet_c from '../assets/audio/c.mp3';
import alphabet_h from '../assets/audio/h.mp3';
import alphabet_k from '../assets/audio/k.mp3';
import alphabet_l from '../assets/audio/l.mp3';
import alphabet_q from '../assets/audio/q.mp3';
import alphabet_r from '../assets/audio/r.mp3';
import alphabet_s from '../assets/audio/s.mp3';
import alphabet_t from '../assets/audio/t.mp3';
import alphabet_w from '../assets/audio/w.mp3';

var hlSquare = {
  backgroundColor: "magenta"
}
var tblCenter = {
  width: "100%",
  float: "none",
  margin: "0 auto"
}

var scoreMsg = (p) =>
  p == 0 ? "Are you still playing?" :
    p <= 20 ? "Don't give up!" :
      p <= 40 ? "You can do better!" :
        p <= 60 ? "Not bad!" :
          p <= 80 ? "You passed this level!" :
            "You can move on to the next level!";

const Board = ({ coords, showResult, score, onCloseResult }) => {
  var audio;
  switch (coords.alphabet) {
    case 'a':
      audio = new Audio(alphabet_a);
      break;
    case 'c':
      audio = new Audio(alphabet_c);
      break;
    case 'h':
      audio = new Audio(alphabet_h);
      break;
    case 'k':
      audio = new Audio(alphabet_k);
      break;
    case 'l':
      audio = new Audio(alphabet_l);
      break;
    case 'q':
      audio = new Audio(alphabet_q);
      break;
    case 'r':
      audio = new Audio(alphabet_r);
      break;
    case 's':
      audio = new Audio(alphabet_s);
      break;
    case 't':
      audio = new Audio(alphabet_t);
      break;
    case 'w':
      audio = new Audio(alphabet_w);
      break;
  }
  if (audio)
    audio.play();

  return (
    <div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 0 && coords.y === 0 ? hlSquare : null}></div></div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 0 && coords.y === 1 ? hlSquare : null}></div></div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 0 && coords.y === 2 ? hlSquare : null}></div></div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 1 && coords.y === 0 ? hlSquare : null}></div></div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 1 && coords.y === 1 ? hlSquare : null}></div></div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 1 && coords.y === 2 ? hlSquare : null}></div></div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 2 && coords.y === 0 ? hlSquare : null}></div></div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 2 && coords.y === 1 ? hlSquare : null}></div></div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="alert alert-info Square-Block" role="alert" style={coords.x === 2 && coords.y === 2 ? hlSquare : null}></div></div>
      </div>

      <Modal show={showResult} onHide={() => onCloseResult()}>
        <Modal.Header closeButton>
          <Modal.Title>{scoreMsg(score.pct)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your score is: {Math.round(score.pct)}%</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" style={{color:"SeaGreen"}}># of correct hits</th>
                <th scope="col" style={{color:"FireBrick"}}># of incorrect hits</th>
                <th scope="col" style={{color:"FireBrick"}}># of miss</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Position</th>
                <td style={{color:"MediumSeaGreen"}}>{score.numPositionTP}</td>
                <td style={{color:"Crimson"}}>{score.numPositionFP}</td>
                <td style={{color:"Crimson"}}>{score.numPositionFN}</td>
              </tr>
              <tr>
                <th scope="row">Sound</th>
                <td style={{color:"MediumSeaGreen"}}>{score.numAudioTP}</td>
                <td style={{color:"Crimson"}}>{score.numAudioFP}</td>
                <td style={{color:"Crimson"}}>{score.numAudioFN}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onCloseResult()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Board.propTypes = {
  coords:
  PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
}

export default Board;
