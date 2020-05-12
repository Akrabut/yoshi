---
id: testing
title: Testing
sidebar_label: Testing
---

Yoshi flow editor supports unit and e2e testing configuration for Out of iFrame projects. Moreover, you can always add [sled](https://wix-private.github.io/sled/) tests to your app to verify the widget is rendering correctly in production environment.

OOI template generated with `create-yoshi-app` already have unit and e2e tests for `Widget`, `controller` and `Settings` bootstrapped. You can find it in component's directory.
It's based on [`jest-yoshi-preset`](https://wix.github.io/yoshi/docs/jest-yoshi-preset), so it provides the same testing configuration as other yoshi apps.

By running `yoshi-flow-editor test` all tests will be started.
Unit tests ending with `.spec.ts` will be executed in JSDOM environment, end-to-end tests with `.e2e.ts`.

We are emulating `yoshi-flow-editor start` during while starting e2e tests, so you can access your Widget and Settings editor urls via `localhost:3100/editor/:componentName` or `localhost:3100/settings/:componentName`. It will help to verify all components are being rendered correctly in editor environemnt by `page.open` with [`puppeteer`](https://github.com/puppeteer/puppeteer)

To add sled tests to your projects, please check [the guide](https://wix-private.github.io/sled/docs/quick-start) or an [example project](https://github.com/wix-private/strategic-products/tree/master/achievements/web-client/challenges-web-ooi/sled).