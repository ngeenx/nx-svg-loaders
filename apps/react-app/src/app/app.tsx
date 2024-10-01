import React from 'react';

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
} from '@ngeenx/nx-react-svg-loaders';

import '/libs/utils/nx-svg-shared-utils/src/styles/app.component.scss';

export function App() {
  return (
    <main>
      <header>React SVG Loaders</header>

      {loaderTypes.map((loaderType) => (
        <section key={loaderType}>
          <h1>{loaderType} Loaders</h1>

          <div>
            {sizes.map((size) => (
              <React.Fragment key={size}>
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
                {loaderType === 'Hearts' && (
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
