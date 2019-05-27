import React, { PureComponent } from 'react';
import File from '../File/File';
import { Consumer } from './Context';

const styles = {
  anchor: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
};

class FavoriteList extends PureComponent {
  state = {
    showModal: false
  };
  toggleModal = event => {
    event.preventDefault();
    this.setState({ showModal: !this.state.showModal });
  };
  componentWillReceiveProps = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { files } = this.props;
    return (
      <div className='sidebar sidebar-left'>
        <h3 className='sidebar-category'>Favorites</h3>
        <ul className='sidebar-links'>
          {Object.keys(files).length
            ? Object.values(files).map(favorite => {
                return (
                  <li key={favorite.rawurl}>
                    <a
                      href='/'
                      onClick={this.toggleModal}
                      className='button-primary-text'
                      style={styles.anchor}
                    >
                      {favorite.name} by {favorite.owner}
                    </a>

                    {this.state.showModal ? (
                      <Consumer>
                        {context => (
                          <File
                            onAddOrRemoveFavorite={context.handleRemoveFavorite}
                            onToggleModal={this.toggleModal}
                            owner={favorite.owner}
                            rawURL={favorite.rawurl}
                            name={favorite.name}
                            content={favorite.content}
                            lang={favorite.lang}
                            isFavorite={true}
                          />
                        )}
                      </Consumer>
                    ) : null}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default FavoriteList;
