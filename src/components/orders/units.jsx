/** @jsx React.DOM */

var React = require('react');

var units = React.createClass({
	render: function () {
		var unit = this.props.unit;
		var addUnit = this.props.addUnit;
		var removeUnit = this.props.removeUnit;

		return (
			<units className='row no-gutter'>
				<div className="column-13 push-1 border ">

					<div className="row">
						<div className="column-3">
							<p>Unit No.</p>
						</div>
						<div className="column-2">
							<p>Seal</p>
						</div>
						<div className="column-2">
							<p>Unit Type</p>
						</div>
						<div className="column-3">
							<p>Loading Reference</p>
						</div>
						<div className="column-3">
							<p>Loading Date</p>
						</div>
						<div className="column-3">
							<p>Loading Time</p>
						</div>
					</div>
					<div className="row">
						<div className="column-3">
							<input type="text" name="unit_number" defaultValue={unit.unit_number ? unit.unit_number : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
						<div className="column-2">
							<input type="text" name="unit_seal" defaultValue={unit.unit_seal ? unit.unit_seal : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
						<div className="column-2">
							<input type="text" name="unit_type" defaultValue={unit.unit_type ? unit.unit_type : ""} onChange={this.props.handleChange.bind(null, this.props.keys)} required/>
						</div>
						<div className="column-3">
							<input type="text" name="unit_loading_reference" defaultValue={unit.unit_loading_reference ? unit.unit_loading_reference : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
						<div className="column-3">
							<input type="date" name="unit_loading_date" defaultValue={unit.unit_loading_date ? unit.unit_loading_date.slice(0, 10) : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
						<div className="column-3">
							<input type="time" name="unit_loading_time" defaultValue={unit.unit_loading_time ? unit.unit_loading_time : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
					</div>

					<div className="row">
						<div className="column-2">
							<p>Net Weight</p>
						</div>
						<div className="column-2">
							<p>Gross Weight</p>
						</div>
						<div className="column-2 push-2 push-right">
							<p>Volume (m3)</p>
						</div>
						<div className="column-4 push-2 push-right">
							<p>Commodity Description</p>
						</div>
						<div className="column-2 push-2 push-right">
							<p>No of Packages</p>
						</div>
						<div className="column-2 push-2 push-right">
							<p>Kind of Packages</p>
						</div>
					</div>

					<div className="row">
						
						<div className="column-2">
							<input type="number" name="unit_net_weight" step="any" defaultValue={unit.unit_net_weight ? unit.unit_net_weight : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
						<div className="column-2">
							<input type="number" name="unit_gross_weight" step="any" defaultValue={unit.unit_gross_weight ? unit.unit_gross_weight : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
						<div className="column-2">
							<select name="unit_weight" >
								<option value= "kg">kg</option>
								<option value= "T">tons</option>
							</select>
						</div>
						<div className="column-2">
							<input type="number" name="unit_volume" step="any" defaultValue={unit.unit_volume ? unit.unit_volume : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
						<div className="column-4">
							<textarea type="text" className="small" name="unit_commodity_description" defaultValue={unit.unit_commodity_description ? unit.unit_commodity_description : ""} onChange={this.props.handleChange.bind(null, this.props.keys)} max="500"/>
						</div>
						<div className="column-2">
							<input type="number" name="unit_no_of_packages" defaultValue={unit.unit_no_of_packages ? unit.unit_no_of_packages : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
						<div className="column-2">
							<input type="text" name="unit_kind_of_packages" defaultValue={unit.unit_kind_of_packages ? unit.unit_kind_of_packages : ""} onChange={this.props.handleChange.bind(null, this.props.keys)}/>
						</div>
					</div>
				</div>
				<div className="column-2 push-1">
					<button type="button" onClick = {addUnit.bind(null, this.props.keys)} className="view_input button blue units add-row">+</button>
					<button type="button" onClick = {removeUnit.bind(null, this.props.keys)} className="view_input button blue units add-row">-</button>
				</div>
			</units>
		);
	}
})

module.exports = units;
