import { useLocation } from "react-router-dom";
import './book.css'
import { pluralize } from "../../utils/getSingularOrPluralText";

const createMarkup = (markup) => ({__html: markup});

const Book = () => {
  const location = useLocation()
  const bookInfo = location?.state?.book?.volumeInfo || {};
  const {
      title = '',
      subtitle = '',
      imageLinks = '',
      description = '',
      authors = [],
      printedPageCount = '',
      publishedDate = '',
      publisher = ''
    } = bookInfo || {};

  return (
    <>
      <div className="page-container">
        {Object.keys(bookInfo).length === 0 ? 'Error while fetching book Details' :
        <div className="book-card">
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3> }
        {authors.length > 0 && <h4>{pluralize(authors.length, 'Author', 'Authors')} : {authors.join(', ')}</h4>}
        {printedPageCount && <h5>Total Pages : {printedPageCount}</h5>}
        {publishedDate && <h5>Published Date : {publishedDate}</h5>}
        {publisher && <h5>Publisher : {publisher}</h5>}
        <div className="book-card--body">
          <figure className="book-card--thumbnail">
            {imageLinks
              ? <img
                src={imageLinks.thumbnail}
                className="img-responsive"
                alt={title}
                />
              : null
            }
          </figure>
          <p className="book-card--description" dangerouslySetInnerHTML={createMarkup(description)} />
        </div>
      </div>}
      </div>
    </>
  )
}
export default Book;