<template>
  <div @mousemove="updateMousePosition">
    <div>
      {{mousePosition.x}}
      {{mousePosition.y}}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      mousePosition: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    updateMousePosition(event) {
      this.mousePosition.x = event.clientX
      this.mousePosition.y = event.clientY
    },
  }
}
</script>

<style scoped>

</style>