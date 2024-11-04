import React from "react";
import { Input } from "antd";
import './search-box.css';

const { Search } = Input;

const SearchBox = (props) => {
  return (
    <Search
      className="search-box"
      placeholder="Search monsters"
      value={props.searchField}
      onChange={(e) => props.onSearchChange(e?.target?.value)}
      enterButton
    />
  );
};

export default SearchBox;
