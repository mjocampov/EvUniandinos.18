import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  };

  handleFilterTextChange = (e) => {
    //this.props.onFilterTextChange(e.target.value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

export default SearchBar;