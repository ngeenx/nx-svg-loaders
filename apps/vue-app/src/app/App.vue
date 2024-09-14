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
        <template v-if="loaderType === 'Heart'">
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
        <!-- <NxPuffLoader
          v-if="loaderType === 'Puff'"
          v-for="(size, sizeIndex) in sizes"
          :key="sizeIndex"
          :isLoading="true"
          :size="size"
        />
        <NxRingsLoader
          v-if="loaderType === 'Rings'"
          v-for="(size, sizeIndex) in sizes"
          :key="sizeIndex"
          :isLoading="true"
          :size="size"
        />
        <NxSpinningCirclesLoader
          v-if="loaderType === 'Spinning Circles'"
          v-for="(size, sizeIndex) in sizes"
          :key="sizeIndex"
          :isLoading="true"
          :size="size"
        />
        <NxTailSpinLoader
          v-if="loaderType === 'Tail Spin'"
          v-for="(size, sizeIndex) in sizes"
          :key="sizeIndex"
          :isLoading="true"
          :size="size"
        />
        <NxThreeDotsLoader
          v-if="loaderType === 'Three Dots'"
          v-for="(size, sizeIndex) in sizes"
          :key="sizeIndex"
          :isLoading="true"
          :size="size"
        /> -->
      </div>
    </section>
  </main>
</template>

<script>
import {
  NxAudioLoader,
  NxBallTriangleLoader,
  NxBarsLoader,
  NxCirclesLoader,
  NxGridLoader,
  NxHeartsLoader,
  NxOvalLoader,
  // NxPuffLoader,
  // NxRingsLoader,
  // NxSpinningCirclesLoader,
  // NxTailSpinLoader,
  // NxThreeDotsLoader,
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
    // NxPuffLoader,
    // NxRingsLoader,
    // NxSpinningCirclesLoader,
    // NxTailSpinLoader,
    // NxThreeDotsLoader,
  },
  data() {
    return {
      sizes: [10, 15, 20, 25, 30, 25, 40, 50],
      loaderTypes: [
        'Audio',
        'Ball Triangle',
        'Bars',
        'Circles',
        'Grid',
        'Heart',
        'Oval',
        'Puff',
        'Rings',
        'Spinning Circles',
        'Tail Spin',
        'Three Dots',
      ],
    };
  },
};
</script>

<style scoped>
@import './app.scss';
</style>
