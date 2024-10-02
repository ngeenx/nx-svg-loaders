@REM update all packages to the latest minor and patch version

@REM ensure PNPM is installed
CALL pnpm add -g pnpm

@REM check all updates and update them
CALL npx --yes npm-check-updates --packageManager npm --target minor -u

@REM install node dependencies
CALL pnpm i --no-frozen-lockfile
