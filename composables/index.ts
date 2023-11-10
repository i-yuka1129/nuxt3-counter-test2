import type { Ref } from 'vue'
export const useCountState = () => {
  return useState<number>('counter', () => 0)
}

