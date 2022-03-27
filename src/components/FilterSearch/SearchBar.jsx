import { FilterType } from "./FilterType";
import "./SearchBar.css"

export const SearchBar = () => {
  return (
    <section>
      <div className="searchBar">
        {/* <div className="searchBarItem">
          <input
            type="search"
            placeholder="Search here..."
          />
        </div>
        <div className="searchBarItem">
          <FilterType
          />
        </div> */}
        <div className="searchBarItem">
          <span>Sort by </span>
          <select class="sorting">
            <option value="asc">Price: low to high</option>
            <option value="des">Price: high to low</option>
          </select>
        </div>
      </div>
    </section>
  );
}

