<template>
    <div>
        <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div class="absolute inset-0 -z-10 overflow-hidden">
                <svg class="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
                    aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1"
                            patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0"
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div
                    class="lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                    <div class="lg:pr-4">
                        <div class="">
                            <!-- <p class="text-base/7 font-light text-primary tracking-wider uppercase"
                                v-motion-fadein-up-once>SOFTEXPERT</p> -->

                            <img src="https://www.softexpert.com/_next/image/?url=https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fsite-prd-strapi%2FMain_Logo_Core_Blue_Expert_Horizon_a8410a7641.png&w=384&q=75"
                                class="h-12 w-auto" v-motion-fadein-up-once alt="">

                            <h1 class="mt-8 text-4xl font-semibold tracking-tight text-pretty text-secondary leading-tight sm:text-5xl"
                                v-motion-fadein-up-once :delay="300">
                                Gestión Integrada para la Excelencia Empresarial
                            </h1>
                            <div class="mt-6 text-base/7 text-gris-aluminio font-normal space-y-6"
                                v-motion-fadein-up-once>
                                <p>
                                    SoftExpert
                                    Suite es una plataforma modular y escalable diseñada
                                    SoftExpert Suite es una plataforma modular y escalable diseñada para mejorar la
                                    eficiencia, el cumplimiento y la gestión empresarial. Su arquitectura permite a las
                                    organizaciones integrar múltiples áreas de negocio en un solo ecosistema digital,
                                    optimizando la calidad, los riesgos, el desempeño y la gestión de procesos. Es ideal
                                    para empresas que buscan cumplir normativas internacionales como ISO 9001, ISO
                                    27001,
                                    ITIL y BPMN.
                                </p>
                                <p>
                                    Con módulos específicos para gestión de documentos, auditorías, activos, riesgos,
                                    desempeño corporativo y Business Process Management (BPM), SoftExpert Suite
                                    proporciona
                                    una solución integral que permite a las empresas automatizar procesos, <b>reducir
                                        costos
                                        operativos y mejorar la toma de decisiones estratégicas con análisis en tiempo
                                        real.</b>
                                </p>

                                <h6
                                    class="mt-12 text-xl font-semibold tracking-tight text-pretty text-secondary leading-tight sm:text-2xl">
                                    Beneficios de la implementación de SoftExpert Suite
                                </h6>

                                <ul role="list" class="space-y-3 text-gris-aluminio">
                                    <li class="flex gap-x-3">
                                        <svg class="mt-1 size-5 flex-none text-verde-esmeralda" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd"
                                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>Centraliza la gestión de procesos, calidad y riesgos en una única
                                            plataforma.</span>
                                    </li>
                                    <li class="flex gap-x-3" v-for="(benefit, index) in benefits" :key="index">
                                        <svg class="mt-1 size-5 flex-none text-verde-esmeralda" viewBox="0 0 20 20"
                                            fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd"
                                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>{{ benefit }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="-mt-12 pb-16 px-5 lg:sticky lg:top-[144px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <!-- <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        alt=""> -->

                    <iframe width="100%" height="450" v-motion-fadein-up-once
                        src="https://www.youtube.com/embed/QjtQiIq0Jdk?si=X5kV6GvABwE5vu0M" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                        class="rounded-xl bg-primary-50 shadow-xl ring-1 ring-primary-50"></iframe>

                    <div class="mt-6" v-motion-fadein-up-once :delay="900">
                        <div
                            class="relative isolate overflow-hidden bg-transparent px-6 py-12 text-center shadow-lg shadow-secondary/5 sm:rounded-3xl sm:px-16">
                            <h2 class="text-3xl font-semibold tracking-tight text-balance text-secondary sm:text-4xl">
                                Boost your productivity today</h2>
                            <div class="mt-10 flex items-center justify-center gap-x-6">
                                <button
                                    class="rounded-full bg-primary px-3.5 py-2.5 text-sm font-light text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">Solicita
                                    un demo</button>
                                <a href="https://www.softexpert.com/" target="_blank" rel="noopener noreferrer"
                                    class="text-sm/6 font-light text-secondary hover:text-primary">Conoce más
                                    <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const benefits = ref([
    "Centraliza la gestión de procesos, calidad y riesgos en una única plataforma.",
    "Cumple con normativas internacionales y estándares de calidad.",
    "Permite la automatización de flujos de trabajo para mayor eficiencia.",
    "Ofrece análisis en tiempo real para mejorar la toma de decisiones.",
    "Escalable y adaptable a las necesidades específicas de cada empresa."
])
</script>
