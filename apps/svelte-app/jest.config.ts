/* eslint-disable */
export default {
  displayName: "svelte-app",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/js/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/js/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/svelte-app",
};
