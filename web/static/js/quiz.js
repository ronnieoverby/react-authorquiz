import React from "React";
import ReactDOM from "react-dom";
import Book from "web/static/js/book";

const Quiz = React.createClass({
	getInitialState(){
		return this.props.data.selectGame();
	},
	render() {

		let	{author} = this.state,
			books = this.state.books.map(b => <Book title={b} />);

		return (
			<div>
				<div className="row">

					<div className="col-md-4">
						<img src={author.imageUrl} className="authorimage col-md-3" />						
					</div>
					<div className="col-md-7">
						{books}
					</div>
					<div className="col-md-1">
					</div>

				</div>
			</div>
		);
	}
});

export default Quiz;