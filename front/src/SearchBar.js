import React from "react";

class SearchBar extends React.Component {

  handleChangeTextField = (e) =>{
      this.props.handleFilterTextChange(e.target.value);
  };

  render(){
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.searchFilterValue}
          onChange={this.handleChangeTextField}
        />
      </form>
    );
  };

};

export default SearchBar;