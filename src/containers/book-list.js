import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { selectBook } from '../actions/index'; 

class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                onClick={() => this.props.selectBook(book)}
                className="list-group-item" 
                key={book.title}>{book.title}
                </li>
            )
        })
    }
    render() {
        return (
            <div>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // Whatever that is returned will be shown as props
    // of BookList component
    return {
        books: state.books
    };
}
// writing an action creator to create an action on selection of a book
function mapDispatchToProp(dispatch) {
    // whenever selectBook action creator is called, pass the action through
    // all the reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProp)(BookList);
