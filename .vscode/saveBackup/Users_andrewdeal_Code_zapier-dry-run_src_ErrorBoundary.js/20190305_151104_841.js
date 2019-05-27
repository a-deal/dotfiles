import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo
		});
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<div>
					<p class='alert alert-danger'>
						{this.state.error && this.state.error.toString()}
					</p>
					<br />
					{this.state.errorInfo.componentStack}
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
