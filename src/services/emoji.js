
let id = 0;

// export function addTodo(todos, title) {
//     const todo = { id: ++id, title, complete: false }
//     return [
//       ...todos,
//       todo
//     ]
//   }
  
//   export function removeTodo(todos, todo) {
//     const index = todos.indexOf(todo);
//     if (index === -1) return todos;
  
//     return [
//       ...todos.slice(0, index),
//       ...todos.slice(index + 1)
//     ]
//   }

export function create(emojis, title, description, url) {
  const newEmoji = { id: ++id, title, description, url };

  return [...emojis, newEmoji];
}