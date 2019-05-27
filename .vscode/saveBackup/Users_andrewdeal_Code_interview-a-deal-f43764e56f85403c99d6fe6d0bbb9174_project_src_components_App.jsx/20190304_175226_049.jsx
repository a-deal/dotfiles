import React, { PureComponent } from 'react';
import {
  NoUserErrorMsg,
  NoGistsErrorMsg,
  LoadingMsg,
  DuplicateFavoriteMsg
} from './Alerts/messages';
import { INFO, WARN, ERROR } from './Alerts/levels';
import client from '../GHClient';
import Alert from './Alerts/Alert';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';

const styles = {
  section: {
    color: 'white',
    backgroundColor: '#4caf50'
  },
  body: {
    fontFamily: `'Averia Libre','Open Sans',sans-serif`
  }
};
class App extends PureComponent {
  state = {
    username: '',
    gists: null,
    error: null,
    isLoading: false
  };
  handleUsernameInput = event => {
    event.preventDefault();
    this.setState({ username: event.target.value });
  };
  handleGistsRequest = event => {
    event.preventDefault();
    this.setState({ error: null, gists: null, isLoading: true });
    client
      .findGistsByUser(this.state.username)
      .then(gists => {
        if (gists.length) {
          this.setState({ gists });
        } else {
          this.setState({
            error: { message: NoGistsErrorMsg, level: WARN }
          });
        }
      })
      .catch(err => {
        if (err.response && err.response.data.message === 'Not Found') {
          this.setState({
            error: { message: NoUserErrorMsg, level: ERROR }
          });
        }
      })
      .then(() => this.setState({ username: '', isLoading: false }));
  };
  render() {
    let { gists, error, username, isLoading } = this.state;
    return (
      <div>
        <section style={styles.section}>
          <div className='container-large'>
            <Header />
            <Search
              username={username}
              onUsernameSubmit={this.handleGistsRequest}
              onUsernameInput={this.handleUsernameInput}
            />
          </div>
        </section>
        <div className='container' style={styles.body} role='main'>
          <section className='section-tertiary'>
            <div className='container-large'>
              <div className='row row-reverse'>
                <div className='col col-sm-10'>
                  {isLoading ? (
                    <Alert level={INFO} userMsg={LoadingMsg} />
                  ) : null}
                  {error ? (
                    <Alert level={error.level} userMsg={error.message} />
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;