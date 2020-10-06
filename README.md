# eslint-no-floating-promises

This PR is a repro case for an issue opened against eslint. See [typescript-eslint issue 2640](https://github.com/typescript-eslint/typescript-eslint/issues/2640).

## Instructions

1. Run `npm ci`

1. Run `npm run lint` to see the exceptions.

## Example Code

The example is located at [src/example.ts](/blob/main/src/example.ts)

## Lint Errors

Here are the lint errors, in case you don't want to pull down the repo:

```console
src/example.ts
  10:1  error  Promises must be handled appropriately or explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  15:3  error  Promises must be handled appropriately or explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  16:3  error  Promises must be handled appropriately or explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  24:3  error  Promises must be handled appropriately or explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  26:3  error  Promises must be handled appropriately or explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  29:1  error  Promises must be handled appropriately or explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
```
