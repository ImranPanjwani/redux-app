import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        return (
            <div>
                <div>Book Detail !!</div>
                <h4>{this.props.selectedBook ? this.props.selectedBook.title : 'No book selected !!'}</h4>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);