import React from "React";

const Book = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render(){
		return (
			<div className="answer">
				<h4>{this.props.title}</h4>
			</div>
		);
	}
});

export default Book;