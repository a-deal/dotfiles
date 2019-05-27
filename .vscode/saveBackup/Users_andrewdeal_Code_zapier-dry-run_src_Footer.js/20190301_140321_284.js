import React, { PureComponent } from 'react';

class Footer extends PureComponent {
	render() {
		return (
			<footer>
				<div class='container' role='contentinfo'>
					<div class='row'>
						<div class='col col-lg-5'>
							<div class='footer-text'>
								<p class='h4'>Additional details</p>
								<p>
									Thank you for taking the time to review this application! Any
									suggestions or thoughts would be greatly appreciated :)
								</p>
							</div>
						</div>
					</div>
				</div>
				<p class='copyright align-center'>Made in 🇸🇬 by Andrew Deal 👋</p>
			</footer>
		);
	}
}

export default Footer;
