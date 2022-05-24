import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState('')
  const [formData, setFormData] = useState({name: '', category: 'Produce'})
  const [itemsList, setItemsList] = useState(items)
  
  function handleFormChange(newData, input) {
    setFormData({...formData, [input]: newData})
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    const newItem = {...formData, id: uuid()}
    setItemsList([...itemsList, newItem])
    e.target.reset()
  }

  function handleSearchInput(newSearch) {
    setSearchInput(newSearch)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })

  const itemsFilteredBySearch = itemsToDisplay.filter(item =>{
    const itemLowerCase = item.name.toLowerCase()
    return itemLowerCase.includes(searchInput.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm name={formData.name} category={formData.category} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
      <Filter onSearchInput={handleSearchInput} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsFilteredBySearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
