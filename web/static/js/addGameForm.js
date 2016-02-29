import React from "React";
import ReactDOM from "react-dom";
import Col from "web/static/js/col";

export default React.createClass({
	handleSubmit(){
		let data = {
			imageUrl: this.refs.imageUrl.getDOMNode().value
		};
		console.dir(data);
		return false;
	},
	render(){
		return (
			<div className="row">
				<Col md="12">
					<h1>Add Game</h1>
					<form role="form" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input ref="imageUrl" type="text" className="form-control" placeholder="Image Url" />
						</div>
						<div className="form-group">
							<input ref="answer1" type="text" className="form-control" placeholder="Answer 1" />
						</div>
						<div className="form-group">
							<input ref="answer2" type="text" className="form-control" placeholder="Answer 2" />
						</div>
						<div className="form-group">
							<input ref="answer3" type="text" className="form-control" placeholder="Answer 3" />
						</div>
						<div className="form-group">
							<input ref="answer4" type="text" className="form-control" placeholder="Answer 4" />
						</div>						
						<button type="submit" className="btn btn-default">Submit</button>
					</form>
				</Col>
			</div>
		);
	}
});