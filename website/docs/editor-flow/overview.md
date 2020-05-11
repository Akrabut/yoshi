---
id: overview
title: Editor Flow Overview
sidebar_label: Editor Flow
---

## Introduction to Out-Of-Iframe
`out-of-iframe`(OOI) is a code name for a platform that enables creating Wix Apps that live in the Viewer's frame. It's similar to the old IFrame TPA but more performant. For more information head to the [official docs](https://bo.wix.com/wix-docs/client/client-frameworks#out-of-iframe).


### Environments
![excalidraw-202034141034 (1)](https://user-images.githubusercontent.com/1521229/81549372-4e322a80-9387-11ea-8d0a-2c3bd1cf38bc.png)
Each OOI app is constructed from components which are being consumed by 2 environments:

#### Viewer
The component will be rendered in a single frame, like regular Single Page App. It's needed mostly for performance and environemnt consistency between different components.

We shouldn't show settings panel component here, but will load worker script under the hood. This worker is running in different thread via [Web Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) for performance purposes. Components won't block the main thread with heavy calculations, or requests handling.

#### Editor
Currently, applications that are OOI on the Viewer still run inside an iFrame on the Editor.
We'll also emulate worker excecution, so components will act the same between editor and viewer parts.

Moreover, we can have specific Settings Modal (Panel), which will allow users to configure the component. To preserve and share the component's configuration between OOI Widget and Settings we can use [PublicData API](https://dev.wix.com/api/iframe-sdk/sdk/wix.data.public#sdk_wix.data.public_wixdatapublic).


### Components
Conceptually each component contains of `Widget` or `Page` (React Component rendered on both Viewer and Editor environments), `Settings Panel` (optional React Component rendered on Editor side) and `controller` ([Viewer platform controller](https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/lifecycle#client-viewer-platform_articles_lifecycle_createcontrollers), that runs in both Viewer and Editor).

### Editor Flow Concept
The main idea of using specific yoshi flow for building Out-of-iFrame apps is to provide best development experience.

By creating RFC for different features and trying to create a fruitfull discussion with community, we are able to save a lot of time for developers by providing solutions already based on best practices.

Moreover, we are activelly contibuting to platform part if we see that some features are missing here to provide good development veolicty.

For example, by just running `yoshi-flow-editor start` we'll open both editor and viewer URLs with specific query params forcing platform to load your local bundles. So w/o additional configuration developers can start working on apps in production environment.

The only thing Editor Flow is requiring from users is to follow common convention. This convention requires having strictly organized file structure, almost the same [next.js framework](https://nextjs.org/) does.

**Does all these mean that I shouldn't communicate with platform and just work on regular React app?**
It's our goal, but anyway you still need to use platform's API's. Our task is to create fully-typed and simple abstractions for it, so you'll work with additional APIs the most efficient way you can.
For example, we can't get rid of PublicData at all, but we can provide some useful API using `get` / `set`, so you won't be obligated with writing a lot of boilerplate acress the app.

### Types of apps Editor Flow Support
Currently we can support 2 types of apps: **Out of iFrame**  and **Platform** apps. 
Each project can be mixed with OOI and Platform components on the same time. It's useful for projects, which consist of Out of iFrame components, but want to gradullay migrate some of it to studio widgets. On the same time, some projects can be already mixed, so we shouldn't separate scopes we are working on.
Just running `yoshi-flow-editor start` can open a website containing installed both OOI and Platform Components with configured URL overrides to local bundles and HMR. Cool, right?

> It's a rare case and we didn't test mixed apps a lot, so on the initial stages it could be not stable enough, but we are trying to react lightning fast and happy to hear any feedback 🙂
