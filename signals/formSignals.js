var utilsAction = require('../actions/utilsAction');
var todoAction = require('../actions/todoAction');
var filtersAction = require('../actions/filtersAction');

exports.newTodoInput = [
  utilsAction.setInputValue
];

exports.addNewTodo = [
  todoAction.validateNewTodo, {
    success: [
      todoAction.addNewTodo,
      todoAction.clearForm,
      todoAction.setSyncFlag,
      [
        todoAction.syncTodoInStorage, {
          success: [ todoAction.removeSyncFlag ]
        }
      ]
    ],
    error: []
  }
];

exports.removeTodo = [
  todoAction.removeTodo,
  todoAction.setSyncFlag,
  [
    todoAction.syncTodoInStorage, {
      success: [ todoAction.removeSyncFlag ]
    }
  ]
];

exports.toggleAllCompleted = [
  todoAction.toggleAllCompletedTodo,
  todoAction.setSyncFlag,
  [
    todoAction.syncTodoInStorage, {
      success: [ todoAction.removeSyncFlag ]
    }
  ]
];

exports.removeCompleted = [
  todoAction.removeCompletedTodo,
  todoAction.setSyncFlag,
  [
    todoAction.syncTodoInStorage, {
      success: [ todoAction.removeSyncFlag ]
    }
  ]
];

exports.setActiveFilter = [
  filtersAction.setActiveFilter
];
