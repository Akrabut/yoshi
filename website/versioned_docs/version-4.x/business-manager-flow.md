---
id: business-manager-flow
title: Business-Manager Flow Overview
sidebar_label: Business-Manager Flow
---

> 🧪 Experimental 

## Overview
The Business-Manager is Wix's backoffice platform.
For more information on the platform, see the [official docs](https://github.com/wix-private/business-manager/).   

Yoshi's Business-Manager Flow favors Convention over Configuration by abstracting away the following concepts:

### Module Bundle
BM Flow auto-generates a module bundle file for you, which will automatically register the necessary pages & public API for your application at runtime.

### Pages
Adding Page Components to your application is as simple as creating a new file somewhere in the special `src/pages` directory:

```typescript jsx
// src/pages/index.tsx

export default () => {
  useEffect(() => {
    notifyViewFinishedLoading('<YOUR_PAGE_COMPONENT_NAME>');
  }, []);

  return <Page>...</Page>;    
};
```

#### Route
The pages' route will be determined by the page file's path relative to the root `src/pages` directory, prefixed with the [`routeNamespace` config option](#routenamespace).
For example:

| Path | Route |
| --- | --- |
| `src/pages/index.tsx` | `/` |
| `src/pages/foo.tsx` | `/foo` |
| `src/pages/foo/bar.tsx` | `/foo/bar` |

### Exported Components
Similar to [pages](#pages), exposing components from your Business-Manager module is done by creating a new file in the special `src/exported-components` directory:

```typescript jsx
// src/exported-components/shared-modal.tsx

export default () => {
  return <Modal>...</Modal>; 
};
``` 

### Methods
Exposing methods from your Business-Manager module is done by creating files in the special `src/methods` directory:

```typescript
// src/methods/some-method.ts

export default () => {
  // Do plenty of things
};
```

## Initial Setup
Run `EXPERIMENTAL_FLOW_BM=true npx create-yoshi-app` & choose template `flow-bm`.

This will bootstrap a new Business-Manager application, along with a single (root) page.

## Development
Run `npx yoshi-bm start` to start your Business-Manager application.
This serves your module bundles on http://localhost:3200.

> In the future, we'll launch your application in production Business-Manager automatically.  

## Deployment
Run `npx yoshi-bm build` to build your Business-Manager application.
This builds your module bundle and generates a working `module_MODULE_ID.json` file in your `target` directory, for your [integration with Business-Manager](https://github.com/wix-private/business-manager/blob/master/business-manager-web/docs/module-config-file.md).

## Testing
Run `npx yoshi-bm test` to run your tests with the configured test runner (Jest by default). Pass `--watch` to start it in watch mode.

## Customization

### Module-level Configuration
The following configurations are available by creating a `.module.json` file:
```json
{
  "moduleId": "my-module",
  "routeNamespace": "my-route",
  "topology": {
      "someArtifactsUrl": {
        "artifactId": "com.wixpress.some-artifact"      
      }
  }
}
```
---
#### `moduleId`
Use this to override your `moduleId`.
Defaults to your `artifactId`.

#### `routeNamespace`
This prefixes all your pages with the given string.
Defaults to `''`.

#### `topology`
Sets your application's topology template. Defaults to: 
```json
{ 
  "staticsUrl": {
    "artifactId": "<YOUR_ARTIFACT_ID>" 
  } 
}
```

### Page-level Configuration
Pages can be customized by adding a `*.json` file with the same name as the appropriate page.
For example, the `src/pages/some-route.tsx` file, will be configured by `src/pages/some-route.json`:

```json
{
  "componentId": "some-component-id",
  "componentName": "some-component-name"
}
```

#### `page.componentId`
Sets the page's `componentId`. Defaults to `<MODULE_ID>.pages.<FILE_NAME>`.

#### `page.componentName`
Sets the page's `componentName`. Defaults to `<MODULE_ID>.pages.<FILE_NAME>`.

### Exported Component-level Configuration
Exported components can be customized by adding a `*.json` file with the same name as the appropriate component file.
For example, the `src/exported-components/some-component.tsx` file, will be configured by `src/exported-components/some-component.json`:

```json
{
  "componentId": "some-component-id"
}
```

#### `exported-component.componentId`
Sets the component's `componentId`. Defaults to `<MODULE_ID>.componented.<FILE_NAME>`.

### Method-level Configuration
Methods can be customized by adding a `*.json` file with the same name as the appropriate method file.
For example, the `src/methods/some-method.ts` file, will be configured by `src/methods/some-method.json`:

```json
{
  "methodId": "some-method-id"
}
```

#### `exported-component.componentId`
Sets the component's `componentId`. Defaults to `<MODULE_ID>.componented.<FILE_NAME>`.

### Run code in BM's `init()` phase 
Create a file `src/moduleInit.{ts,js}`, for example:

```typescript
export default () => {
  configModule('<YOUR_MODULE_ID>', '<SOME_MODULE>', { /* ... */ });
};
```
