import * as firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const config = {
  apiKey: "AIzaSyCWwQB4Lh5ZanFBPrnusT274Fj5ZcJ_2zk",
  authDomain: "kanban-realtime-8923c.firebaseapp.com",
  databaseURL: "https://kanban-realtime-8923c.firebaseio.com",
  projectId: "kanban-realtime-8923c"
}
const db = firebase.initializeApp(config).database()
var todosRef = db.ref('todos')

export const store = new Vuex.Store({
  state: {
    allTodos: []
  },
  mutations: {
    getAllTodos: function (state) {
      todosRef.on('value', snapshot => {
        console.log('data snapshoot', JSON.stringify(snapshot.val()));
        // state.allTodos = snapshot.val()
        console.log('data state', state.allTodos[0]);
        for (var prop in snapshot.val()) {
          state.allTodos.push(snapshot.val()[prop])
        }
      })
    }
  },
  actions: {
    addBacklog (store, context) {
      if (store.state.allTodos.length > 0) {
        console.log('length aray', store.state.allTodos);
        let idx = store.state.allTodos[store.state.allTodos.length - 1].id + 1
        db.ref(`todos/`).set({
          id: idx,
          task: context.task,
          des: context.des,
          assignTo: context.assignTo,
          point: context.point,
          status: context.status
        })
      } else {
        db.ref(`todos/`).set({
          id: 1,
          task: context.task,
          des: context.des,
          assignTo: context.assignTo,
          point: context.point,
          status: context.status
        })
      }
    },
    destroy (state, index) {
      db.ref(`todos/${index}`).remove()
    },
    backlog (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        des: context.des,
        assignTo: context.assignTo,
        point: context.point,
        status: 1
      })
    },
    sedangCoding (state, context) {
      db.ref(`todos/`).update({
        id: context.id,
        task: context.task,
        des: context.des,
        assignTo: context.assignTo,
        point: context.point,
        status: 2
      })
    },
    areaTesting (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        des: context.des,
        assignTo: context.assignTo,
        point: context.point,
        status: 3
      })
    },
    finallyDone (state, context) {
      db.ref(`todos/${context.id}`).set({
        id: context.id,
        task: context.task,
        des: context.des,
        assignTo: context.assignTo,
        point: context.point,
        status: 4
      })
    }
  },
  getters: {
    backlog (state) {
      return state.allTodos.filter(todo => {
        console.log('data backlog', todo);
        return todo.status === 1
      })
    },
    sedangCoding (state) {
      return state.allTodos.filter(todo => {
        return todo.status === 2
      })
    },
    areaTesting (state) {
      return state.allTodos.filter(todo => {
        return todo.status === 3
      })
    },
    finallyDone (state) {
      return state.allTodos.filter(todo => {
        return todo.status === 4
      })
    }
  }
})
