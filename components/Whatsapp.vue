<template>
    <div class="fixed bottom-10 right-10 w-16 h-16" v-motion="{
        initial: {
            opacity: 0,
            scale: 0.2,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1000,
                delay: 2000
            }
        }
    }">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="">
        </a>
    </div>
</template>

<script setup>

</script>
