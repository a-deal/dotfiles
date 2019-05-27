import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <div className='container' role='contentinfo'>
          <div className='row'>
            <div className='col col-lg-5'>
              <div className='footer-text'>
                <p className='h4'>Empathy, empathy, empathy</p>
                <p>
                  Thank you for taking the time to review this application! Any
                  suggestions or thoughts would be greatly appreciated :)
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className='copyright align-center'>Made in 🇸🇬 by Andrew Deal 👋</p>
      </footer>
    );
  }
}

export default Footer;
