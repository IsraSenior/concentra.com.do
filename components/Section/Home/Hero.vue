<template>
    <div class="relative isolate overflow-hidden bg-white lg:pb-40">
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
        <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:pt-40">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
                <div class="mt-24 sm:mt-32 lg:mt-16">
                    <div class="inline-flex space-x-4">
                        <span
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-primary-100 ring-inset">
                            IT Consulting
                        </span>
                        <span
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-primary-100 ring-inset">
                            Software solutions
                        </span>
                        <span
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-primary-100 ring-inset">
                            Traninig
                        </span>
                        <span
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-primary-100 ring-inset">
                            Outsourcing
                        </span>
                        <span
                            class="rounded-full bg-primary-50 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-primary-100 ring-inset">
                            IT Support
                        </span>
                    </div>
                </div>
                <h1 class="mt-10 text-5xl font-semibold tracking-normal text-pretty text-secondary sm:text-6xl">Smart IT
                    Management, Simplified.</h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gris-aluminio sm:text-xl/8">Optimiza tus procesos y
                    potencia tu negocio con soluciones tecnológicas inteligentes. Descubre cómo podemos transformar tu
                    gestión IT hoy mismo.
                </p>
                <div class="mt-10 flex items-center gap-x-6">
                    <a href="#"
                        class="rounded-full bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">Conocer
                        más</a>
                    <a href="#" class="text-sm/6 font-semibold text-secondary hover:text-primary">Contáctanos <span
                            aria-hidden="true">→</span></a>
                </div>
            </div>
            <div
                class="relative mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
                <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                    <!-- <div
                        class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                            alt="App screenshot" width="2432" height="1442"
                            class="w-[76rem] rounded-md ring-1 shadow-2xl ring-gray-900/10">
                            
                    </div> -->
                    <Isotipo class="w-[40rem] absolute left-0 -top-[20%]" />
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                    alt="Transistor" width="158" height="48">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform"
                    width="158" height="48">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple"
                    width="158" height="48">
                <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal"
                    width="158" height="48">
                <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic"
                    width="158" height="48">
            </div>
            <div class="mt-16 flex justify-center">
                <p
                    class="relative rounded-full bg-primary-50 px-4 py-1.5 text-sm/6 text-primary-800 ring-1 ring-primary-900/5 ring-inset">
                    <span class="hidden md:inline">Más de 75 empresas utilizan nuestras herramientas para mejorar su
                        negocio.</span>
                    <a href="#" class="font-semibold text-primary"><span class="absolute inset-0"
                            aria-hidden="true"></span> Conócelos <span aria-hidden="true">&rarr;</span></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
