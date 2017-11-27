# Angular4 Scaffolding for Connext

- [Angular4 Scaffolding for Connext](#angular4-scaffolding-for-connext)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
    - [Keep your folk synced](#keep-your-folk-synced)
  - [Added Files](#added-files)

## Overview

This Scaffolding is made for Connext, provides the generic foundation for most Angualr4 projects. It is built based on [Angular Webpack Starter](https://github.com/gdi2290/angular-starter#quick-start), please learn all the basics, such as fork, install and build there. Be aware to replace the original Git URL with current Git URL.

## Prerequisites

### Keep your folk synced

After you folk and you create a local clone of your folk, you need to configure Git to sync your folk with this repository.

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

## Added Files

```bash
angular-starter/
│   ├──src/
│       ├── app
│           └── shared
│               ├── auth
│               │   ├── account.service.ts
│               │   ├── auth-jwt.service.ts
│               │   ├── auth.interceptor.ts
│               │   ├── csrf.service.ts
│               │   ├── has-any-authority.directive.ts
│               │   ├── principal.service.ts
│               │   ├── state-storage.service.ts
│               │   └── user-route-access-service.ts
│               ├── global.service.ts
│               ├── logger.service.ts
│               └── shared.module.ts
```