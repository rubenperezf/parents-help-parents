import React from "react";

function FamilyFilter({...props}) {
    const [filter, setFilter] = React.useState('');
    const [click, setClick] = React.useState(false);
    const handleChange = e => {
        setFilter(e.target.value);
        setClick(false)
        props.parentCallback(e.target.value)

      };
  return (
    <div className="family-filter-container">
      <div className="family-filter">
        <h1>Filter Families</h1>
        {/* <div className="filter-age">
          <div className="filter-text">
            <label htmlFor="filter-families-age">Number of kids:</label>
          </div>
          <div className="filter-options">
            <select onChange={handleChange} id="filter-families-age">
              <option> </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5 or more</option>
            </select>
          </div>
        </div> */}
        <div className="filter-location">
          <div className="filter-text">
            <label htmlFor="filter-families-location">Location:</label>
          </div>
          <div className="filter-options">
            <select id="filter-families-location" onChange={handleChange}>
              <option>All</option>
              <option>Mt. Pleasant</option>
              <option>James Island</option>
              <option>Downtown</option>
              <option>North Charleston</option>
              <option>Island of Palms</option>
              <option>Folly Beach</option>
              <option>Edisto Island</option>
              <option>Goose Creek</option>
              <option>Kiawah Island</option>
              <option>Sullivans Island</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyFilter;
