<template>
    <div class="">
        <button @click.prevent="dropdown = !dropdown" type="button"
            class="flex items-center gap-x-1 text-sm/6 font-light text-gray-900" aria-expanded="false">
            {{ item.label }}
            <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                data-slot="icon">
                <path fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd" />
            </svg>
        </button>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-if="dropdown" :class="[
                'absolute top-full left-1/2 transform -translate-x-1/2 z-10 mt-3 w-screen overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-primary/5',
                { 'max-w-4xl': item.grid },
                { 'max-w-md': !item.grid },
            ]">
                <div :class="[
                    'p-4',
                    { 'grid grid-cols-2 gap-4': item.grid }
                ]">
                    <HeaderFloatMenuItem v-for="(subitem, index) in featuredItems" :key="index" :item="subitem" @close-dropdown="dropdown = !dropdown" />
                    <HeaderFloatMenuItem v-for="(subitem, index) in normalItems" :key="index" :item="subitem" @close-dropdown="dropdown = !dropdown" />
                </div>

                <div class="grid grid-cols-2 divide-x divide-secondary-900/5 bg-primary-50">
                    <a v-for="(cta, index) in item.ctas" :key="index" href="#"
                        class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-light text-secondary-900 hover:bg-secondary-100">
                        <!-- <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                                clip-rule="evenodd" />
                        </svg> -->
                        {{ cta.label }}
                    </a>
                </div>
            </div>

        </transition>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const featuredItems = computed(() => {
    return props.item.options.filter((item) => item.featured);
});
const normalItems = computed(() => {
    return props.item.options.filter((item) => !item.featured);
});

const dropdown = ref(false);
</script>
