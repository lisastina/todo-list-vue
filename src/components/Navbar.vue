<template>
  <div class="navbar">
    <div class="logo-container">
        <img :src="logo" alt="logo">
    </div>
    <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import logo from "../assets/bee-logo.png"
export default {
    data(){
        return {
            logo: logo
        }
    }
}
</script>

<style scoped>
    .navbar {
        background:gold;
        display: flex;
    }
    .navbar a {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: bold;
        padding: 0.8rem;
        transition: 0.4s;
    }
    .navbar a:hover {
        color:darkgoldenrod;
    }
    .links{
        margin-top: 2.4rem;
    }
    .logo-container {
        width: 8%;
        min-width: 120px;
    }
    .logo-container img {
        width: 100%;
    }
</style>