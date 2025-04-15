<template>
    <div :class="[
        'group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6',
        { 'bg-white hover:bg-primary-50': !item.featured },
        { 'bg-gray-100 white hover:bg-secondary-50': item.featured },
    ]">
        <div :class="[
            'flex size-11 flex-none items-center justify-center rounded-lg',
            { 'bg-primary-50 group-hover:bg-white': !item.featured },
            { 'bg-primary-50 group-hover:bg-primary-50': item.featured },
        ]">
            <svg v-if="item?.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            <img v-if="item?.image" :src="item.image" :alt="item?.label" class="size-10 object-contain object-center">
        </div>
        <div class="flex-auto">
            <NuxtLink :to="item.hash" @click.native="emit('closeDropdown', true)" class="block font-semibold text-secondary">
                {{ item?.label }}
                <span class="absolute inset-0"></span>
            </NuxtLink>
            <p class="mt-1 text-gris-aluminio font-normal">{{ item.intro }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['closeDropdown']);
</script>
