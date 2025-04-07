<template>
    <div class="bg-primary-50">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
            <div v-motion-fadein-up-once
                class="relative isolate overflow-hidden bg-secondary px-6 py-24 text-center sm:rounded-3xl sm:px-16">
                <Isotipo v-motion="{
                    enter: {
                        opacity: 0,
                        scale: 0.9,
                    },
                    visible: {
                        opacity: .1,
                        scale: 1,
                        transition: {
                            duration: 2000
                        }
                    }
                }"
                    class="absolute h-[500px] brightness-0 invert opacity-10 left-0 bottom-0 transform -translate-x-1/4 translate-y-1/4 rotate-12" />

                <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
                    v-motion-fadein-up-once>Aumente su
                    productividad hoy mismo.</h2>
                <p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300" v-motion-fadein-up-once>
                    Incididunt sint fugiat
                    pariatur
                    cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6" v-motion-fadein-up-once>
                    <a href="#"
                        class="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-secondary shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Nuestras
                        soluciones</a>
                    <a href="#" class="text-sm/6 font-semibold text-white">Conoce más <span
                            aria-hidden="true">→</span></a>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>
