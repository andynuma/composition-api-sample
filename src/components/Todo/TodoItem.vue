<template>
    <div>
      {{ todo.id }}
      {{ todo.text }}
      <button @click="removeTodo(todo.id)">x</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  props: {
    todo: {
      type: Object
    },
    removeTodo: {
      type: Function
    }
  }
})
</script>

<style scoped></style>
