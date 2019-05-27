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
						<div class='col col-sm-6 col-lg-3 col-lg-offset-1'>
							<h4 class='footer-links-category'>Links Category 1</h4>
							<ul class='footer-links'>
								<li>
									<a href='#'>Link #1</a>
								</li>
								<li>
									<a href='#'>Link #2</a>
								</li>
								<li>
									<a href='#'>Link #3</a>
								</li>
							</ul>
						</div>

						<div class='col col-sm-6 col-lg-3'>
							<h4 class='footer-links-category'>Links Category 2</h4>
							<ul class='footer-links'>
								<li>
									<a href='#'>Link #1</a>
								</li>
								<li>
									<a href='#'>Link #2</a>
								</li>
								<li>
									<a href='#'>Link #3</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<p class='copyright align-center'>Made in 🇸🇬 by Andrew Deal 👋</p>
			</footer>
		);
	}
}

export default Footer;
