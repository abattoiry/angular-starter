# Angular4 Scaffolding for Connext

- [Angular4 Scaffolding for Connext](#angular4-scaffolding-for-connext)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
    - [Keep your folk synced](#keep-your-folk-synced)
  - [Modules](#modules)
    - [Authorization](#authorization)
      - [File Structure](#file-structure)
      - [AccountService(account.service.ts)](#accountserviceaccountservicets)
      - [AuthService(auth.service.ts)](#authserviceauthservicets)
      - [AuthInterceptor(auth.interceptor.ts)](#authinterceptorauthinterceptorts)
      - [UserRouteAccessService(user-route-access-service.ts)](#userrouteaccessserviceuser-route-access-servicets)
    - [Global](#global)
      - [File Structure](#file-structure)
      - [GlobalInterceptor(global.interceptor.ts)](#globalinterceptorglobalinterceptorts)
      - [GlobalService(global.service.ts)](#globalserviceglobalservicets)
    - [Components](#components)
      - [File Structure](#file-structure)
      - [atoms(Folder)](#atomsfolder)
      - [molecules(Folder)](#moleculesfolder)
      - [organisms(Folder)](#organismsfolder)
    - [Styles](#styles)
      - [File Structure](#file-structure)
      - [Styles(styles.scss)](#stylesstylesscss)
      - [Variables(_variables.scss)](#variablesvariablesscss)

## Overview

This Scaffolding is made for Connext, which provides the generic foundation for most Angualr4 projects. It is built based on [Angular Webpack Starter](https://github.com/gdi2290/angular-starter#quick-start), please learn all the basics, such as fork, install and build there. Be aware to replace the original Git URL with current Git URL.

## Prerequisites

### Keep your folk synced

After you folk and create a local clone of your folk, you need to configure Git to sync your folk with this repository.

```bash
# change directory to your repo
cd angular-starter

# check current configured remote repository for your fork
git remote -v

# add this repo as upstream
git remote add upstream https://github.com/abattoiry/angular-starter

# verify the new upstream
git remote -v
```

## Modules

### Authorization

#### File Structure

```bash
angular-starter
│   └──src
│       └── app
│           └── shared
│               ├── auth
│               │   ├── account.service.ts
│               │   ├── auth.service.ts
│               │   ├── auth.interceptor.ts
│               │   ├── csrf.service.ts
│               │   ├── has-any-authority.directive.ts
│               │   ├── principal.service.ts
│               │   ├── state-storage.service.ts
│               │   └── user-route-access-service.ts
│               └── shared.module.ts
```

#### AccountService(account.service.ts)

AccountService provides functions related to account, such as get and update user info.

#### AuthService(auth.service.ts)

AuthService provides functions releted to Auth, such as login, logout.

#### AuthInterceptor(auth.interceptor.ts)

AuthInterceptor intercepts every request and inject authorization info into it's header.

#### UserRouteAccessService(user-route-access-service.ts)

UserRouteAccessService is used in every .routes.ts file, to provide required "canActive" service. For example:

<pre>
export const routes = [
  {
    path: '',
    children: [
      { path: '', component: DetailComponent },
      { path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
    ],
    <b>canActivate: [UserRouteAccessService]</b>,
  },
];
</pre>

### Global

#### File Structure

```bash
angular-starter
│   └──src
│       └── app
│           └── shared
│               ├── global.interceptor.ts
│               └── global.service.ts
```

#### GlobalInterceptor(global.interceptor.ts)

GlobalInterceptor intercepts and manufactures every request, such as insert origin url.

#### GlobalService(global.service.ts)

GlobalService consist of many utility functions that can be used globally, such as download file, key value pair. Feel free to add more functions.

### Components

Components module contains many cutomized component, inspired by [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/).

#### File Structure

```bash
angular-starter
│   └──src
│       └── app
│           └── shared
│              └── components
│                 ├── atoms
│                 │   ├── atoms.module.ts
│                 │   ├── buttons
│                 │   ├── icons
│                 │   ├── images
│                 │   └── links
│                 ├── molecules
│                 │   ├── calendar
│                 │   ├── carousel
│                 │   ├── molecules.module.ts
│                 │   └── popup
│                 └── organisms
│                     ├── footer
│                     ├── header
│                     ├── menu
│                     └── organisms.module.ts
```

#### atoms(Folder)

In the words of Brad Frost:
> If atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces. These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.

#### molecules(Folder)

In the words of Brad Frost:
> In interfaces, molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.

#### organisms(Folder)

In the words of Brad Frost:
> Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

### Styles

#### File Structure

```bash
angular-starter
│   └──src
│       └── styles
│           ├── _variables.scss
│           ├── headings.css
│           └── styles.scss
```

#### Styles(styles.scss)

Global styles.

#### Variables(_variables.scss)

Variables of global styles.