<template>
  <main>
    <header>Vue SVG Loaders</header>

    <section
      v-for="(loaderType, loaderIndex) in loaderTypes"
      :key="loaderIndex"
      class="flex flex-row items-center justify-center gap-5 p-4"
    >
      <h1>{{ loaderType }} Loaders</h1>

      <div>
        <template v-if="loaderType === 'Audio'">
          <NxAudioLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Ball Triangle'">
          <NxBallTriangleLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Bars'">
          <NxBarsLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Circles'">
          <NxCirclesLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Grid'">
          <NxGridLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Hearts'">
          <NxHeartsLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Oval'">
          <NxOvalLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Puff'">
          <NxPuffLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Rings'">
          <NxRingsLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Spinning Circles'">
          <NxSpinningCirclesLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Tail Spin'">
          <NxTailSpinLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
        <template v-if="loaderType === 'Three Dots'">
          <NxThreeDotsLoader
            v-for="(size, sizeIndex) in sizes"
            :key="sizeIndex"
            :isLoading="true"
            :size="size"
          />
        </template>
      </div>
    </section>
  </main>
</template>

<script>
import { sizes, loaderTypes } from '@ngeenx/nx-svg-shared-utils';

import {
  NxAudioLoader,
  NxBallTriangleLoader,
  NxBarsLoader,
  NxCirclesLoader,
  NxGridLoader,
  NxHeartsLoader,
  NxOvalLoader,
  NxPuffLoader,
  NxRingsLoader,
  NxSpinningCirclesLoader,
  NxTailSpinLoader,
  NxThreeDotsLoader,
} from '@ngeenx/nx-vue-svg-loaders';

export default {
  components: {
    NxAudioLoader,
    NxBallTriangleLoader,
    NxBarsLoader,
    NxCirclesLoader,
    NxGridLoader,
    NxHeartsLoader,
    NxOvalLoader,
    NxPuffLoader,
    NxRingsLoader,
    NxSpinningCirclesLoader,
    NxTailSpinLoader,
    NxThreeDotsLoader,
  },

  data() {
    return {
      sizes: sizes,
      loaderTypes: loaderTypes,
    };
  },
};
</script>

<style scoped>
@import './../../libs/utils/nx-svg-shared-utils/src/styles/app.component.scss';
</style>
