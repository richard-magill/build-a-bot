<template>
  <header>
    <nav>
      <ul>
        <li class= "nav-item">
          <img class="logo" src = "./assets/build-a-bot-logo.png">
          Build-a-bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
};
</script>

<style>
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

body {
  background: linear-gradient(to bottom, #555, #999 );
  background-attachment: fixed;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
