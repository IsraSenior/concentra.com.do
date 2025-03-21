<template>
    <div>
        <Header />
        <SectionHomeHero />

        <div class="overflow-hidden bg-white pb-24">
            <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div class="max-w-4xl">
                    <p class="text-base/7 font-semibold text-primary">Sobre nosotros</p>
                    <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-secondary sm:text-5xl">Con la
                        misión de potenciar los empresas</h1>
                    <p class="mt-6 text-xl/8 text-balance text-gris-aluminio">Aliquet nec orci mattis amet quisque
                        ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
                        vitae feugiat egestas.</p>
                    <div class="mt-10 flex">
                        <a href="#"
                            class="rounded-full bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">Conocer
                            más sobre nostros</a>
                    </div>
                </div>
                <section class="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div class="lg:pr-8">
                        <h2 class="text-xl font-semibold tracking-tight text-pretty text-primary">Compromiso</h2>
                        <p class="mt-4 text-base/7 text-gris-aluminio">Grado de responsabilidad y disposición de apoyar
                            desde mi rol, las prioridades de la organización, asumiendo con el debido sentido de
                            urgencia el cumplimiento de la tarea, proyecto o promesa acordada.</p>

                        <h2 class="text-xl font-semibold tracking-tight text-pretty text-primary mt-8">Innovación</h2>
                        <p class="mt-4 text-base/7 text-gris-aluminio">Capacidad de desafiar las ideas convencionales,
                            con el propósito de crear soluciones que generen valor, tanto para nuestros clientes, como a
                            la evolución de la organización.</p>

                        <h2 class="text-xl font-semibold tracking-tight text-pretty text-primary mt-8">Trabajo en
                            equipo
                        </h2>
                        <p class="mt-4 text-base/7 text-gris-aluminio">Hacer lo necesario para que la empresa alcance
                            sus resultados, estando consciente de cómo mi trabajo impacta y complementa el de otros,
                            generando entre todos un efecto sinérgico.</p>
                    </div>
                    <div class="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div
                            class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div
                                class="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-primary-100 shadow-primary/5">
                                <img alt=""
                                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    class="block size-full object-cover">
                            </div>
                            <div
                                class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-primary-100 shadow-primary/5 lg:-mt-40">
                                <img alt=""
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    class="block size-full object-cover">
                            </div>
                            <div
                                class="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-primary-100 shadow-primary/5">
                                <img alt=""
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    class="block size-full object-cover">
                            </div>
                            <div
                                class="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-primary-100 shadow-primary/5 lg:-mt-40">
                                <img alt=""
                                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    class="block size-full object-cover">
                            </div>
                        </div>
                    </div>
                    <div class="max-lg:mt-16 lg:col-span-1">
                        <p class="text-base/7 font-semibold text-secondary">Nuestros números</p>
                        <hr class="mt-6 border-t border-primary-100">
                        <dl class="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            <div class="flex flex-col gap-y-2 border-b border-dotted border-primary-100 pb-4">
                                <dt class="text-sm/6 text-gris-aluminio">Años de gestión</dt>
                                <dd class="order-first text-6xl font-semibold tracking-tight text-primary">
                                    +<span>20</span></dd>
                            </div>
                            <div class="flex flex-col gap-y-2 border-b border-dotted border-primary-100 pb-4">
                                <dt class="text-sm/6 text-gris-aluminio">Clientes satisfechos</dt>
                                <dd class="order-first text-6xl font-semibold tracking-tight text-secondary">
                                    +<span>75</span>
                                </dd>
                            </div>
                            <div
                                class="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-primary-100 max-sm:pb-4">
                                <dt class="text-sm/6 text-gris-aluminio">Profesionales capacitados</dt>
                                <dd class="order-first text-6xl font-semibold tracking-tight text-azul-cobalto">
                                    <span>5.6</span>K
                                </dd>
                            </div>
                            <div class="flex flex-col gap-y-2">
                                <dt class="text-sm/6 text-gris-aluminio">Proyectos exitosos</dt>
                                <dd class="order-first text-6xl font-semibold tracking-tight text-verde-esmeralda">
                                    +<span>200</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </div>

        <!-- <div class="bg-white">
            <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div
                    class="relative isolate overflow-hidden bg-secondary px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

                    <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Aumente su productividad hoy mismo.</h2>
                        <p class="mt-6 text-lg/8 text-pretty text-gris-aluminio">Ac euismod vel sit maecenas id
                            pellentesque
                            eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
                        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a href="#"
                                class="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-secondary shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Nuestras soluciones</a>
                            <a href="#" class="text-sm/6 font-semibold text-white">Conoce más <span
                                    aria-hidden="true">→</span></a>
                        </div>
                    </div>
                    <div class="relative mt-16 h-80 lg:mt-8">
                        <img class="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            alt="App screenshot" width="1824" height="1080">
                    </div>
                </div>
            </div>
        </div> -->

        <div class="bg-white">
            <div class="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
                <div
                    class="relative isolate overflow-hidden bg-verde-esmeralda px-6 py-24 text-center shadow-2xl shadow-primary-100 sm:rounded-3xl sm:px-16">
                    <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Aumente su
                        productividad hoy mismo.</h2>
                    <p class="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">Incididunt sint fugiat pariatur
                        cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#"
                            class="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-secondary shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Nuestras
                            soluciones</a>
                        <a href="#" class="text-sm/6 font-semibold text-white">Conoce más <span
                                aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white py-24 px-4">
            <div class="bg-primary-50 py-14 rounded-4xl">
                <div class="mx-auto max-w-2xl lg:max-w-7xl text-center">
                    <h2 class="text-base/7 font-semibold text-primary">Soluciones inteligentes</h2>
                    <p
                        class="mt-2 max-w-xl mx-auto text-4xl font-semibold tracking-tight text-pretty text-secondary sm:text-5xl">
                        Transforma tu gestión con nuestros productos</p>
                    <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                        <div class="relative lg:col-span-3">
                            <div
                                class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                            </div>

                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                                <img class="h-80 object-cover object-left"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
                                    alt="">
                                <div class="p-10 pt-4">
                                    <h3 class="text-sm/4 font-semibold text-primary">Rendimiento</h3>
                                    <p class="mt-2 text-lg font-medium tracking-tight text-secondary">Optimización
                                        empresarial
                                    </p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio">Mayor eficiencia operativa con
                                        estrategias digitales inteligentes</p>
                                </div>
                            </div>
                            <div
                                class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-primary-100 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                            </div>
                        </div>

                        <div class="relative lg:col-span-3">
                            <div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]"></div>
                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                                <img class="h-80 object-cover object-left lg:object-right"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
                                    alt="">
                                <div class="p-10 pt-4">
                                    <h3 class="text-sm/4 font-semibold text-primary">Software de alto impacto</h3>
                                    <p class="mt-2 text-lg font-medium tracking-tight text-secondary">
                                        Encriptación y seguridad
                                    </p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio">
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

                        <div class="relative lg:col-span-2">
                            <div class="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]"></div>
                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                                <img class="h-80 object-cover object-left"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                                    alt="">
                                <div class="p-10 pt-4">
                                    <h3 class="text-sm/4 font-semibold text-primary">99.7% de optimización</h3>
                                    <p class="mt-2 text-lg font-medium tracking-tight text-secondary">
                                        Estrategia corporativa
                                    </p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio">Planificación basada en datos
                                        para
                                        maximizar rentabilidad</p>
                                </div>
                            </div>
                            <div
                                class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-primary-100 lg:rounded-bl-[2rem]">
                            </div>
                        </div>

                        <div class="relative lg:col-span-2">
                            <div class="absolute inset-px rounded-lg bg-white"></div>
                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <img class="h-80 object-cover"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                                    alt="">
                                <div class="p-10 pt-4">
                                    <h3 class="text-sm/4 font-semibold text-primary">Vanguardia</h3>
                                    <p class="mt-2 text-lg font-medium tracking-tight text-secondary">
                                        Software factory
                                    </p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio">
                                        Expertos en el uso de metodologías y herramientas de desarrollo.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-primary-100">
                            </div>
                        </div>

                        <div class="relative lg:col-span-2">
                            <div
                                class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                            </div>
                            <div
                                class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                                <img class="h-80 object-cover"
                                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                                    alt="">
                                <div class="p-10 pt-4">
                                    <h3 class="text-sm/4 font-semibold text-primary">Evolucioón</h3>
                                    <p class="mt-2 text-lg font-medium tracking-tight text-secondary">
                                        Gestión de TIC
                                    </p>
                                    <p class="mt-2 max-w-lg text-sm/6 text-gris-aluminio">
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

        <div class="overflow-hidden bg-white py-24">
            <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
                    <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 class="text-base/7 font-semibold text-primary">Equipo</h2>
                        <h2 class="text-4xl font-semibold tracking-tight text-secondary sm:text-5xl">Nuestros
                            profesionales</h2>
                        <p class="mt-6 text-xl/8 text-gris-aluminio">Quasi est quaerat. Sit molestiae et. Provident ad
                            dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
                            Excepturi quidem expedita molestias quas.</p>
                        <p class="mt-6 text-base/7 text-gris-aluminio">Anim aute id magna aliqua ad ad non deserunt
                            sunt. Qui
                            irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi
                            aperiam sit non sit neque reprehenderit.</p>
                        <div class="mt-10 flex">
                            <a href="#"
                                class="rounded-full bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">Únete
                                a nuestro equipo</a>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div
                            class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-primary-100 shadow-primary/5">
                            <img src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                alt="" class="aspect-7/5 w-[37rem] max-w-none bg-gray-50 object-cover">
                        </div>
                        <div
                            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div
                                class="order-first flex w-64 flex-none justify-end self-end lg:w-auto overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-primary-100 shadow-primary/5">
                                <img src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    alt="" class="aspect-4/3 w-[24rem] max-w-none flex-none bg-gray-50 object-cover">
                            </div>
                            <div
                                class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-primary-100 shadow-primary/5">
                                <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                    alt="" class="aspect-7/5 w-[37rem] max-w-none flex-none bg-gray-50 object-cover">
                            </div>
                            <div
                                class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-primary-100 shadow-primary/5">
                                <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    alt="" class="aspect-4/3 w-[24rem] max-w-none bg-gray-50 object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative isolate bg-white pt-24 pb-32 sm:pt-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-base/7 font-semibold text-primary">Testimonios</h2>
                    <p class="mt-2 text-4xl font-semibold tracking-tight text-balance text-secondary sm:text-5xl">Hemos
                        trabajado con miles de personas increíbles</p>
                </div>
                <div
                    class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-secondary sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure
                        class="rounded-2xl bg-white ring-1 shadow-lg ring-secondary/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                        <blockquote
                            class="p-6 text-lg font-semibold tracking-tight text-secondary sm:p-12 sm:text-xl/8">
                            <p>“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor
                                libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis
                                blandit vel et proin. Non hendrerit in vel ac diam.”</p>
                        </blockquote>
                        <figcaption
                            class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-secondary/10 px-6 py-4 sm:flex-nowrap">
                            <img class="size-10 flex-none rounded-full bg-gray-50"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                                alt="">
                            <div class="flex-auto">
                                <div class="font-semibold">Brenna Goyette</div>
                                <div class="text-gris-aluminio">@brennagoyette</div>
                            </div>
                            <img class="h-10 w-auto flex-none"
                                src="https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-secondary.svg" alt="">
                        </figcaption>
                    </figure>
                    <div class="space-y-8 xl:contents xl:space-y-0">
                        <div class="space-y-8 xl:row-span-2">
                            <figure class="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-secondary/5">
                                <blockquote class="text-secondary">
                                    <p>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut
                                        enim doloremque et ipsam.”</p>
                                </blockquote>
                                <figcaption class="mt-6 flex items-center gap-x-4">
                                    <img class="size-10 rounded-full bg-gray-50"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                    <div>
                                        <div class="font-semibold">Leslie Alexander</div>
                                        <div class="text-gris-aluminio">@lesliealexander</div>
                                    </div>
                                </figcaption>
                            </figure>
                            <figure class="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-secondary/5">
                                <blockquote class="text-secondary">
                                    <p>“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt
                                        excepturi rerum voluptatem minus harum.”</p>
                                </blockquote>
                                <figcaption class="mt-6 flex items-center gap-x-4">
                                    <img class="size-10 rounded-full bg-gray-50"
                                        src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                    <div>
                                        <div class="font-semibold">Leonard Krasner</div>
                                        <div class="text-gris-aluminio">@leonardkrasner</div>
                                    </div>
                                </figcaption>
                            </figure>

                            <!-- More testimonials... -->
                        </div>
                        <div class="space-y-8 xl:row-start-1">
                            <figure class="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-secondary/5">
                                <blockquote class="text-secondary">
                                    <p>“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut
                                        officia rem nulla blanditiis.”</p>
                                </blockquote>
                                <figcaption class="mt-6 flex items-center gap-x-4">
                                    <img class="size-10 rounded-full bg-gray-50"
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                    <div>
                                        <div class="font-semibold">Lindsay Walton</div>
                                        <div class="text-gris-aluminio">@lindsaywalton</div>
                                    </div>
                                </figcaption>
                            </figure>

                            <!-- More testimonials... -->
                        </div>
                    </div>
                    <div class="space-y-8 xl:contents xl:space-y-0">
                        <div class="space-y-8 xl:row-start-1">
                            <figure class="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-secondary/5">
                                <blockquote class="text-secondary">
                                    <p>“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae.
                                        Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.”</p>
                                </blockquote>
                                <figcaption class="mt-6 flex items-center gap-x-4">
                                    <img class="size-10 rounded-full bg-gray-50"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                    <div>
                                        <div class="font-semibold">Tom Cook</div>
                                        <div class="text-gris-aluminio">@tomcook</div>
                                    </div>
                                </figcaption>
                            </figure>

                            <!-- More testimonials... -->
                        </div>
                        <div class="space-y-8 xl:row-span-2">
                            <figure class="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-secondary/5">
                                <blockquote class="text-secondary">
                                    <p>“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt
                                        excepturi rerum voluptatem minus harum.”</p>
                                </blockquote>
                                <figcaption class="mt-6 flex items-center gap-x-4">
                                    <img class="size-10 rounded-full bg-gray-50"
                                        src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                    <div>
                                        <div class="font-semibold">Leonard Krasner</div>
                                        <div class="text-gris-aluminio">@leonardkrasner</div>
                                    </div>
                                </figcaption>
                            </figure>

                            <figure class="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-secondary/5">
                                <blockquote class="text-secondary">
                                    <p>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut
                                        enim doloremque et ipsam.”</p>
                                </blockquote>
                                <figcaption class="mt-6 flex items-center gap-x-4">
                                    <img class="size-10 rounded-full bg-gray-50"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                    <div>
                                        <div class="font-semibold">Leslie Alexander</div>
                                        <div class="text-gris-aluminio">@lesliealexander</div>
                                    </div>
                                </figcaption>
                            </figure>

                            <!-- More testimonials... -->
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Footer />
    </div>
</template>

<script setup>

</script>
