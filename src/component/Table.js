import React, { Component } from "react";
import "../App.css";
export default class Table extends Component {
	render() {
		const { tableRows } = this.props;
		return (
			<div>
				<div className='tableHeight'>
					<table className='table table-striped'>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Details</th>
								<th>Time</th>
								<th>Total</th>
								<th>Advance</th>
								<th>Balance</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>{tableRows()}</tbody>
					</table>
				</div>
			</div>
		);
	}
}
