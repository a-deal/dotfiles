import React from 'react';
import { createPortal } from 'react-dom';

const root = document.getElementById('modal');

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.el = document.createElement('div');
	}
}
