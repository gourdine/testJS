// Storage
const StorageCtrl = ( () =>{


})();


const ItemCtrl = ( () => {
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  const data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  return{
    getItems: () => data.items,
    addItem: (name, calories) => {
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },
    getTotalCalories: () => {
      let total = 0;
      // loop thorugh items to add calories
      data.items.forEach( (item) => {
        total += item.calories;
      });
      // Set total calories
      data.totalCalories = total;
      //return total
      return data.totalCalories;
    },
    getItemById: (id) => {
      let found = null;
      // loop through items
      data.items.forEach((item) => {
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: (item) => {
      data.currentItem = item;
    },
    getCurrentItem: () => {
      return data.currentItem;
    },
    updateItem: (name, calories) => {
      // calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach((item) => {
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    logData: () => data
  }
})();


// UI
const UICtrl = (() => {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    listItems: '#items-list li', // grabs all <li> list items 
  }
  // Public Methods
  return{
    populateItemList: (items) => {
      let html = '';

      items.forEach((item) => {
        html += `<li class="collection-item" id="item-${item.id}"
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
        </li>`;
      });
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: () => ({
      name: document.querySelector(UISelectors.itemNameInput).value,
      calories: document.querySelector(UISelectors.itemCaloriesInput).value}),  
    getSelectors: () => UISelectors,
    addListItem: (item) => {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // create li element
      const li = document.createElement('li');
      li.className = 'collection-item';
      // add ID
      li.id = `item-${item.id}`;
      // add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    clearInput: () => {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: () => {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalries: (totalCalories) => {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: () => {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    addItemToForm: () => {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    showEditState: () => {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    updateListItem: (item) => {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // node list convert to array
      listItems = Array.from(listItems);

      listItems.forEach( (listItem) => {
        const itemID = listItem.getAttribute('id');

        if(itemID === `item${item.id}`){
          document.querySelector(`#item${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      })
    },
  }
})();


// App
const AppCtrl = ( (ItemCtrl, UICtrl) => {
  // Load event listeners
  const loadEventListeners = () => {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();
    // Add Item Event
    document.querySelector(UISelectors.addBtn).addEventListener
    ('click', itemAddSubmbit);
    // Disable submit on enter
    document.addEventListener('keypress', (e) => {
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    })
    // Edit icon click
    document.querySelector(UISelectors.itemList).addEventListener('click',itemEditSubmit);
    
    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);
  }

  // Add item submit
  const itemAddSubmbit = (e) => {
    // Get form input from UICtrl
    const input = UICtrl.getItemInput();
    // Check for name & calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add Item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to UI list
      UICtrl.addListItem(newItem);
      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total calories to UI
      UICtrl.showTotalCalries(totalCalories);

      // clear fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  }
  // Click edit item 
  const itemEditSubmit = (e) => {
    if(e.target.classList.contains('edit-item')){
      // get list item id
      const listId = e.target.parentNode.parentNode.id;
      //break into an array
      const listIdArr = listId.split('-');
      // get actually id
      const id = parseInt(listIdArr[1]);
      // get item
      const itemToEdit = ItemCtrl.getItemById(id);
      // set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      // add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }
  // Item Update Submit
  const itemUpdateSubmit = (e) => {
    // get item input
    const input = UICtrl.getItemInput();
    // update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    // Update UI
    UICtrl.updateListItem(updatedItem);
    e.preventDefault();
  }
  // Public Methods
  return {
    init: () => {
      //init state
      UICtrl.clearEditState();

      // Fetch items from data
      const items = ItemCtrl.getItems();
      // check if any items
      if(items.length === 0){
        UICtrl.hideList();
      }
      else{
        // Populate item list
        UICtrl.populateItemList(items);
      }

    // Get Total Calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories UI
    UICtrl.showTotalCalries(totalCalories);

      //Load Event Listeners
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl);

// inti App
AppCtrl.init();

