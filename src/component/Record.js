import React, { Component } from "react";
import HistModal from "./Histmodal";
import InputField from "./InputField";
import Particle from "./Particle";
import Table from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Record extends Component {
	constructor(props) {
		super(props);

		// console.log(this.props);
		this.state = {
			value: { name: "", detail: "", time: "", total: "", advance: "", balance: "" },
			search: "",
			items: [],
			save: [],
			backUp: [],
			modalValue: false,
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
	};
	handleChange = (key, item) => {
		const { value, items } = this.state;
		this.setState({ value: { ...value, [key]: item } });
	};
	handleSearch = (event, key) => {
		const { items, backUp, search } = this.state;
		let dataFilter = [];
		if (event.target.value !== "") {
			dataFilter = backUp.filter((v) => {
				return v.name.toLowerCase().includes(event.target.value.toLowerCase());
			});
		} else {
			dataFilter = backUp;
		}
		this.setState({ [key]: event.target.value, items: dataFilter });
	};
	handleSave = () => {
		const { value, items, index } = this.state;
		let formKey = Object.keys(value);
		let error = false;
		for (let i of formKey) {
			let v = value[i];
			if ([undefined, null, "", false].includes(v)) {
				error = true;
			}
		}
		if (error) {
			alert("fill the fields");
		} else if (index !== undefined) {
			items.splice(index, 1, value);
			this.setState({ items, index: undefined });
		} else {
			let array = items;
			array.push(value);
			this.setState({
				items: array,
				value: { name: "", detail: "", time: "", total: "", advance: "", balance: "" },
				search: "",
				backUp: items,
			});
		}
	};
	handleClick = () => {
		const { items, backUp, search } = this.state;
		let dataFilter = [];
		if (search !== "") {
			dataFilter = backUp.filter((v) => {
				return v.name.toLowerCase().includes(search.toLowerCase());
			});
		} else {
			dataFilter = backUp;
		}
		this.setState({ items: dataFilter });
	};
	tableRows = () => {
		const { items } = this.state;
		let row = [];
		for (let index in items) {
			let item = items[index];
			row.push(
				<tr key={index}>
					<td>{index}</td>
					<td>{item.name}</td>
					<td>{item.detail}</td>
					<td>{item.time}</td>
					<td>{item.total}</td>
					<td>{item.advance}</td>
					<td>{item.balance}</td>
					<td>
						<div className='d-flex justify-content-around'>
							<button type='button' className='btn btn-primary mr-3' onClick={() => this.editHandle(index, item)}>
								Edit
							</button>
							<button type='button' className='doneBtn btn btn-success mr-3' onClick={() => this.done(index)}>
								Done
							</button>
						</div>
					</td>
				</tr>
			);
		}
		return row;
	};
	editHandle = (index, item) => {
		const { items } = this.state;

		let obj = {};
		obj["index"] = index;
		obj["value"] = items[index];
		this.setState(obj);
	};
	done = (index) => {
		const { items, save } = this.state;
		let item = items[index];
		items.splice(index, 1);
		save.push(item);
		this.setState({ items, save });
	};
	delete = (index) => {
		// console.log(index);
		const { save } = this.state;
		save.splice(index, 1);
		this.setState({ save });
	};
	showModal = () => {
		this.setState({ modalValue: true });
	};
	hideModal = () => {
		this.setState({ modalValue: false });
	};

	modalItems = () => {
		const { save } = this.state;
		let array = [];
		for (let i in save) {
			// console.log(i);
			let item = save[i];
			array.push(
				<tr key={i}>
					<td>{item.name}</td>
					<td>{item.detail}</td>
					<td>{item.time}</td>
					<td>{item.total}</td>
					<td>{item.advance}</td>
					<td>{item.balance}</td>
					<td onClick={() => this.delete(i)} className='cross'>
						&times;
					</td>
				</tr>
			);
		}
		return array;
	};
	clearModal = () => {
		// alert("test")
		const { save } = this.state;
		this.setState({ save: [] });
	};

	render() {
		return (
			<>
				<div className='Record'>
					<InputField
						value={this.state.value}
						search={this.state.search}
						handleSearch={this.handleSearch}
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
						handleSave={this.handleSave}
						handleClick={this.handleClick}
						showModal={this.showModal}
					/>
					<HistModal
						modalValue={this.state.modalValue}
						clearModal={this.clearModal}
						modalItems={this.modalItems}
						hideModal={this.hideModal}
					/>
					<Table tableRows={this.tableRows} />
				</div>
				<Particle />
			</>
		);
	}
}

export default Record;
