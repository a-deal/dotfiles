import React, { PureComponent } from 'react';

export class Alert extends PureComponent {
	render() {
		return (
			<div className='row align-center'>
				<div className='col col-sm-6 col-sm-offset-3'>
					<p className={`alert alert-${this.props.level}`}>
						{this.props.userMsg}
					</p>
				</div>
			</div>
		);
	}
}
