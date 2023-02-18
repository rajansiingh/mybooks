import {useState, useDeferredValue, Suspense} from 'react'
import SearchResults from './components/SearchResults'
// import {debounce} from '../../utils/debounce'
import './home.css'


const Home = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <>
      <label>
        Search Books:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale ? 'opacity 0.2s 0.2s linear' : 'opacity 0s 0s linear'
          }}>
              {deferredQuery !== '' && <SearchResults query={deferredQuery} /> }
          </div>
      </Suspense>
    </>
  );
}
export default Home;