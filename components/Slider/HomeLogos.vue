<template>
    <Carousel class="mt-12" v-bind="carouselConfig">
        <Slide v-for="(logo, index) in logos" :key="index">
            <div class="carousel__item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img class="w-full object-contain" v-motion-fadein-up-once :delay="200" :src="logo" alt="Logo name">
                </a>
            </div>
        </Slide>

        <template #addons>
            <!-- <Navigation /> -->
            <!-- <Pagination /> -->
        </template>
    </Carousel>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const carouselConfig = {
    autoplay: 2000,
    itemsToShow: 2,
    wrapAround: true,
    snapAlign: 'start',
    // gap: '2rem',
    pauseAutoplayOnHover: true,
    breakpoints: {
        640: {
            itemsToShow: 3,
        },
        1024: {
            itemsToShow: 6,
        }
    }
}

const logos = [
    'https://concentra.com.do/images/mepyd.jpg',
    'https://concentra.com.do/images/clientes/36.jpg',
    'https://concentra.com.do/images/clientes/46.jpg',
    'https://concentra.com.do/images/clientes/21.jpg',
    'https://concentra.com.do/images/clientes/5.jpg'
]
</script>

<style>
.carousel__pagination li {
    margin: 0 4px;
}

.carousel__pagination li button {
    background-color: var(--color-primary);
    border-radius: 50%;
    width: 10px;
    height: 10px;

}

.carousel__pagination li button:hover,
.carousel__pagination-button--active {
    background-color: var(--color-secondary);
}
</style>
