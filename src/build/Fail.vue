<template>

      <div class = 'fail'>
          <img class="logo" src = '../assets/sad-bot.png'>
          <h1>Oh snap!</h1>
          <br>
          <h4>Something went wrong with your request, you better try again later</h4>
     </div>

</template>

<script>
export default { name: 'Fail' };
</script>

<style scoped>
 .fail {
   width: 800px;
   height:400px;
   margin: 10px;
   padding: 50px;
   text-align: center;
 }
 .logo {
    width: 100px;
   height: 100px;
   margin: 10px;
 }
</style>
