<template>
    <section class=" bg-white py-24">
        <div class="container mx-auto px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
                <div class="md:col-span-3">
                    <p class="text-base/7 font-light text-primary tracking-wider uppercase" v-motion-fadein-up-once>
                        Nuestros aliados estratégicos
                    </p>
                    <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-secondary leading-tight sm:text-5xl"
                        v-motion-fadein-up-once :delay="300">
                        Lorem ipsum dolor sit amet.</h1>

                </div>
                <div class="md:col-span-2" v-motion-fadein-up-once>
                    <div>
                        <p class="mb-6 text-xl/8 text-balance text-gris-aluminio font-normal" v-motion-fadein-up-once>
                            Empresas que han puesto sus proyectos tecnológicos en nuestras manos.
                        </p>
                        <a href="#"
                            class="rounded-full bg-primary px-3.5 py-2.5 text-sm font-light text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">
                            Ver todos
                        </a>
                    </div>
                </div>
            </div>

            <SliderHomeLogos />
        </div>
    </section>
</template>

<script setup>
</script>
