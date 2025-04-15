<template>
    <div class="overflow-hidden bg-primary-50 py-24">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div class="max-w-4xl">
                <p class="text-base/7 font-light text-primary tracking-wider uppercase" v-motion-fadein-up-once>Sobre
                    nosotros</p>
                <h2 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-secondary leading-tight sm:text-5xl"
                    v-motion-fadein-up-once :delay="300">
                    Con la
                    misión de potenciar las empresas</h2>
                <p class="mt-6 text-xl/8 text-balance text-gris-aluminio font-normal" v-motion-fadein-up-once>Aliquetnec
                    orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                    aliquam. Quisque id at vitae feugiat egestas.</p>
                <div class="mt-10 flex" v-motion-fadein-up-once>
                    <a href="#"
                        class="rounded-full bg-primary px-3.5 py-2.5 text-sm font-light text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">Conoce
                        más sobre nostros</a>
                </div>
            </div>
            <section class="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                <div class="lg:pr-8">
                    <h2 class="text-xl font-semibold tracking-tight text-pretty text-primary" v-motion-fadein-up-once>
                        Compromiso</h2>
                    <p class="mt-4 text-base/7 text-gris-aluminio font-normal" v-motion-fadein-up-once>Grado de
                        responsabilidad
                        y disposición de
                        apoyar
                        desde mi rol, las prioridades de la organización, asumiendo con el debido sentido de
                        urgencia el cumplimiento de la tarea, proyecto o promesa acordada.</p>

                    <h2 class="text-xl font-semibold tracking-tight text-pretty text-primary mt-8 leading-tight"
                        v-motion-fadein-up-once>Innovación
                    </h2>
                    <p class="mt-4 text-base/7 text-gris-aluminio font-normal" v-motion-fadein-up-once>Capacidad de
                        desafiar las
                        ideas
                        convencionales,
                        con el propósito de crear soluciones que generen valor, tanto para nuestros clientes,
                        como a
                        la evolución de la organización.</p>

                    <h2 class="text-xl font-semibold tracking-tight text-pretty text-primary mt-8"
                        v-motion-fadein-up-once>Trabajo en
                        equipo
                    </h2>
                    <p class="mt-4 text-base/7 text-gris-aluminio font-normal" v-motion-fadein-up-once>Hacer lo
                        necesario para
                        que la empresa
                        alcance
                        sus resultados, estando consciente de cómo mi trabajo impacta y complementa el de otros,
                        generando entre todos un efecto sinérgico.</p>
                </div>
                <div class="md:-mt-24 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                    <div
                        class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                        <div v-motion-fadein-up-once
                            class="aspect-square overflow-hidden rounded-xl shadow-xl shadow-primary/5">
                            <img alt=""
                                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                class="block size-full object-cover">
                        </div>
                        <div v-motion-fadein-up-once
                            class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl shadow-primary/5 lg:-mt-40">
                            <img alt=""
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                class="block size-full object-cover">
                        </div>
                        <div v-motion-fadein-up-once
                            class="aspect-square overflow-hidden rounded-xl shadow-xl shadow-primary/5">
                            <img alt=""
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                class="block size-full object-cover">
                        </div>
                        <div v-motion-fadein-up-once
                            class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl shadow-primary/5 lg:-mt-40">
                            <img alt=""
                                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                class="block size-full object-cover">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>

</script>
