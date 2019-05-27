import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const root = document.getElementById('modal');

class Modal extends Component {
	constructor(props) {
		super(props);

		this.el = document.createElement('div');
	}
	componentDidMount() {
		root.appendChild(this.el);
	}
	componentWillUnmount() {
		root.removeChild(this.el);
	}
	render() {
		return createPortal(this.props.children, this.el);
	}
}

export default Modal;
