import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

export default function Results() {
  const router = useRouter();
  const searchResultsNew = JSON.parse(router.query.searchResults || '[]');

  return (
    <div>
      <SearchResults searchResults={searchResultsNew} />
    </div>
  );
}