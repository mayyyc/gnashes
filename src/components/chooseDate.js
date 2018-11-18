import React, {Component} from "react";
import { getVotes, getGnashes } from "../redux/actions/votesActions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

class ChooseDate extends Component {
    constructor() {
        super();
        this.submitDate = this.submitDate.bind(this);
    }
    submitDate(e) {
        e.preventDefault();
        const from = findDOMNode(this.refs.from).value;
        const to = findDOMNode(this.refs.to).value;
        this.props.getVotes(from, to);
        this.props.getGnashes(from, to);
    }
  render() {
    return (
        <div className="ChooseDate">
            <form>
                <label>From</label>
                <input type="date" ref="from" />
                <label>To</label>
                <input type="date" ref="to" />
                <input type="submit" onClick={this.submitDate} />
            </form>
        </div>
    );
  }

}

function mapStateToProps(state) {
    const { votes, gnashes } = state.votes
    return {
      votes,
      gnashes
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getVotes: getVotes,
        getGnashes: getGnashes
    }, dispatch)
}
   
export default connect(mapStateToProps, mapDispatchToProps)(ChooseDate);