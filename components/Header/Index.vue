<template>
    <header v-motion-fadein-down-enter :duration="1000"
        class="z-40 bg-white rounded-full fixed top-4 transform -translate-x-1/2 left-1/2 drop-shadow-xs shadow shadow-primary/5 max-w-7xl w-full">
        <nav class="mx-auto flex  items-center justify-between p-4 lg:px-8 space-x-10 relative"
            aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <Logo class="h-8 w-auto" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Open main menu</span>
                    <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">

                <client-only v-for="(item, index) in menu" :key="index">
                    <a v-if="!item.float" href="#" class="text-sm/6 font-light text-gray-900">{{ item.label }}</a>
                    <HeaderFloatMenu v-else :item="item" />
                </client-only>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="text-sm/6 font-light text-gray-900">
                    Contacto
                    <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>

        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>
            <div
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Close menu</span>
                        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <div class="-mx-3">
                                <button type="button"
                                    class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    aria-controls="disclosure-1" aria-expanded="false">
                                    Product
                                    <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                -->
                                    <svg class="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <!-- 'Product' sub-menu, show/hide based on menu state. -->
                                <div class="mt-2 space-y-2" id="disclosure-1">
                                    <a href="#"
                                        class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Analytics</a>
                                    <a href="#"
                                        class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Engagement</a>
                                    <a href="#"
                                        class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Security</a>
                                    <a href="#"
                                        class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Integrations</a>
                                    <a href="#"
                                        class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Automations</a>
                                    <a href="#"
                                        class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Watch
                                        demo</a>
                                    <a href="#"
                                        class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Contact
                                        sales</a>
                                </div>
                            </div>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</a>
                        </div>
                        <div class="py-6">
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log
                                in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const menu = ref([
    {
        float: false,
        label: "Nosotros",
        hash: "#"
    },
    {
        float: true,
        grid: true,
        label: "Soluciones",
        hash: "#",
        options: [
            {
                label: "SOFTEXPERT",
                hash: "#",
                image: "https://www.softexpert.com/_next/image/?url=https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fsite-prd-strapi%2FMain_Logo_Core_Blue_Expert_Horizon_a8410a7641.png&w=384&q=75",
                intro: "Empresa líder de mercado en soluciones para la excelencia en la gestión."
            },
            {
                label: "SAYSAID",
                hash: "#",
                image: "https://cdn-ccchn.nitrocdn.com/eoxXytShChgscESECFYcqdYPaOaOGMwn/assets/images/source/rev-ebe85f2/cdn.sysaid.com/wp-content/uploads/logo-1.svg",
                intro: "Solución de gestión de service desk asequible para requisitos organizativos."
            },
            {
                label: "SOLARWINDS",
                hash: "#",
                image: "https://images.contentstack.io/v3/assets/blt28ff6c4a2cf43126/bltfed185f07ccab843/651f0a1c7bedef75ee94d61c/SW_Logo_Web_Orange.svg?auto=webp&disable=upscale&width=3840&quality=75",
                intro: "Software galardonado de gestión de almacenamiento, aplicaciones, servidores y redes."
            },
            {
                label: "VARONIS",
                hash: "#",
                image: "https://concentra.com.do/images/2018/02/13/varonis-logo.png",
                intro: "Ofrece un marco para actualizar el proceso de gobierno de datos."
            },
            {
                label: "CARBONITE",
                hash: "#",
                image: "https://prod-cms.carbonite.com/globalassets/site-images/nav/carbonite-by-opentext---logo---normal.svg",
                intro: "Ofrece todas las herramientas necesarias para proteger los datos."
            },
            {
                label: "OBSERVE IT",
                hash: "#",
                image: "https://concentra.com.do/images/2018/02/13/logo-oberve-it.png",
                intro: "Proveedor de soluciones líder de control y análisis de amenazas de infiltrados."
            },
            {
                label: "SHUFTI PRO",
                hash: "#",
                image: "https://concentra.com.do/images/2021/04/13/shufti20pro_edited.png",
                intro: "SaaS de verificación de identidad para eliminar riesgos, delitos financieros y robo de identidad."
            },
            {
                label: "SERVICESBOX",
                hash: "#",
                image: "https://concentra.com.do/images/2022/07/07/dia1.png",
                intro: "Solución tecnológica enfocada en trasformar digitalmente los servicios públicos de las instituciones gubernamentales."
            },
            {
                label: "CELONIS",
                hash: "#",
                image: "https://concentra.com.do/images/2022/10/26/celonis2.png",
                icon: "",
                intro: "Sistema de gestión de ejecución encuentra y corrige las ineficiencias ocultas rápidamente."
            },
        ],
        ctas: [
            {
                label: "Soluciones",
                hash: "#",
                icon: ""
            },
            {
                label: "Contácta con ventas",
                hash: "#",
                icon: ""
            }
        ]
    },
    {
        float: true,
        grid: false,
        label: "Servicios",
        hash: "#",
        options: [
            {
                label: "Outsoursing",
                hash: "#",
                icon: true,
                intro: "Aumentar la eficiencia y la efectividad de tus servicios."
            },
            {
                label: "Soporte técnico",
                hash: "#",
                icon: true,
                intro: "Profesionales técnicos especializados en HW y SW con una elevada preparación y experiencia."
            },
            {
                label: "Software factory",
                hash: "#",
                icon: true,
                intro: "Desarrollo de productos o en proyectos para la obtención de aplicaciones a medida de las necesidades de nuestros clientes."
            },
        ],
        ctas: [
            {
                label: "Servicios",
                hash: "#",
                icon: ""
            },
            {
                label: "Contáctanos",
                hash: "#",
                icon: ""
            }
        ]
    },
    {
        float: true,
        grid: false,
        label: "Consultorías",
        hash: "#",
        options: [
            {
                label: "Prácticas TIC",
                hash: "#",
                icon: true,
                intro: "Ayuda a implementar modelos y estándares para un buen gobierno de los procesos y decisiones empresariales."
            },
            {
                label: "Prácticas corporativas",
                hash: "#",
                icon: true,
                intro: "Consultoría integrada para la excelencia en la gestión y en el desempeño que habilita las organizaciones para pensar y actuar estratégicamente."
            },
        ],
        ctas: [
            {
                label: "Nuestros clientes",
                hash: "#",
                icon: ""
            },
            {
                label: "Contáctanos",
                hash: "#",
                icon: ""
            }
        ]
    },
    {
        float: false,
        label: "Capacitación",
        hash: "#"
    }

])
</script>