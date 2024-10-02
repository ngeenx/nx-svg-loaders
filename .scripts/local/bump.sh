# update all packages to the latest minor and patch version

# ensure PNPM is installed
pnpm add -g pnpm

# check all updates and update them
npx --yes npm-check-updates --packageManager pnpm --target minor -u

# install node dependencies
pnpm i --no-frozen-lockfile
