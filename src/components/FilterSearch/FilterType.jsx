export const FilterType = ({ onChange, selectedGenre }) => {
    const allGenres = [
      "sneakers",
      "trainers",
      "shoes",
      "Boots",
      "heels"
    ];
    return (
      <select name="G" id="genre" onChange={(e) => onChange(e.target.value)}>
        {selectedGenre === " " ? <option>Select Type</option> : null}
        {allGenres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
    );
  }
  
