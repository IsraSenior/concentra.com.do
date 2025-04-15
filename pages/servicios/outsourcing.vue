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
                            <p class="text-base/7 font-light text-primary tracking-wider uppercase"
                                v-motion-fadein-up-once>Outsourcing</p>

                            <h1 class="mt-8 text-4xl font-semibold tracking-tight text-pretty text-secondary leading-tight sm:text-5xl"
                                v-motion-fadein-up-once :delay="300">
                                Gestión TIC Eficiente con Outsourcing Integral
                            </h1>
                            <div class="mt-6 text-base/7 text-gris-aluminio font-normal space-y-6"
                                v-motion-fadein-up-once>
                                <p>
                                    Nuestro servicio de outsourcing integral ayudara a aumentar la eficiencia y la
                                    efectividad de sus servicios, a la vez esta orientado a la optimización y reducción
                                    de sus actuales costes en TIC, nuestras propuestas se adaptan a las necesidades de
                                    cada cliente desde la gestión compartida de cualquier servicio a la externalización
                                    total del departamento informático.
                                </p>

                                <div class="mt-12">
                                    <span class="isolate inline-flex rounded-md shadow-xs">
                                        <button type="button" v-for="(step, index) in steps" :key="index"
                                            @click="currentStep = index" :class="[
                                                'relative inline-flex items-center bg-white px-3 py-2 text-sm font-normal text-gray-900 ring-1 ring-primary-100 ring-inset hover:bg-gray-50 focus:z-10',
                                                {
                                                    'rounded-r-md': index === steps.length - 1,
                                                    'rounded-l-md': index === 0,
                                                    'bg-primary text-primary ring-2 ring-primary-100': currentStep === index,
                                                    'text-secondary': currentStep !== index,
                                                    'hover:bg-primary-50': currentStep !== index,
                                                    'focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-secondary':
                                                        currentStep !== index
                                                }]" v-motion-fadein-up-once :delay="index * 100" v-tooltip="{
                                                    content: step,
                                                    placement: 'top',
                                                    trigger: 'hover focus',
                                                    theme: 'dark',
                                                    delay: { show: 100, hide: 100 },
                                                    offset: [0, 8],
                                                    arrow: true,
                                                    arrowSize: 6,
                                                    arrowOffset: 8,
                                                    arrowColor: '#000000',
                                                    arrowClass: 'tooltip-arrow',
                                                    delay: { show: 100, hide: 100 },
                                                }
                                                    ">{{ step }}</button>
                                    </span>

                                </div>

                                <div class="space-y-6" v-if="currentStep === 0">
                                    <p>
                                        Le garantizamos el mejor recurso humano que le ayudara al logro de sus
                                        objetivos.
                                        Contamos con plataformas digitales de reclutamiento y convenios con una red de
                                        universidades para incorporación y entrenamientos a los estudiantes.
                                    </p>

                                    <p class="font-bold text-secondary mt-12">
                                        Red de universidades:
                                    </p>

                                    <ul role="list" class="space-y-3 text-gris-aluminio mt-4">
                                        <li class="grid grid-cols-3">
                                            <div class="flex gap-x-3" v-for="(item, index) in universidades"
                                                :key="index">
                                                <svg class="mt-1 size-5 flex-none text-verde-esmeralda"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                    data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>{{ item }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="space-y-6" v-if="currentStep === 1">
                                    <ul role="list" class="space-y-3 text-gris-aluminio mt-4">
                                        <li class="grid grid-cols-1">
                                            <div class="flex gap-x-3" v-for="(item, index) in seleccion" :key="index">
                                                <svg class="mt-1 size-5 flex-none text-verde-esmeralda"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                    data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>{{ item }}</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <p class="font-bold text-secondary mt-12">
                                        Para la Pre-selección solicitamos:
                                    </p>

                                    <ul role="list" class="space-y-3 text-gris-aluminio mt-4">
                                        <li class="grid grid-cols-1">
                                            <div class="flex gap-x-3" v-for="(item, index) in presolicitud"
                                                :key="index">
                                                <svg class="mt-1 size-5 flex-none text-verde-esmeralda"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                    data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>{{ item }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="space-y-6" v-if="currentStep === 2">
                                    <ul role="list" class="space-y-3 text-gris-aluminio mt-4">
                                        <li class="grid grid-cols-1">
                                            <div class="flex gap-x-3" v-for="(item, index) in inducción" :key="index">
                                                <svg class="mt-1 size-5 flex-none text-verde-esmeralda"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                    data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>{{ item }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="space-y-6" v-if="currentStep === 3">
                                    <ul role="list" class="space-y-3 text-gris-aluminio mt-4">
                                        <li class="grid grid-cols-1">
                                            <div class="flex gap-x-3" v-for="(item, index) in capacitacion"
                                                :key="index">
                                                <span class="flex-none text-verde-esmeralda font-normal">{{ index + 1
                                                    }}</span>
                                                <span>{{ item }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="space-y-6" v-if="currentStep === 4">
                                    <ul role="list" class="space-y-3 text-gris-aluminio mt-4">
                                        <li class="grid grid-cols-1">
                                            <div class="flex gap-x-3" v-for="(item, index) in evaluacion" :key="index">
                                                <svg class="mt-1 size-5 flex-none text-verde-esmeralda"
                                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                                    data-slot="icon">
                                                    <path fill-rule="evenodd"
                                                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>{{ item }}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="-mt-12 pb-16 px-5 lg:sticky lg:top-[144px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img class="w-full max-w-none rounded-xl bg-primary-50 shadow-xl ring-1 ring-primary-50"
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        alt="">

                    <!-- <iframe width="100%" height="450" v-motion-fadein-up-once
                        src="https://www.youtube.com/embed/QjtQiIq0Jdk?si=X5kV6GvABwE5vu0M" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                        class="rounded-xl bg-primary-50 shadow-xl ring-1 ring-primary-50"></iframe> -->

                    <div class="mt-6" v-motion-fadein-up-once :delay="900">
                        <div
                            class="relative isolate overflow-hidden bg-transparent px-6 py-12 text-center shadow-lg shadow-secondary/5 sm:rounded-3xl sm:px-16">
                            <h2 class="text-2xl font-semibold tracking-tight text-balance text-secondary sm:text-3xl">
                                Aumente su productividad hoy mismo</h2>
                            <div class="mt-10 flex items-center justify-center gap-x-6">
                                <NuxtLink to="/solicitudes/servicio"
                                    class="rounded-full bg-primary px-3.5 py-2.5 text-sm font-light text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">Solicita
                                    nuestro servicio</NuxtLink>
                                <a href="https://www.softexpert.com/" target="_blank" rel="noopener noreferrer"
                                    class="text-sm/6 font-light text-secondary hover:text-primary">Contáctanos
                                    <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
        <div class="relative overflow-hidden">
            <div class="mx-auto container px-5">
                <img class="mb-[-12%] w-full rounded-xl shadow-2xl ring-1 ring-primary/5"
                    src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png" alt="">
                <div class="relative" aria-hidden="true">
                    <div class="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]"></div>
                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <h6 class="mt-12 text-xl font-semibold tracking-tight text-pretty text-secondary leading-tight sm:text-2xl"
                v-motion-fadein-up-once>
                Otros servicios relacionadas
            </h6>
            <SliderServicesRelated class="pb-16" v-motion-fadein-up-once />
        </div>
    </div>
</template>

<script setup>
const currentStep = ref(0);
const steps = ref([
    'Reclutamiento',
    'Selección',
    'Inducción',
    'Capacitación',
    'Evaluación',
])

const universidades = ref([
    'ITLA',
    'INTEC',
    'UNAPEC',
    'UNIBE',
    'PUCMM',
    'UNPHU'
])
const seleccion = ref([
    "Análisis de los perfiles",
    "Análisis de los CV y verificación de cumplimiento a los perfiles",
    "Verificación de referencias y papel de no antecedentes penales",
    "Entrevistas personales",
    "Exámenes y evaluaciones técnicas",
])
const presolicitud = ref([
    "Papel de buena conducta ",
    "Exámenes medicos y Psicológicos (con acuerdo en SER SALUD)",
    "Cartas de recomendación",
])
const inducción = ref([
    "Firma de contrato como empleado",
    "Firma de contrato de cesion de derechos patrimoniales del autor",
    "Inscripción en la TSS",
    "Carta de ingreso y solicitud cuenta para nomina",
    "Protocolo para iniciación del recurso ante el cliente",
])
const capacitacion = ref([
    "Certified Software Developer Professional (CSDP) 228 horas",
    "Programacion avanzada en JAVA y PHP 100 horas",
    "Programacion avanzada en C#.NET y ASP.NET 80 horas",
    "Metodoligia agile/SCRUM 40 horas",
    "Software Quality Assurance (usando AGILE and CMMI: VER & VAL) 40 horas",
])
const evaluacion = ref([
    "Evaluación del desempeño",
    "Uso de la Metodología AGILE/SCRUM",
    "Uso de la Metodología AGILE/SCRUM",
])
</script>
