<script lang="ts">
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

  const sizes = [10, 15, 20, 25, 30, 25, 40, 50],
    loaderTypes = [
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
    ];
</script>

<main>
  <header>Svelte SVG Loaders</header>

  {#each loaderTypes as loaderType}
    <section class="flex flex-row items-center justify-center gap-5 p-4">
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

          {#if loaderType === 'Heart'}
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
  @import './app.scss';
</style>
