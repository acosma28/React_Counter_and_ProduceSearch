import React, { Component } from 'react';
import { DropdownButton, Dropdown} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all", // Added a new key for tracking type
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Updated filterItem to consider both search and type
  filterItem = (item) => {
    const { search, type } = this.state;
    return (
      item.name.toLowerCase().includes(search) &&
      (type === "all" || item.type.toLowerCase() === type)
    );
  }

  // Added event handling method for dropdown item selection
  handleTypeSelect = (selectedType) => {
    this.setState({ type: selectedType });
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        
        <DropdownButton id="typeDropdown" title="Type"   onSelect={this.handleTypeSelect}>
          <Dropdown.Item eventKey="all">All</Dropdown.Item> <br></br>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item> <br></br>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
        </DropdownButton> 

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
