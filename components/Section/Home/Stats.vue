<template>
    <div class="bg-primary-50">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="max-w-4xl">
                <p class="text-base/7 font-light text-primary tracking-wider uppercase" v-motion-fadein-up-once>Nuestros
                    números</p>
                <h2 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-secondary leading-tight sm:text-5xl"
                    v-motion-fadein-up-once :delay="300">
                    Lorem ipsum dolor sit amet.</h2>
            </div>
            <div class="mx-auto mt-0 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-end">
                <div v-motion-fadein-up-once
                    class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                    <p class="flex-none text-3xl font-semibold tracking-tight text-white">Más de 2 décadas de gestión
                    </p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                        <p class="text-lg font-semibold tracking-tight text-white">Lorem ipsum dolor sit.</p>
                        <p class="mt-2 text-base/7 text-white">Eu duis porta aliquam ornare. Elementum eget magna
                            egestas. Eu duis porta aliquam ornare.</p>
                    </div>
                </div>
                <div v-motion-fadein-up-once
                    class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-verde-esmeralda p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                    <p class="flex-none text-3xl font-semibold tracking-tight text-white">+75 Clientes satisfechos</p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                        <p class="text-lg font-semibold tracking-tight text-white">Lorem ipsum dolor sit.</p>
                        <p class="mt-2 text-base/7 text-white">Eu duis porta aliquam ornare. Elementum eget magna
                            egestas. Eu duis porta aliquam ornare.</p>
                    </div>
                </div>

                <div v-motion-fadein-up-once
                    class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                    <p class="flex-none text-3xl font-semibold tracking-tight text-white">+200 Proyectos exitosos</p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                        <p class="text-lg font-semibold tracking-tight text-white">Lorem ipsum dolor sit.</p>
                        <p class="mt-2 text-base/7 text-white">Eu duis porta aliquam ornare. Elementum eget magna
                            egestas. Eu duis porta aliquam ornare.</p>
                    </div>
                </div>

                <div v-motion-fadein-up-once
                    class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-azul-cobalto p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                    <p class="flex-none text-3xl font-semibold tracking-tight text-white">+5,6k Profesionales
                        capacitados
                    </p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                        <p class="text-lg font-semibold tracking-tight text-white">Lorem ipsum dolor sit.</p>
                        <p class="mt-2 text-base/7 text-white">Eu duis porta aliquam ornare. Elementum eget magna
                            egestas. Eu duis porta aliquam ornare.</p>
                    </div>
                </div>



            </div>
        </div>
    </div>

</template>

<script setup>
</script>
