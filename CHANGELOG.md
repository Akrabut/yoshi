# Changelog

## 1.3.3 (Feb 20, 2019)
* [#995](https://github.com/wix/yoshi/pull/995) Upgrade wnpm-ci

## 1.3.1 (Sep 25, 2018)
* [a78c20](https://github.com/wix/yoshi/commit/a78c20b7b471da46463a44d1106b106fc6d20147) Upgrade `wix-babel-preset` to version 2
## 1.3.1 (Jul 1, 2018)
* [#407](https://github.com/wix-private/yoshi/pull/407) Stop `depkeeper` from failing on yoshi version updates.

## 1.3.0 (Jun 10, 2018)
* [#346](https://github.com/wix-private/yoshi/pull/346) UglifyJs encoding non ascii characters.

## 1.2.6 (Jun 5, 2018)
* [#331](https://github.com/wix-private/yoshi/pull/331) Update all haste dependencies to have `~` so patches on haste tasks/core will get to the users

## 1.2.2 (May 8, 2018)
* update haste-task-typescript to v0.2.7 to support running on windows

## 1.2.1 (April 8, 2018)
* start releasing on `yoshi` exclusively, update release script to publish one package, and updated relatived paths from `haste-preset-yoshi` to `yoshi`.

## 1.2.0 (April 3, 2018)
* [#194](https://github.com/wix-private/yoshi/pull/194) Stop saving webpack stats on start command

## 1.1.2 (March 27, 2018)
* [#168](https://github.com/wix-private/yoshi/pull/168) Set default formatter for tslint to `stylish` and add `--format` option for `lint` command.

## 1.1.0 (March 25, 2018)
* [#188](https://github.com/wix-private/yoshi/pull/188) Add option to only separate CSS on production

## 1.0.48 (March 21, 2018)
* [#143](https://github.com/wix-private/yoshi/pull/143) Add `stylable-integration` require-hooks and transform functions for testing environments (jest + mocha)

## 1.0.47 (March 7, 2018)
* [#176](https://github.com/wix-private/yoshi/pull/176) Adding `ts` files to the glob pattern provided by `debug/mocha`.

## 1.0.46 (March 7, 2018)
  * [#177](https://github.com/wix-private/yoshi/pull/177) Fix: Remove webpack output from `start` & `test` commands.

## 1.0.45 (February 21, 2018)
  * [#156](https://github.com/wix-private/yoshi/pull/156) Inline wix tasks instead of using them as external packages
  * [#154](https://github.com/wix-private/yoshi/pull/154) Add `wix-bootstrap-*` to depcheck task

## 1.0.44 (February 18, 2018)
  * Start of manual releases (see commit history for changes in previous versions of [yoshi](https://github.com/wix/yoshi))
