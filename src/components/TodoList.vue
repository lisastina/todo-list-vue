<template>
  <div class="todo-list">
    <h1>Things to do</h1>

    <div class="free-bee" v-if="(todos.length < 1)">
        <p>You have no work to do! You're a free bee!</p>
        <img :src="bee" alt="">
    </div>

    <Todo v-for="todo in todos" :key="todo.title" :todo="todo"/>
        
    <div class="button">
        <router-link to="/addTodo">
            <button class="add-todo">Add things to do</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo"
import bee from "../assets/free-bee.png"
export default {
    components: {
        Todo,
    },
    computed: {
        todos(){
            return this.$store.state.todos
        }
    },
    data(){
        return {
            bee: bee
        }
    }
}
</script>

<style scoped>
    .todo-list {
        background: white;
        width: 50%;
        margin: 2rem auto;
        padding: 2rem 4rem 4rem 4rem;
        border-radius: 1.5rem;
        box-shadow: burlywood 10px 10px 50px;
    }
    h1 {
        margin-bottom: 3rem;
        text-align: center;
    }
    .add-todo {
        margin: 1.5rem;
    }
    .button, .free-bee {
        text-align: center;
    }
</style>