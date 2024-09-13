// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
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
} from '@ngeenx/nx-react-svg-loaders';

import './app.module.scss';

export function App() {
  const sizes: number[] = [10, 15, 20, 25, 30, 25, 40, 50];

  const loaderTypes: string[] = [
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

  return (
    <main>
      <header>React SVG Loaders</header>

      {loaderTypes.map((loaderType, loaderIndex) => (
        <section
          key={loaderIndex}
          className="flex flex-row items-center justify-center gap-5 p-4"
        >
          <h1>{loaderType} Loaders</h1>

          <div>
            {sizes.map((size, sizeIndex) => (
              <React.Fragment key={sizeIndex}>
                {loaderType === 'Audio' && (
                  <NxAudioLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Ball Triangle' && (
                  <NxBallTriangleLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Bars' && (
                  <NxBarsLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Circles' && (
                  <NxCirclesLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Grid' && (
                  <NxGridLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Heart' && (
                  <NxHeartsLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Oval' && (
                  <NxOvalLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Puff' && (
                  <NxPuffLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Rings' && (
                  <NxRingsLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Spinning Circles' && (
                  <NxSpinningCirclesLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Tail Spin' && (
                  <NxTailSpinLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Three Dots' && (
                  <NxThreeDotsLoader isLoading={true} size={size} />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default App;
