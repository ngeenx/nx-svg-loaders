// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {
  NxAudioLoader,
  NxBallTriangleLoader,
  NxBarsLoader,
  NxCirclesLoader,
} from '@ngeenx/nx-react-svg-loaders';

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
                {/* {loaderType === 'Grid' && (
                  <GridLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Heart' && (
                  <HeartsLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Oval' && (
                  <OvalLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Puff' && (
                  <PuffLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Rings' && (
                  <RingsLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Spinning Circles' && (
                  <SpinningCirclesLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Tail Spin' && (
                  <TailSpinLoader isLoading={true} size={size} />
                )}
                {loaderType === 'Three Dots' && (
                  <ThreeDotsLoader isLoading={true} size={size} />
                )} */}
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default App;
