import type { Ref } from 'vue'
export const inc = (counter: Ref<number>) => () => counter.value++
export const dec = (counter: Ref<number>) => () => {
  if(counter.value > 0) {
  counter.value--
  }
}
