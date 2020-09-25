<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="content" />
    </form>
    <div v-for="todo in todos"  v-bind:key="todo.id" >
      <TodoItem :todo="todo" :removeTodo="removeTodo"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useTodo } from './useTodo.ts'
import TodoItem from './TodoItem.vue'

export default defineComponent ({
  components: {
    TodoItem
  },
  setup(){

    const state = reactive({
      content: ''
    })

    const { todos, addTodo, removeTodo } = useTodo()

    const handleSubmit = () => {
      addTodo(state.content)
      state.content = ''
    }

    return {
      ...toRefs(state),
      todos,
      removeTodo,
      handleSubmit
    }
  }
})
</script>

<style scoped></style>
