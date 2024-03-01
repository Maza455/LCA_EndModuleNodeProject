<template>
    <div>
                <p class="lead">Platinum Meat .Co &copy; <span>{{ currYear }}</span></p>
            </div>
    <footer class="color-changing-footer py-3">
        <div class="container">
            <div class="row">
                <p class="lead">Platinum Meat .Co &copy; <span>{{ currYear }}</span></p>
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
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    font-size: 1em;
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