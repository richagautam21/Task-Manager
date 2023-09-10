import React from 'react';

const FilterTask = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">Filters</div>
      <div className="panel-body">
        <div className="list-group-item">
            <p>Status</p>
            <select
              id="PriSelector"
              className="form-control"
              onChange={(e) => props.onStatusFilterChange(e.target.value)}
              value={props.selectedPriority}
            >
              <option value="All" defaultValue={props.selectedPriority === "All"}>
                All
              </option>
              <option value="Pending" defaultValue={props.selectedPriority === "Pending"}>
               Pending
              </option>
              <option value="Completed" defaultValue={props.selectedPriority === "Completed"}>
                Completed
              </option>
            </select>
        </div>
        <div className="list-group-item">
          <p>Tasks Search</p>
          <input
            type="text"
            id="txtSearch"
            className="form-control"
            placeholder="Search"
            value={props.searchText}
            onChange={(e) => props.onSearchTextChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterTask;