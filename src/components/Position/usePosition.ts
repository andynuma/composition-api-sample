import { reactive } from 'vue'

export const usePosition = () => {
  const mousePosition = reactive({
    x: 0,
    y: 0
  })

  const updateMousePosition = (event) => {
    mousePosition.x = event.clientX
    mousePosition.y = event.clientY
  }

  return { mousePosition , updateMousePosition}
}