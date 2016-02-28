import React from "React";
import ReactDOM from "react-dom";
import Book from "web/static/js/book";

const Quiz = React.createClass({
	getInitialState(){

		return {
			showContinue: false,
			bgClass: 'neutral',
			...this.props.data.selectGame() // not working but shoudl....
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
	render() {

		let	{author, bgClass, books, showContinue} = this.state;
		books = books.map(b => <Book onBookSelected={this.handleBookSelected} title={b} />);

		let continueFrame = <span />

		if (showContinue) {
			continueFrame = (
				<div className="row">
					<div className="col-md-12">
						<input onClick={this.handleContinue}
								type="button" className="btn btn-primary pull-right"
								value="Continue" />
					</div>
				</div>
			);
		}

		return (
			<div>
				<div className="row">

					<div className="col-md-4">
						<h4>What book did <b>{author.name}</b> write?</h4>
						<img src={author.imageUrl} className="authorimage col-md-3" />						
					</div>
					<div className="col-md-7">
						{books}
					</div>
					<div className={`col-md-1 ${bgClass}`}>
					</div>

				</div>
				{continueFrame}
			</div>
		);
	}
});

export default Quiz;