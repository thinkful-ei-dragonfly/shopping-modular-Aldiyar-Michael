
const store = (function () {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false },
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  let findById = function (id) {
    let item = store.items.find(item => item.id === id);
    return item;
  };
  let addItem = function (name) {
    try {
      Item.validateName(name);
      let newItem = Item.create(name);
      store.items.push(newItem);
    } catch(error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  };

  let findAndToggleChecked = function (id) {
    let toCheck = this.findById(item => item.id === id);
    toCheck.checked = !toCheck.checked;
  }

  let findAndUpdateName = function (id, newName) {
    try { 
      Item.validateName(name);
      let found = findByid(id);
      found.name = newName;
    } catch {
      console.log(`Cannot update name: ${error.message}`);
    }
  };

  let findAndDelete = function(id) {
    let index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  }

  let toggleCheckedFilter = function() {
    this.hideCheckedItems = !hideCheckedItems;
  }

  let setSearchTerm = function(term) {
    this.searchTerm = term;
  }
  


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
}());