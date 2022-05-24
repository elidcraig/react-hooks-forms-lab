import React from "react";


function ItemForm({name, category, onFormChange, onFormSubmit}) {
  return (
    <form className="NewItem" onSubmit={onFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={e => onFormChange(e.target.value, e.target.name)} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => onFormChange(e.target.value, e.target.name)} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
