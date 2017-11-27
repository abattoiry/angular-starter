# Angular4 Scaffolding for Connext

- [Angular4 Scaffolding for Connext](#angular4-scaffolding-for-connext)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
    - [Keep your folk synced](#keep-your-folk-synced)
  - [Modules](#modules)
    - [Authorization](#authorization)
      - [AccountService(account.service.ts)](#accountserviceaccountservicets)
      - [AuthService(auth.service.ts)](#authserviceauthservicets)
      - [AuthInterceptor(auth.interceptor.ts)](#authinterceptorauthinterceptorts)
      - [UserRouteAccessService(user-route-access-service.ts)](#userrouteaccessserviceuser-route-access-servicets)

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

```bash
angular-starter/
│   └──src/
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

Intercepting every request and inject authorization info into it's header.

#### UserRouteAccessService(user-route-access-service.ts)

UserRouteAccessService is used in every .routes.ts file, to provide required "canActive" service.

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
