import React, { Component } from 'react';
import { connect } from 'react-redux';
import HUD from './HUD';
const HUDContainer = connect()(HUD);

export default HUDContainer;
