import "./SearchResultsList.css";
import { SearchResult } from "../SearchResult/SearchResult";

/* eslint-disable react/prop-types */
export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
