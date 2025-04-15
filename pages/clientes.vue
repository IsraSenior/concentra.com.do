<template>
    <div>
        <div class="bg-primary-50 py-24 sm:py-32">
            <div class="mx-auto max-w-7xl">
                <div class="-mx-6 grid grid-cols-2 gap-1 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-5">
                    <div v-for="(client, index) in clients" class="bg-white" :key="index" v-motion-fadein-up-once
                        :delay="100">
                        <img class="max-h-32 w-full object-contain" :src="client" alt="Client Logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const clients = ref([
    "https://concentra.com.do/images/clientes/44.jpg",
    "https://concentra.com.do/images/clientes/45.jpg",
    "https://concentra.com.do/images/clientes/46.jpg",
    "https://concentra.com.do/images/clientes/39.jpg",
    "https://concentra.com.do/images/clientes/13.jpg",
    "https://concentra.com.do/images/clientes/22.jpg",
    "https://concentra.com.do/images/clientes/32.jpg",
    "https://concentra.com.do/images/clientes/21.jpg",
    "https://concentra.com.do/images/clientes/5.jpg",
    "https://concentra.com.do/images/clientes/9.jpg",
    "https://concentra.com.do/images/clientes/24.jpg",
    "https://concentra.com.do/images/clientes/3.jpg",
    "https://concentra.com.do/images/clientes/2.jpg",
    "https://concentra.com.do/images/clientes/6.jpg",
    "https://concentra.com.do/images/clientes/7.jpg",
    "https://concentra.com.do/images/clientes/8.jpg",
    "https://concentra.com.do/images/clientes/9.jpg",
    "https://concentra.com.do/images/clientes/10.jpg",
    "https://concentra.com.do/images/clientes/11.jpg",
    "https://concentra.com.do/images/clientes/12.jpg",
    "https://concentra.com.do/images/clientes/13.jpg",
    "https://concentra.com.do/images/clientes/14.jpg",
    "https://concentra.com.do/images/clientes/15.jpg",
    "https://concentra.com.do/images/clientes/16.jpg",
    "https://concentra.com.do/images/clientes/17.jpg",
    "https://concentra.com.do/images/clientes/18.jpg",
    "https://concentra.com.do/images/clientes/19.jpg",
    "https://concentra.com.do/images/clientes/20.jpg",
    "https://concentra.com.do/images/clientes/21.jpg",
    "https://concentra.com.do/images/clientes/22.jpg",
    "https://concentra.com.do/images/clientes/23.jpg",
    "https://concentra.com.do/images/clientes/24.jpg",
    "https://concentra.com.do/images/clientes/25.jpg",
    "https://concentra.com.do/images/clientes/26.jpg",
    "https://concentra.com.do/images/clientes/27.jpg",
    "https://concentra.com.do/images/clientes/28.jpg",
    "https://concentra.com.do/images/clientes/29.jpg",
    "https://concentra.com.do/images/clientes/30.jpg",
    "https://concentra.com.do/images/clientes/31.jpg",
    "https://concentra.com.do/images/clientes/32.jpg",
    "https://concentra.com.do/images/clientes/33.jpg",
    "https://concentra.com.do/images/clientes/34.jpg"
]);
</script>
