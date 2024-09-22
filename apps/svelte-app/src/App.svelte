<script lang="ts">
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
  } from '@ngeenx/nx-svelte-svg-loaders';
</script>

<main>
  <header>Svelte SVG Loaders</header>

  {#each loaderTypes as loaderType}
    <section>
      <h1>{loaderType} Loaders</h1>

      <div>
        {#each sizes as size}
          {#if loaderType === 'Audio'}
            <NxAudioLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Ball Triangle'}
            <NxBallTriangleLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Bars'}
            <NxBarsLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Circles'}
            <NxCirclesLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Grid'}
            <NxGridLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Hearts'}
            <NxHeartsLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Oval'}
            <NxOvalLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Puff'}
            <NxPuffLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Rings'}
            <NxRingsLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Spinning Circles'}
            <NxSpinningCirclesLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Tail Spin'}
            <NxTailSpinLoader isLoading={true} {size} />
          {/if}

          {#if loaderType === 'Three Dots'}
            <NxThreeDotsLoader isLoading={true} {size} />
          {/if}
        {/each}
      </div>
    </section>
  {/each}
</main>

<style lang="scss">
  @import './../../../libs/utils/nx-svg-shared-utils/src/styles/app.component.scss';
  @import './../../../libs/utils/nx-svg-shared-utils/src/styles/base-loader.component.scss';
</style>
