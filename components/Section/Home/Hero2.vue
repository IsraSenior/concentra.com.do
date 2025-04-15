<template>
    <div class="relative isolate overflow-hidden bg-white h-screen">
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

        <div class="flex h-full w-full items-center justify-center py-14 px-5">
            <div class="grid h-full w-full grid-cols-4 grid-rows-4 gap-4 p-2 rounded-4xl">
                <!-- Salmon -->
                <div class="col-span-2 relative row-span-4 flex items-center justify-center overflow-hidden group">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:shrink-0">
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
                        <h2 class="mt-10 text-5xl font-semibold tracking-normal text-pretty text-secondary sm:text-5xl leading-tight"
                            v-motion-fadein-up-once :delay="700">Smart IT
                            Management, Simplified.</h2>
                        <p class="mt-8 text-lg font-normal text-pretty text-gris-aluminio sm:text-xl/8"
                            v-motion-fadein-up-once :delay="800">Optimiza tus procesos y
                            potencia tu negocio con soluciones tecnológicas inteligentes. Descubre cómo podemos
                            transformar tu
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
                </div>

                <!-- Broccoli -->
                <div class="col-span-2 row-span-2 rounded-4xl shadow-lg shadow-primary/5 overflow-hidden group">
                    <div class="relative flex h-full flex-col w-full">
                        <img class="h-52 w-full object-cover object-left lg:object-right"
                            src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png" alt=""
                            v-motion-fadein-once>
                        <div class="p-10 pt-4 group-hover:bg-primary-50">
                            <h3 class="text-sm/4 font-semibold text-primary" v-motion-fadein-up-once>Lanzamientos</h3>
                            <p class="mt-2 text-lg font-medium tracking-tight text-secondary" v-motion-fadein-up-once>
                                Software factory</p>
                            <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio" v-motion-fadein-up-once>Curabitur
                                auctor, ex quis auctor
                                venenatis,
                                eros arcu rhoncus massa.</p>
                        </div>
                        <a href="#" class="absolute inset-0"></a>
                    </div>
                </div>

                <!-- Tamago -->
                <div
                    class="col-span-2 relative row-span-2 rounded-4xl shadow-lg shadow-primary/5 flex items-center justify-center overflow-hidden group">
                    <div class="relative flex h-full flex-row-reverse items-center w-full ">

                        <div class="p-10 h-full w-1/2 flex items-center bg-transparent group-hover:bg-primary-50">
                            <div>
                                <h3 class="text-sm/4 font-semibold text-primary" v-motion-fadein-up-once>Soluciones</h3>
                                <p class="mt-2 text-lg font-medium tracking-tight text-secondary"
                                    v-motion-fadein-up-once>Conecta con las
                                    mejores herramientas del mercado
                                </p>
                                <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio" v-motion-fadein-up-once>Curabitur
                                    auctor, ex quis auctor
                                    venenatis,
                                    eros arcu rhoncus massa.</p>
                            </div>
                        </div>
                        <img class="h-full object-cover w-1/2"
                            src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png"
                            alt="" v-motion-fadein-once>
                    </div>
                    <a href="#" class="absolute inset-0"></a>
                </div>

                <div className="col-span-4 row-span-1 rounded-4xl shadow-lg bg-secondary-900 py-2 shadow-primary/5 flex items-center justify-center mt-8 overflow-hidden group w-2/3 mx-auto"
                    v-motion-fadein-up-once>

                    <p class="text-sm/6 text-white">
                        <a href="#" class="hover:text-primary-100 flex items-center space-x-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-5">
                                <path fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Únase a nosotros en Santo Domingo del 7 al 9 de junio para ver las próximas
                            capacitaciones.&nbsp;<span aria-hidden="true"></span>
                        </a>
                    </p>

                </div>
            </div>
        </div>

    </div>

</template>

<script setup>

</script>
