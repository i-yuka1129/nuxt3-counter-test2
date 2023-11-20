import type { Ref } from 'vue'
export const inc = (counter: Ref<number>) => () => counter.value++
export const dec = (counter: Ref<number>) => () => {
  if(counter.value > 0) {
  counter.value--
  }
}
export const reset = (counter: Ref<number>) => () => counter.value = 0

export const useCounterState = () => {
  const counter = ref(0)
  return {
    counter:readonly(counter),
    inc: inc(counter),
    dec: dec(counter),
    reset: reset(counter)
  }
}