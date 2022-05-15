<template>

      <div class = "success">
          <img class="logo" src = "../assets/build-a-bot-logo.png">
          <h1>You Bought-a-bot!</h1>
          <br>
          <h4>Thanks for your purchase, we will send you an email with shipment details soon!</h4>
     </div>

</template>

<script>
export default { name: 'Success' };
</script>

<style scoped>
 .success {
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
