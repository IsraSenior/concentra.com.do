<template>
    <div class="relative isolate bg-white">
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
                <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                    <div
                        class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-primary-50 ring-1 ring-primary-100 lg:w-1/2">
                        <svg class="absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-primary-100"
                            aria-hidden="true">
                            <defs>
                                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%"
                                    y="-1" patternUnits="userSpaceOnUse">
                                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" stroke-width="0" fill="white" />
                            <svg x="100%" y="-1" class="overflow-visible fill-primary-50">
                                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                            </svg>
                            <rect width="100%" height="100%" stroke-width="0"
                                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                        </svg>
                    </div>

                    <img :src="solutions[currentSolutionIndex].image"
                        class="h-12 w-auto" v-motion-fadein-up-once alt="">

                    <!-- <h2 class="text-4xl font-semibold tracking-tight text-pretty text-secondary sm:text-5xl"
                        v-motion-fadein-up-once>Familia
                        ConCentra
                    </h2> -->
                    <p class="mt-6 text-lg/8 text-gris-aluminio" v-motion-fadein-up-once>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur hic debitis ratione.
                        Vel voluptatem illo nulla distinctio corporis explicabo consectetur veniam delectus
                        voluptatibus. Esse impedit harum odit.
                    </p>
                    <p class="mt-6 text-lg/8 text-gris-aluminio" v-motion-fadein-up-once>
                        Facilis dolores, labore vero laboriosam aliquid, vel
                        iure, ipsum saepe officiis voluptatem explicabo minima est? Qui, corrupti?
                    </p>
                    <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
                        <div class="flex gap-x-4" v-motion-fadein-up-once>
                            <dt class="flex-none">
                                <span class="sr-only">Descarga de brochure</span>
                                <svg class="h-7 w-6 text-gris-aluminio" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                    stroke="currentColor" aria-hidden="true" data-slot="icon">

                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />

                                </svg>
                            </dt>
                            <dd>
                                <a href="https://www.softexpert.com/" target="_blank" rel="noopener noreferrer"
                                    class="text-sm/6 font-light text-secondary hover:text-primary">Descarga el brochure
                                    <span aria-hidden="true">→</span></a>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <form action="#" method="POST" class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
                <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm/6 font-semibold text-secondary">Nombres</label>
                            <div class="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary">
                            </div>
                        </div>
                        <div>
                            <label for="last-name"
                                class="block text-sm/6 font-semibold text-secondary">Apellidos</label>
                            <div class="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary">
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm/6 font-semibold text-secondary">Correo
                                Electrónico</label>
                            <div class="mt-2.5">
                                <input type="email" name="email" id="email" autocomplete="email"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary">
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-sm/6 font-semibold text-secondary">Número de
                                Teléfono</label>
                            <div class="mt-2.5">
                                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary">
                            </div>
                        </div>

                        <div>
                            <label for="company" class="block text-sm/6 font-semibold text-secondary">Empresa</label>
                            <div class="mt-2.5">
                                <input type="text" name="company" id="company"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary">
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="location" class="block text-sm/6 font-medium text-secondary">Solución</label>
                            <div class="mt-2 grid grid-cols-1">
                                <select id="location" name="location" @change="currentSolutionIndex = $event.target.selectedIndex"
                                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6">
                                    <option v-for="(solution, index) in solutions" :key="index">{{ solution.label }}
                                    </option>
                                </select>
                                <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd"
                                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div class="sm:col-span-1">
                            <label for="location" class="block text-sm/6 font-medium text-secondary">País</label>
                            <div class="mt-2 grid grid-cols-1">
                                <select id="location" name="location"
                                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6">
                                    <option>Pais 1</option>
                                    <option>Pais 2</option>
                                    <option>Pais 3</option>
                                    <option>Pais 4</option>
                                    <option>Pais 5</option>
                                </select>
                                <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd"
                                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <label for="company" class="block text-sm/6 font-semibold text-secondary">Ciudad</label>
                            <div class="mt-2.5">
                                <input type="text" name="company" id="company"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary">
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm/6 font-semibold text-secondary">Mensaje</label>
                            <div class="mt-2.5">
                                <textarea name="message" id="message" rows="4"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 flex justify-end">
                        <button type="submit"
                            class="rounded-full bg-primary px-3.5 py-2.5 text-sm font-light text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">
                            Solicitar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>

const currentSolutionIndex = ref(0);
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
]);
</script>