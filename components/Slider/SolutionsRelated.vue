<template>
    <Carousel v-bind="carouselConfig">
        <Slide v-for="(solution, index) in solutions" :key="index">
            <div class="carousel__item relative group">
                <div :class="[
                    'group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 bg-white group-hover:bg-primary-50',
                ]">
                    <div :class="[
                        'flex size-20 flex-none items-center justify-center rounded-lg bg-primary-50 group-hover:bg-white',
                    ]">
                        <img v-if="solution?.image" :src="solution.image" :alt="solution?.label"
                            class="size-16 object-contain object-center">
                    </div>
                    <div class="flex-auto">
                        <!-- <NuxtLink :to="`/soluciones/${solution.hash}`" class="block font-semibold text-secondary">
                            {{ solution?.label }}
                            <span class="absolute inset-0"></span>
                        </NuxtLink> -->
                        <p class="mt-1 text-gris-aluminio font-normal">{{ solution.intro }}</p>
                    </div>
                </div>
                <NuxtLink :to="`/soluciones/${solution.hash}`" class="absolute inset-0">
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
            itemsToShow: 4,
        }
    }
}

const solutions = ref([
    {
        label: "SOFTEXPERT",
        hash: "softexpert",
        featured: false,
        image: "https://www.softexpert.com/_next/image/?url=https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fsite-prd-strapi%2FMain_Logo_Core_Blue_Expert_Horizon_a8410a7641.png&w=384&q=75",
        intro: "Empresa líder de mercado en soluciones para la excelencia en la gestión."
    },
    {
        label: "SAYSAID",
        hash: "softexpert",
        featured: false,
        image: "https://cdn-ccchn.nitrocdn.com/eoxXytShChgscESECFYcqdYPaOaOGMwn/assets/images/source/rev-ebe85f2/cdn.sysaid.com/wp-content/uploads/logo-1.svg",
        intro: "Solución de gestión de service desk asequible para requisitos organizativos."
    },
    {
        label: "SOLARWINDS",
        hash: "softexpert",
        featured: false,
        image: "https://images.contentstack.io/v3/assets/blt28ff6c4a2cf43126/bltfed185f07ccab843/651f0a1c7bedef75ee94d61c/SW_Logo_Web_Orange.svg?auto=webp&disable=upscale&width=3840&quality=75",
        intro: "Software galardonado de gestión de almacenamiento, aplicaciones, servidores y redes."
    },
    {
        label: "VARONIS",
        hash: "softexpert",
        featured: false,
        image: "https://concentra.com.do/images/2018/02/13/varonis-logo.png",
        intro: "Ofrece un marco para actualizar el proceso de gobierno de datos."
    },
    {
        label: "CARBONITE",
        hash: "softexpert",
        featured: false,
        image: "https://prod-cms.carbonite.com/globalassets/site-images/nav/carbonite-by-opentext---logo---normal.svg",
        intro: "Ofrece todas las herramientas necesarias para proteger los datos."
    },
    {
        label: "OBSERVE IT",
        hash: "softexpert",
        featured: false,
        image: "https://concentra.com.do/images/2018/02/13/logo-oberve-it.png",
        intro: "Proveedor de soluciones líder de control y análisis de amenazas de infiltrados."
    },
    {
        label: "SHUFTI PRO",
        hash: "softexpert",
        featured: false,
        image: "https://concentra.com.do/images/2021/04/13/shufti20pro_edited.png",
        intro: "SaaS de verificación de identidad para eliminar riesgos, delitos financieros y robo de identidad."
    },
    {
        label: "SERVICESBOX",
        hash: "softexpert",
        featured: true,
        image: "https://concentra.com.do/images/2022/07/07/dia1.png",
        intro: "Solución tecnológica enfocada en trasformar digitalmente los servicios públicos de las instituciones gubernamentales."
    },
    {
        label: "CELONIS",
        hash: "softexpert",
        featured: false,
        image: "https://concentra.com.do/images/2022/10/26/celonis2.png",
        icon: "",
        intro: "Sistema de gestión de ejecución encuentra y corrige las ineficiencias ocultas rápidamente."
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
