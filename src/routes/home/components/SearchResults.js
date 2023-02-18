import {
    memo,
    useEffect,
    useRef,
    useState,
  } from "react";
import { BOOKSAPI } from '../../../constants/index.js';
import { pluralize } from "../../../utils/getSingularOrPluralText.js";
import BookCard from "./BookCard.js";

const SearchResults = memo(props => {
    const { query } = props;
    const abortControllerRef = useRef(null);
    const [books, setBooks] = useState({});
   
    const searchBooks = async query => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      try{
        const response = await fetch(
          `${BOOKSAPI}?q=${query}`,
          {
            signal: abortControllerRef.current.signal,
          }
        );
        const data = await response.json();
        setBooks(data || {});
      } catch(e){
        console.log(e);
      }
    };
   
    useEffect(() => {
        if(query !== ''){
            searchBooks(query);
        }
      return () => {
        abortControllerRef.current?.abort();
      }
    }, [query]);

    
   
    let { items = [], totalItems } = books;

    if (totalItems === 0) {
      return <p>No matches for <i>"{query}"</i></p>;
    }
    return (
      <>
        {items.length > 0 && <p>Showing top <b>{pluralize(items.length,'result','results', true)}</b> for: <b>"{query}"</b></p>}
        <div className="books-list">
          {items.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </>
    )
  });

  export default SearchResults;