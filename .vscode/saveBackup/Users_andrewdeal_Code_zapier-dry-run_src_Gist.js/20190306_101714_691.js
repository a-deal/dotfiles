import React from 'react';
import moment from 'moment';
import client from './GHClient';
import FileList from './FileList';

class Gist extends React.Component {
	state = {
		files: []
	};
	componentDidMount() {
		client.getGistByID(this.props.id).then(data => {
			Object.values(data.files).forEach(file => {
				this.setState((state, props) => {
					return {
						files: state.files.concat([file])
					};
				});
			});
		});
	}
	render() {
		const { description, files, id, owner, createdAt, updatedAt } = this.props;
		return (
			<div className='row'>
				<div className='col col-sm-8 col-sm-offset-2'>
					<jsection>
						<h1 class='h2'>Shopping Cart</h1>
						<table>
							<thead>
								<tr>
									<th>Product Details</th>
									<th>Quantity</th>
									<th class='align-right'>Cost</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<p>
											<strong>Product #1</strong>
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Consectetur necessitatibus facilis facere eaque.
											Molestias, quaerat. Tempore accusantium esse, cum sunt
											totam quibusdam mollitia vel aliquid.
										</p>
										<p>
											<a href='#'>view details</a> |{' '}
											<a href='#'>add to wishlist</a>
										</p>
									</td>
									<td>
										<p class='align-center'>1</p>
									</td>
									<td>
										<p class='align-right'>
											<strong>$10.00</strong>
										</p>
									</td>
									<td class='align-right'>
										<button class='button-primary-outlined'>Remove</button>
									</td>
								</tr>
								<tr>
									<td>
										<p>
											<strong>Product #2</strong>
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Consectetur necessitatibus facilis facere eaque.
											Molestias, quaerat. Tempore accusantium esse, cum sunt
											totam quibusdam mollitia vel aliquid.
										</p>
										<p>
											<a href='#'>view details</a> |{' '}
											<a href='#'>add to wishlist</a>
										</p>
									</td>
									<td>
										<p class='align-center'>2</p>
									</td>
									<td>
										<p class='align-right'>
											<strong>$24.00</strong>
										</p>
									</td>
									<td class='align-right'>
										<button class='button-primary-outlined'>Remove</button>
									</td>
								</tr>
								<tr>
									<td>
										<p>
											<strong>Product #3</strong>
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Consectetur necessitatibus facilis facere eaque.
											Molestias, quaerat. Tempore accusantium esse, cum sunt
											totam quibusdam mollitia vel aliquid.
										</p>
										<p>
											<a href='#'>view details</a> |{' '}
											<a href='#'>add to wishlist</a>
										</p>
									</td>
									<td>
										<p class='align-center'>1</p>
									</td>
									<td>
										<p class='align-right'>
											<strong>$18.00</strong>
										</p>
									</td>
									<td class='align-right'>
										<button class='button-primary-outlined'>Remove</button>
									</td>
								</tr>
								<tr>
									<td>
										<p class='h6'>
											<strong>Grand Total</strong>
										</p>
									</td>
									<td>
										<p class='align-center'>4</p>
									</td>
									<td>
										<p class='align-right'>
											<strong>$76.00</strong>
										</p>
									</td>
									<td class='align-right'>
										<button class='button-primary'>Checkout</button>
									</td>
								</tr>
							</tbody>
						</table>
						<div class='align-right' />
					</jsection>
					<div className='panel'>
						<div className='panel-head'>
							<p className='panel-title'>
								Gist <em>{id}</em>
							</p>
						</div>
						<div className='panel-body'>
							<FileList files={this.state.files} />
						</div>
						<div className='panel-footer'>
							<p>
								Created by <strong>{owner} </strong>
								{moment(createdAt).fromNow()}
							</p>
							<p> Lasted updated {moment(updatedAt).fromNow()}</p>

							{description ? <p>Description: {description}</p> : null}
							<p>Number of files: {Object.entries(files).length}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gist;
