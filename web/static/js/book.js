import React from "react";

const Book = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	handleClick(){
		let {onBookSelected, title} = this.props;
		onBookSelected(title);
	},
	render(){
		return (
			<div onClick={this.handleClick} className="answer">
				<h4>{this.props.title}</h4>
			</div>
		);
	}
});

export default Book;