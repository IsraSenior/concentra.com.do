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
                    <h2 class="text-4xl font-semibold tracking-tight text-pretty text-secondary sm:text-5xl" v-motion-fadein-up-once>Familia
                        ConCentra
                    </h2>
                    <p class="mt-6 text-lg/8 text-gris-aluminio" v-motion-fadein-up-once>Somos una empresa de referencia en el sector de la
                        externalización de servicios, Ingresa los datos de tu hoja de vida o curriculum (CV) para que
                        queden registrados en nuestro portal y puedas ser considerado para las vacantes a las que
                        aplique tu perfil profesional.
                    </p>
                    <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
                        <div class="flex gap-x-4" v-motion-fadein-up-once>
                            <dt class="flex-none">
                                <span class="sr-only">Address</span>
                                <svg class="h-7 w-6 text-gris-aluminio" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                            </dt>
                            <dd>Acrópolis Center, Piso 8, <br>
                                Av. Winston Churchill, esquina Av. Rafael A. Sanchez <br>
                                Santo Domingo, Républica Dominicana</dd>
                        </div>
                        <div class="flex gap-x-4" v-motion-fadein-up-once>
                            <dt class="flex-none">
                                <span class="sr-only">Telephone</span>
                                <svg class="h-7 w-6 text-gris-aluminio" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </dt>
                            <dd><a class="hover:text-secondary" href="tel:+1 809-731-8115">+1 809-731-8115</a></dd>
                        </div>
                        <div class="flex gap-x-4" v-motion-fadein-up-once>
                            <dt class="flex-none">
                                <span class="sr-only">Email</span>
                                <svg class="h-7 w-6 text-gris-aluminio" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </dt>
                            <dd><a class="hover:text-secondary"
                                    href="mailto:info@concentra.com.do">info@concentra.com.do</a>
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

                        <div class="sm:col-span-1">
                            <label for="location" class="block text-sm/6 font-medium text-secondary">Nivel
                                Académico</label>
                            <div class="mt-2 grid grid-cols-1">
                                <select id="location" name="location"
                                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6">
                                    <option>Técnico</option>
                                    <option>Bachiller</option>
                                    <option>Universitario</option>
                                    <option>Postgrado / Maestría</option>
                                    <option>Doctorado</option>
                                    <option>Otro</option>
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
                            <label for="location" class="block text-sm/6 font-medium text-secondary">Carrera /
                                Profesión</label>
                            <div class="mt-2 grid grid-cols-1">
                                <select id="location" name="location"
                                    class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6">
                                    <option value="Estudiante de Sistemas">
                                        Estudiante de Sistemas </option>
                                    <option value="Ingeniería en Sistemas">
                                        Ingeniería en Sistemas </option>
                                    <option value="Ingeniería en tecnología de la comunicación y de la información">
                                        Ingeniería en tecnología de la comunicación y de la información </option>
                                    <option value="Ingeniería en Software">
                                        Ingeniería en Software </option>
                                    <option value="Ingeniería electrónica y comunicaciones">
                                        Ingeniería electrónica y comunicaciones </option>
                                    <option value="Ingeniería Industrial">
                                        Ingeniería Industrial </option>
                                    <option value="Licenciado en Sistemas">
                                        Licenciado en Sistemas </option>
                                    <option value="Otros">
                                        Otros </option>
                                </select>
                                <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd"
                                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm/6 font-semibold text-secondary">Áreas de
                                experiencia</label>
                            <div class="mt-2.5">
                                <textarea name="message" id="message" rows="2"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary"></textarea>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-sm/6 font-semibold text-secondary">Currículum
                                Vitae</label>
                            <div class="mt-2.5">
                                <input type="file" id="field" autocomplete="tel"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-secondary outline-1 -outline-offset-1 outline-primary-100 placeholder:text-gris-aluminio focus:outline-2 focus:-outline-offset-2 focus:outline-primary">
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 flex justify-end">
                        <button type="submit"
                            class="rounded-full bg-primary px-3.5 py-2.5 text-sm font-light text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-colors duration-300 ease-in-out">Send
                            message</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>

</script>