import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

export default function SearchResults() {
  const router = useRouter();
  const searchResults = JSON.parse(router.query.searchResults || '[]');

  return (
    <div>
      <SearchResultsPage searchResults={searchResults} />
    </div>
  );
}