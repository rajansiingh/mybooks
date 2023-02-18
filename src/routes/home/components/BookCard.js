import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const {
    title,
    subtitle,
    imageLinks,
    description
  } = book.volumeInfo;

  const handleClick = () =>{
    navigate(`/book/${book.id}`, { replace: true, state: { book: book }})
  }
  return (
    <div className="book">
      {imageLinks
          ? <picture className="thumbnail">
          <img src={imageLinks.thumbnail} alt="Book"/>
      </picture> : null }
      <div className="card-content">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        {description && <p>{description}</p>}
      </div>
      <button onClick={handleClick} className="btn-book">View</button>
    </div>
  )
}

export default BookCard;