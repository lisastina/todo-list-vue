<template>
  <div class="add-todo">
        <h1>Add todo</h1>
        <form>
            <div class="container">
                <label for="title">Title</label>
                <label for="desc">Description</label>
                <label for="author">Author</label>
                <label for="time">Date</label>
            </div>
            <div class="container">
                <input v-model="title" type="text" id="title" name="title" >
                <textarea v-model="desc" id="desc" rows="20"></textarea>
                <input v-model="author" type="text" id="author" name="author" >
                <input v-model="time" type="date" id="time" name="time" >
                <div class="buttons">
                    <button type="button" @click="onClear">Clear</button>
                    <router-link to="/"><button type="button" id="add" @click="onAdd($event)">Add</button></router-link>
                </div>
            </div>
        </form>

  </div>
</template>

<script>
export default {
    data() {
        return {
            title: null,
            desc: null,
            author: null,
            time: null,
            checked: false
        }
    },
    methods: {
        onClear(){
            this.title = null,
            this.desc = null,
            this.author = null,
            this.time = null
        },
        onAdd(event){
            if (this.title && this.desc && this.author && this.time){
               let newTodo = {
                    title: this.title,
                    desc: this.desc,
                    author: this.author,
                    time: this.time
                }
                this.$store.commit('addTodo', newTodo)

                this.title = null,
                this.desc = null,
                this.author = null,
                this.time = null 
            } else {
                event.preventDefault()

            }

            
        }
    }
}
</script>

<style scoped>
    .add-todo {
        background: white;
        width: 50%;
        margin: 2rem auto;
        padding: 2rem 4rem 4rem 4rem;
        border-radius: 1.5rem;
        box-shadow: rgba(218, 168, 42, 0.226) 10px 10px 50px;
    }
    form {
        display: grid;
        grid-template-columns: 30% 70%;
    }
    h1, .buttons{
        text-align: center;
    }
    .container {
        display: grid;
        grid-template-rows: 25% 25% 25% 25% ;
        align-items: top;
    }

    input[type=text] {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 0;
        margin-right: 0;
        border-radius: 0.2rem;
        padding: 0.8rem;
        font-size: 1rem;
    }
    label {
        padding: 1rem;
    }
    input {
        margin: 1rem;
        border: solid 0.15rem beige;
    }
    textarea {
        border: solid 0.15rem beige;
        border-radius: 0.2rem;
        height: 50px;
        padding: 0;
        resize: none;
        width: 100%;
        margin-top: 1rem;
    }
    #time {
        width: 100%;
        height: 2rem;
        margin: 0;
        border-radius: 0.2rem;
        margin-top: 1rem;
    }
    button {
        padding: 0.5rem;
        margin-right: 1rem;

    }
    button:hover {
        background-color: rgb(255, 196, 0);
    }
</style>