import { FilterType } from "./FilterType";
import "./SearchBar.css"


export const SearchBar = () => {
  return (
    <section>
      <div className="searchBar">
        <div className="searchBarItem">
          <input
            type="search"
            placeholder="Search here..."
          />
        </div>
        <div className="navBarItem">
          <FilterType
          />
        </div>
        <div className="navBarItem">
          <select>
            <option value="asc">Price: low to high</option>
            <option value="des">Price: high to low</option>
          </select>
        </div>
        <div className="navBarItem">
          <select>
            <option value="asc">Year: low to high</option>
            <option value="des">Year: high to low</option>
          </select>
        </div>
      </div>
    </section>
  );
}

