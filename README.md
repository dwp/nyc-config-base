# @dwp/nyc-config-base

Shareable [`nyc`](https://istanbul.js.org) config for instrumenting code.

## Getting started

```sh
npm install --save-dev @dwp/nyc-config-base nyc
```

## Rules

Add an `.nycrc` file that looks something like:

```json
{
    "extends": "@dwp/nyc-config-base"
}
```
You can add your own rules to enhance this, but in doing so please ensure you don't weaken the baseline ruleset.

## Instrumenting tests

Add `nyc` to your test suite like this, or see our [package.json](package.json) for an example of how we do it:

```json
    "test": "nyc jasmine"
```
