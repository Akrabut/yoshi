---
id: runtime-API
title: Runtime API
sidebar_label: Runtime API
---

`yoshi-flow-editor-runtime` package provides a lot of useful helpers to reduce boilerplate for Out-of-iFrame apps.

### `WixSDK`
WixSDK is a Render Prop that provides [IStaticWix](https://github.com/wix-private/fed-infra/blob/master/js-sdk-wrapper/src/types.ts) object.

It renders a children function with `sdk` argument:
```tsx
import { WixSDK } from 'yoshi-flow-editor-runtime';

export default () =>
  <WixSDK>{sdk =>
    <SomeComp Wix={sdk.Wix} /> IStaticWix or null
  }</WixSDK>
```

`sdk.Wix` will be `null` if `WixSDK` is being used in Widget part and rendered in Viewer mode, so make sure you are checking if it's not `null` to use it.

##### Props:
**isEditor** - should be passed for Settings part. It triggers a `WixSDK`, so it will use strict types for `sdk.Wix` and it won't be *optional*.

*Settings.ts*
```tsx
import { WixSDK } from 'yoshi-flow-editor-runtime';

export default () =>
  <WixSDK isEditor>{sdk =>
    <SomeComp Wix={sdk.Wix} /> // IStaticWix
  }</WixSDK>
```

> We are currently working on implementing more runtime helpers