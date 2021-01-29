<template>
    <div class="todo">
            <div class="todo-wrapper">
                <label class="container">
                    <input type="checkbox">
                    <span class="checkmark" @click="checkTodo"></span>
                    {{todo.title}}
                </label>
                <button class="remove" @click="removeTodo"></button>
            </div>
            <div class="info-wrapper">
                <div class="buttons">
                    <button @click="moveUp()" v-if="(this.$store.state.todos.indexOf(this.todo) !== 0)" >⬆︎</button>
                    <button @click="moveDown()" v-if="(this.$store.state.todos.indexOf(this.todo) !== this.$store.state.todos.length-1)">⬇︎</button>
                </div>
                <div class="info">
                    <p class="desc">{{todo.desc}}</p>
                    <div class="date-author">
                        <p>{{todo.author}}</p>
                        <p>{{todo.time}}</p>
                    </div>
                </div>
            </div>
    </div>
</template>
// Array.prototype.splice
example1.items.splice(indexOfItem, 1, newValue)

<script>
export default {
    props: ['todo'],
    methods: {
        removeTodo() {
            this.$store.commit('removeTodo', this.todo)
        },
        checkTodo() {
            this.$store.commit('checkTodo', this.todo)
        },
        moveUp() {
            this.$store.commit('moveUp', this.$store.state.todos.indexOf(this.todo))
        },
        moveDown() {
            this.$store.commit('moveDown', this.$store.state.todos.indexOf(this.todo))
        }
    }
}
</script>

<style scoped>
    .todo {
        position: relative;
        margin-top: 1.2rem;
        padding: 0.2rem;
        border-bottom: solid 0.15rem beige;
    }
    .todo-wrapper{
        display: flex;
        justify-content: space-between;
    }
    .buttons {
        display: grid;
    }
    .buttons button {
        padding: 0.3rem;
        background-color: burlywood;
        max-height: 1.8rem;
    }
    .buttons button:hover {
        background-color: rgb(219, 163, 90);
    }
    .container {
        display: block;
        position: relative;
        padding-left: 3rem;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 1.2rem;
    }
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 1.5rem;
        width: 1.5rem;
        background-color: beige;
        border-radius: 0.3rem;
        transition: 0.2s;
    }
    .checkmark:hover {
        background-color: rgb(235, 228, 193);
    }
    .container input:checked ~ .checkmark {
        background-color: gold;
    }
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .container input:checked ~ .checkmark:after {
        display: block;
    }
    .container .checkmark:after {
        left: 0.5rem;
        top: 0.25rem;
        width: 0.3rem;
        height: 0.6rem;
        border: solid white;
        border-width: 0 0.2rem 0.2rem 0;
        transform: rotate(45deg);
    }
    .remove {
        cursor: pointer;
        position: absolute;
        right: 0.5rem;
        height: 1.6rem;
        width: 1.6rem;
        background-color:orangered;
        border-radius: 0.3rem;
        border: none;
    }
    .remove:before, .remove:after {
        position: absolute;
        top: 0.3rem;
        left: 0.65rem;
        content: ' ';
        height: 1rem;
        width: 0.2rem;
        background-color: #fff;
    }
    .remove:before {
        transform: rotate(45deg);
    }
    .remove:after {
        transform: rotate(-45deg);
    }
    .remove:hover {
        background-color:rgb(230, 46, 0);
    }
    .desc{
        max-width: 50%;
    }
    .date-author {
        text-align: right;
    }
    .info-wrapper {
        display: flex;
        margin-bottom: 0.5rem;
        justify-content: space-between;
    }
    .info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-left: 1.5rem;
    }
</style>
