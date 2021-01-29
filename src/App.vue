<template>
  <div id="app">
      <Navbar/>
    <router-view/>
  </div>
</template>

<script> 
import Navbar from "@/components/Navbar"

export default {
  components: {
    Navbar,
  }
}
</script>


<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
  }
  body {
    background: beige;
  }
  a {
    color: white;
    text-decoration: none;
  }
  button {
    background-color: gold;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    color: white;
    padding: 0.5rem;
    font-size: 1rem;
    transition: 0.3s;
  }
  button:hover {
    background-color: rgb(255, 196, 0);
  }

</style>
