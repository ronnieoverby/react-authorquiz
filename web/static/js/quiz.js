import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
import Book from "web/static/js/book";
import Col from "web/static/js/col";

const Quiz = React.createClass({
	getInitialState(){

		return {
			showContinue: false,
			bgClass: 'neutral',
			...this.props.data.selectGame()
		};
	},
	handleBookSelected(title) {
		let isCorrect = this.state.checkAnswer(title);
		this.setState({
			bgClass: isCorrect ? 'pass' : 'fail',
			showContinue: isCorrect
		});
	},
	handleContinue(){
		this.setState(this.getInitialState());
	},
	handleAddGame(){
		console.log('add game clicked');
	},
	render() {

		let	{author, bgClass, books, showContinue} = this.state;
		books = books.map(b => <Book onBookSelected={this.handleBookSelected} title={b}
									 key={b} />);

		let continueFrame = <span />

		if (showContinue) {
			continueFrame = (
				<div className="row">
					<Col md="12">
						<input onClick={this.handleContinue}
								type="button" className="btn btn-primary pull-right"
								value="Continue" />
					</Col>
				</div>
			);
		}

		return (
			<div>
				<div className="row">

					<Col md="4">
						<h4>What book did <b>{author.name}</b> write?</h4>
						<img src={author.imageUrl} className="authorimage col-md-3" />						
					</Col>
					<Col md="7">
						{books}
					</Col>
					<Col md="1" className={bgClass}>
					</Col>

				</div>
				
				{continueFrame}

				<div className="row">
					<Col md="12">
						<Link to="/add" className="btn btn-primary">Add Game</Link>
					</Col>			
				</div>
			</div>
		);
	}
});

export default Quiz;