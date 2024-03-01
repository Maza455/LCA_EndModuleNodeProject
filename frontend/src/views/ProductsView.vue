<!-- <template>
    <div class="products">
     <img src="https://i.postimg.cc/fLB8wVXt/wepik-photo-mode-2022715-143357.webp" alt="Image2" class="img2">
  </div>
  <h2 class="display-2">Products</h2>
    <div class="product-container">
    
      <div class="product-card"><img src="https://i.postimg.cc/y8rtwcrG/Kameelhouf-Boerie-preview.jpg" alt="">
        <div class="buttons">
          <button @click="viewMore" href="./ProductDescriptionView.vue">View More</button>
          <button @click="purchase">Purchase</button>
    </div>
      </div>
      <div class="product-card"><img src="https://i.postimg.cc/bYH4hK4n/Deli-Beef-Short-Rib-preview.jpg" alt="">
        <div class="buttons">
          <button @click="viewMore" href="./ProductDescriptionView.vue">View More</button>
          <button @click="purchase">Purchase</button>
       </div>
    </div>
      <div class="product-card"><img src="https://i.postimg.cc/KzhsXNNQ/Deli-Roots-Wors-preview.jpg" alt="">
        <div class="buttons">
          <button @click="viewMore" scr="./ProductDescriptionView.vue">View More</button>
          <button @click="purchase">Purchase</button>
        </div>
      </div>
      <div class="product-card"><img src="https://i.postimg.cc/6p7HySbY/Whole-Chicken-preview.jpg" alt="">
        <div class="buttons">
          <button @click="viewMore" scr="./ProductDescriptionView.vue">View More</button>
          <button @click="purchase">Purchase</button>
       </div>
    </div>
      <div class="product-card"><img src="https://i.postimg.cc/QMJctJDf/Roots-Budget-Wors-preview.jpg" alt="">
        <div class="buttons">
          <button @click="viewMore" scr="./ProductDescriptionView.vue">View More</button>
          <button @click="purchase">Purchase</button>
     </div>
    </div>
      <div class="product-card"><img src="https://i.postimg.cc/t4HkD5Xz/Beef-Brisket-preview.jpg" alt="">
        <div class="buttons">
          <button @click="viewMore" scr="./ProductDescriptionView.vue">View More</button>
          <button @click="purchase">Purchase</button>
    </div>
      </div>
      
    </div>
</template> -->
<template>
    <div class="container">
        <div class="row p-2">
            <Card v-for="product in products" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template>
                <template #cardBody>
                    <p class="card-text">
                        Quantity: {{ product.prodQuantity }}
                    </p>
                </template>
            </Card>
        </div>
    </div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
    components: {
        Card
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    methods: {
        viewMore() {
            this.$router.push('./ProductDescriptionView.vue')

        },
        purchase() {

        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>

<style scoped>
.products {
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

.product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}

.product-card {
    width: calc(33.33% - 20px);
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
}

.product-card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-bottom: 10px;
}

.content {
    flex-grow: 1;
}

.product-info {
    margin-bottom: 40px;
}

button {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    margin-right: 10px;
    border-radius: 20px;
    cursor: pointer;
}

button:last-child {
    margin-right: 0;
}

button:hover {
    background-color: #0056b3;
}
</style>


