<template>
  <div class="about">
    <img src="https://i.postimg.cc/fLB8wVXt/wepik-photo-mode-2022715-143357.webp" alt="Image2" class="img2">
  </div>
  <h2 class="display-2">About</h2>
  <div>
  <p class="para2"> Platinum Meats Cooperation  aim to provide value, <br> supplying all our customers with the highest quality at the most reasonable price. <br>
<b>Quality</b> <br>
We take the utmost care to ensure that all our products meet your expectations. <br>
<b>Hygiene</b> <br>
Hygiene is one of our primary goals. We follow the highest food safety regulations. <br>
<b>Trust</b> <br>
We promise to deliver and always deliver on our promises.</p>
</div>
</template>

<style>
  .about {
  position: relative;
}

.img2 {
  width: 100%;
  height: 30vh;
  display: block;
  object-fit: cover;
}

.display-2 {
  position: absolute;
  top: 100px; 
  left: 90%;
  transform: translateX(-50%);
  color: white;
  font-size: 5em;
  background-color: rgba(0, 0, 0, 0.386);
  z-index: 1;
}

.para2 {
  text-align: center;
  margin-top: 10px; 
  font-size: 1.5em;

}

</style>
