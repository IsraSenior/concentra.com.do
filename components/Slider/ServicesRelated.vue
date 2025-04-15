<template>
    <Carousel v-bind="carouselConfig">
        <Slide v-for="(service, index) in services" :key="index">
            <div class="carousel__item relative group">
                <div :class="[
                    'group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 bg-white group-hover:bg-primary-50',
                ]">
                    <div :class="[
                        'flex size-20 flex-none items-center justify-center rounded-lg bg-primary-50 group-hover:bg-white',
                    ]">
                        <svg v-if="service?.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                            data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                    </div>
                    <div class="flex-auto">
                        <NuxtLink :to="`/soluciones/${service.hash}`" class="block font-semibold text-secondary">
                            {{ service?.label }}
                            <span class="absolute inset-0"></span>
                        </NuxtLink>
                        <p class="mt-1 text-gris-aluminio font-normal">{{ service.intro }}</p>
                    </div>
                </div>
                <NuxtLink :to="`/servicios/${service.hash}`" class="absolute inset-0">
                    <span class="absolute inset-0"></span>
                </NuxtLink>
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
            itemsToShow: 3,
        }
    }
}

const services = ref([
    {
        label: "Outsoursing",
        hash: "/outsourcing",
        featured: false,
        icon: true,
        intro: "Aumentar la eficiencia y la efectividad de tus servicios."
    },
    {
        label: "Soporte técnico",
        hash: "/soporte-tecnico",
        featured: false,
        icon: true,
        intro: "Profesionales técnicos especializados en HW y SW con una elevada preparación y experiencia."
    },
    {
        label: "Software factory",
        hash: "/software-factory",
        featured: false,
        icon: true,
        intro: "Desarrollo de productos o en proyectos para la obtención de aplicaciones a medida de las necesidades de nuestros clientes."
    },
])
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
