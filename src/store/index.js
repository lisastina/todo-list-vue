import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {title: "Fly around", desc: "Fly around and look for pretty flowers.", author: "Beeata", time: "2020-01-26", checked: false},
      {title: "Collect nectar", desc: "Find the best nectar to use for the honey.", author: "Beeata", time: "2020-01-26", checked: false},
      {title: "Make honey", desc: "Produce delicious honey.", author: "Beeata", time: "2020-01-26", checked: false},
      {title: "Sleep", desc: "Take a nap to recover from all the work.", author: "Beeata", time: "2020-01-26", checked: false},
    ],
  },
  mutations: {
    removeTodo(state, todoItem) {
      state.todos = state.todos.filter(todo => todo !== todoItem)
    },
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo)
    },
    checkTodo(state, todoItem) {
      if(todoItem.checked){
        return todoItem.checked = false
      } 
      else if (!todoItem.checked) {
      state.todos = state.todos.filter(todo => todo !== todoItem)
      state.todos.push(todoItem)
      todoItem.checked = true
      }
    },
    moveUp(state, todoIndex){
      if(todoIndex > 0) {
        var todo = state.todos[todoIndex]
        state.todos.splice(todoIndex, 1)
        state.todos.splice(todoIndex - 1, 0, todo)
      }
    },
    moveDown(state, todoIndex){
      var todo = state.todos[todoIndex]
      state.todos.splice(todoIndex, 1)
      state.todos.splice(todoIndex + 1, 0, todo)
    }
  },
  actions: {
  },
  modules: {
  }
})
