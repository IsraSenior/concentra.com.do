<template>
    <section class="relative isolate overflow-hidden bg-white h-screen">
        <a href="#next"
            class="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex size-10 animate-bounce items-center justify-center rounded-full bg-transparent text-primary p-2 ring-1 ring-primary">
            <svg class="size-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="1" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </a>

        <svg class="absolute inset-0 -z-10 size-full stroke-primary-100 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true">
            <defs>
                <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
                    patternUnits="userSpaceOnUse">
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        </svg>

        <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-0 lg:flex lg:px-8 lg:pt-52">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
                <div class="mt-24 sm:mt-32 lg:mt-16">
                    <div class="inline-flex space-x-4">
                        <span v-motion-fadein-up-once :delay="200"
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-light text-primary ring-1 ring-primary-100 ring-inset">
                            IT Consulting
                        </span>
                        <span v-motion-fadein-up-once :delay="300"
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-light text-primary ring-1 ring-primary-100 ring-inset">
                            Software solutions
                        </span>
                        <span v-motion-fadein-up-once :delay="400"
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-light text-primary ring-1 ring-primary-100 ring-inset">
                            Traninig
                        </span>
                        <span v-motion-fadein-up-once :delay="500"
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-light text-primary ring-1 ring-primary-100 ring-inset">
                            Outsourcing
                        </span>
                        <span v-motion-fadein-up-once :delay="600"
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-light text-primary ring-1 ring-primary-100 ring-inset">
                            IT Support
                        </span>
                    </div>
                </div>
                <h1 class="mt-10 text-5xl font-semibold tracking-normal text-pretty text-secondary sm:text-5xl leading-tight"
                    v-motion-fadein-up-once :delay="700">Smart IT
                    Management, Simplified.</h1>
                <p class="mt-8 text-lg font-normal text-pretty text-gris-aluminio sm:text-xl/8" v-motion-fadein-up-once
                    :delay="800">Optimiza tus procesos y
                    potencia tu negocio con soluciones tecnológicas inteligentes. Descubre cómo podemos transformar tu
                    gestión IT hoy mismo.
                </p>
                <div class="mt-10 flex items-center gap-x-6">
                    <a href="#" v-motion-fadein-up-once :delay="900"
                        class="rounded-full bg-primary px-3.5 py-2.5 text-sm font-light text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">Conocer
                        más</a>
                    <a href="#" v-motion-fadein-up-once :delay="1000"
                        class="text-sm/6 font-light text-secondary hover:text-primary">Contáctanos <span
                            aria-hidden="true">→</span></a>
                </div>
            </div>
            <div
                class="relative mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
                <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                    <client-only>
                        <Vue3Lottie animationLink="/lottie-logo.json" height="auto" :width="640" v-motion="{
                            enter: {
                                opacity: 0,
                                scale: 0.9,
                            },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 2000
                                }
                            }
                        }" />
                    </client-only>
                </div>
            </div>
        </div>
        <span id="next"></span>
    </section>
</template>

<script setup>

</script>
