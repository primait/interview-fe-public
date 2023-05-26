import { SearchIcon } from "./Icons";

export function PolicySearch() {
  return (
    <div className="search">
      <label>Search policies</label>
      <div className="search__input">
        <div className="search__input__icon">
          <SearchIcon />
        </div>
        <input id="search-input-unique-id" placeholder="e.g. AB12 CDE" />
      </div>
    </div>
  );
}
