export function selectBook(book) {
    // this is an action creator, it returns an action,
    // an object with property type, and sometimes payload
    return {
        type : 'BOOK_SELECTED',
        payload : book
    }
}