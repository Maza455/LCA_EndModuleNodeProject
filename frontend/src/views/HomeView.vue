<template>
  <div class="HomePage">
     <img src="https://i.postimg.cc/zGHjZL8y/Successful-Butchery-01-1.webp" alt="HomePage" class="full-screen-image">
  </div>
  <div>
  <h1 class="display-1">Platinum Meats Co.</h1>
  <p class="para1">A good butchery is only <br> as great 
     as its supply chain.</p>
  </div>
 
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style>
 .HomePage {
  position: relative; 
}

.full-screen-image {
  width: 100vw; 
  height: 100vh; 
  object-fit: cover; 
  position: absolute; 
  top: 0;
  left: 0;
}

h1 {
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: xx-large; 
  text-align: center; 

}
.para1 {
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, 140%);
  color: white;
  background-color: rgba(27, 26, 26, 0.533);
  font-size: xx-large; 
  text-align: end; 
}
.display-1{
  position: absolute;
  color: white;
  background-color:rgba(27, 26, 26, 0.533);
}

</style>
