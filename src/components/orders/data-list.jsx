/** @jsx React.DOM */

var React = require('react');

var searchBox = React.createClass({
	componentDidMount: function () {
  		var select = document.getElementById("dropdown"); 
  		var i;
  		if(this.props.contacts){
			this.props.contacts.map(function(item){
				var opt = item.name;
			    var el = document.createElement("option");
			    el.value = opt;
			    select.appendChild(el);
			})
		}
  	},

	render: function (){
		return(
			<div>
			<div>
				{( this.props.vieworder
					? <input list="dropdown"  className="view_input" type="text"  defaultValue={this.props.client} name="client" disabled/>
					: <input list="dropdown" type="text"  defaultValue={this.props.client ? this.props.client : ""} name="client" required/>
				)}
			</div>
				<datalist id ="dropdown"></datalist>
			</div>
		)
	}
})

module.exports = searchBox;