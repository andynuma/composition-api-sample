<template>
  <div @mousemove="updateMousePosition">
    <div>
      {{mousePosition.x}}
      {{mousePosition.y}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePosition } from './usePosition.ts'

export default defineComponent ({
  setup(){

    const { mousePosition, updateMousePosition } = usePosition()

    return {
      mousePosition,
      updateMousePosition
    }
  }
})
</script>

<style scoped></style>
