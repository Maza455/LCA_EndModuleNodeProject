<template>
    <footer class="color-changing-footer py-3">
        <div class="container">
            <div class="row">
                <p class="lead">Platinum Meat .Co &copy; <span>{{ currYear }}</span></p>
                <div>:star::star::star:</div>
            </div>
        </div>
    </footer>
    </template>
    <script>
    export default {
        name: 'FooterComp',
        data() {
            return {
                currYear: new Date().getFullYear()
            }
        }
    }
    </script>
    <style scoped>

.color-changing-footer {
  position: fixed; 
  bottom: 0; 
  width: 100%; 
  height: 90px;
  animation: colorChange 5s infinite;
  background-color: black; 
  color: white; 
  font-size: 1.2em;
  font-weight: bold;
}
    .color-changing-footer {
        animation: colorChange 5s infinite;
    }
    @keyframes colorChange {
        0% {
            background-color: black;
        }
        50% {
            background-color: grey;
        }
        100% {
            background-color: rgb(1, 14, 1);
        }
    }
    .color-changing-footer p {
        color: white;
        font-size: 2em;
        font-weight: bold;
    }
    </style>