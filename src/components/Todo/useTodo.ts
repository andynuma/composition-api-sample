import { reactive, toRefs } from 'vue'


export const useTodo = () => {
  const state = reactive({
    todos :[
      {id: 1, text: "test"}
    ],
  })

  const addTodo = (content) => {
    state.todos.push({
      id: state.todos.length + 1,
      text: content
    })
  }

  const removeTodo = (id) => {
    const newTodos = state.todos.filter((todo) => todo.id !== id)
    state.todos = newTodos
  }

  return { ...toRefs(state), addTodo, removeTodo }
}