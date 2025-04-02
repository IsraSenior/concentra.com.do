<template>
    <div class="bg-white py-24 px-4">
        <div class="bg-primary-50 py-14 rounded-4xl">
            <div class="mx-auto max-w-2xl lg:max-w-7xl text-center">
                <h2 class="text-base/7 font-light text-primary tracking-wider uppercase" v-motion-fadein-up-once>
                    Soluciones inteligentes
                </h2>
                <p v-motion-fadein-up-once
                    class="mt-2 max-w-xl mx-auto text-4xl font-semibold tracking-tight text-pretty text-secondary sm:text-5xl leading-tight">
                    Transforma tu gestión con nuestros productos</p>

                <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2 text-left">
                    <div class="relative lg:col-span-3" v-motion="{
                        enter: {
                            opacity: 0,
                            scale: 0.9,
                            left: -100,
                            y: -100,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            left: 0,
                            y: 0,
                            transition: {
                                duration: 1000
                            }
                        }
                    }">
                        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                        </div>

                        <div
                            class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                            <img class="h-80 object-cover object-left"
                                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
                                alt="">
                            <div class="p-10 pt-4">
                                <h3 class="text-sm/4 font-light uppercase text-primary">Rendimiento</h3>
                                <p class="mt-2 text-lg font-semibold leading-relaxed tracking-tight text-secondary">
                                    Optimización
                                    empresarial
                                </p>
                                <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio font-normal">Mayor eficiencia
                                    operativa
                                    con
                                    estrategias digitales inteligentes</p>
                            </div>
                        </div>
                        <div
                            class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-primary-100 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                        </div>
                    </div>

                    <div class="relative lg:col-span-3" v-motion="{
                        enter: {
                            opacity: 0,
                            scale: 0.9,
                            right: -100,
                            y: -100,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            right: 0,
                            y: 0,
                            transition: {
                                duration: 1000
                            }
                        }
                    }">
                        <div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]"></div>
                        <div
                            class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                            <img class="h-80 object-cover object-left lg:object-right"
                                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
                                alt="">
                            <div class="p-10 pt-4">
                                <h3 class="text-sm/4 font-light uppercase text-primary">Software de alto impacto</h3>
                                <p class="mt-2 text-lg font-semibold leading-relaxed tracking-tight text-secondary">
                                    Encriptación y seguridad
                                </p>
                                <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio font-normal">
                                    Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet
                                    dapibus
                                    ex elit vitae odio.
                                </p>
                            </div>
                        </div>
                        <div
                            class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-primary-100 lg:rounded-tr-[2rem]">
                        </div>
                    </div>

                    <div class="relative lg:col-span-2" v-motion="{
                        enter: {
                            opacity: 0,
                            scale: 0.9,
                            left: -100,
                            y: 100,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            left: 0,
                            y: 0,
                            transition: {
                                duration: 1000
                            }
                        }
                    }">
                        <div class="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]"></div>
                        <div
                            class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                            <img class="h-80 object-cover object-left"
                                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                                alt="">
                            <div class="p-10 pt-4">
                                <h3 class="text-sm/4 font-light uppercase text-primary">99.7% de optimización</h3>
                                <p class="mt-2 text-lg font-semibold leading-relaxed tracking-tight text-secondary">
                                    Estrategia corporativa
                                </p>
                                <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio font-normal">Planificación basada
                                    en
                                    datos
                                    para
                                    maximizar rentabilidad</p>
                            </div>
                        </div>
                        <div
                            class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-primary-100 lg:rounded-bl-[2rem]">
                        </div>
                    </div>

                    <div class="relative lg:col-span-2" v-motion="{
                        enter: {
                            opacity: 0,
                            scale: 0.9,
                            y: 100,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            transition: {
                                duration: 1000
                            }
                        }
                    }">
                        <div class="absolute inset-px rounded-lg bg-white"></div>
                        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <img class="h-80 object-cover"
                                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                                alt="">
                            <div class="p-10 pt-4">
                                <h3 class="text-sm/4 font-light uppercase text-primary">Vanguardia</h3>
                                <p class="mt-2 text-lg font-semibold leading-relaxed tracking-tight text-secondary">
                                    Software factory
                                </p>
                                <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio font-normal">
                                    Expertos en el uso de metodologías y herramientas de desarrollo.
                                </p>
                            </div>
                        </div>
                        <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-primary-100">
                        </div>
                    </div>

                    <div class="relative lg:col-span-2" v-motion="{
                        enter: {
                            opacity: 0,
                            scale: 0.9,
                            right: -100,
                            y: 100,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            right: 0,
                            y: 0,
                            transition: {
                                duration: 1000
                            }
                        }
                    }">
                        <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                        </div>
                        <div
                            class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                            <img class="h-80 object-cover"
                                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                                alt="">
                            <div class="p-10 pt-4">
                                <h3 class="text-sm/4 font-light uppercase text-primary">Evolucioón</h3>
                                <p class="mt-2 text-lg font-semibold leading-relaxed tracking-tight text-secondary">
                                    Gestión de TIC
                                </p>
                                <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio font-normal">
                                    Implementación de frameworks para un gobierno tecnológico inteligente.
                                </p>
                            </div>
                        </div>
                        <div
                            class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-primary-100 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
