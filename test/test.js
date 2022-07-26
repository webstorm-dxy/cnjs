import { creatApp } from 'vue'

creatApp({
  date() {
    return {
      count: 0
    }
  }
}).mount('#app')