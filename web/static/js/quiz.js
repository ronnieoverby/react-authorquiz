import React from "React";
import ReactDOM from "react-dom";
import Book from "web/static/js/book";

const Quiz = React.createClass({
	propTypes:{
		books: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
	},
	render() {

		let books = this.props.books.map(b => <Book title={b} />)

		return (
			<div>
				{books}
			</div>
		);
	}
});

export default Quiz;