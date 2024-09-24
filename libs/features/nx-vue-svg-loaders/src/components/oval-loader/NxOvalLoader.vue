<template>
  <div v-if="props.isLoading" :class="{ centered: props.isCentered }">
    <svg
      :width="props.size"
      :height="props.size"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IBaseLoaderProps } from '../base-loader/base-loader';

const props = defineProps<IBaseLoaderProps>();
</script>

<style scoped lang="scss">
@import '../base-loader/base-loader.scss';
</style>
