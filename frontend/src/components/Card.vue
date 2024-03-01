<template>
    <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
        <div class="card">
            <slot name="card"></slot>
        </div>
        <div class="cardIn">
            <slot name="cardIn"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComp'
    }
</script>
