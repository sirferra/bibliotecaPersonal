# nx commands to generate apps
## start
``` shell
npx create-nx-workspace  
```
``` shell
yarn add -g nx 
```
``` shell
yarn add -D @nx/react @nx/webpack @nx/devkit @nx/eslint-plugin @nx/jest @nx/js @nx/linter @nx/react @nx/storybook @nx/vite
```

### react apps

## host app
``` shell
nx g @nx/react:host --name=host-shell --devServerPort=4000 --directory=apps --e2eTestRunner=none --globalCss=true --pascalCaseFiles=true --setParserOptionsProject=true --style=scss --tags=host-shell
```

## remote app
``` shell
nx g @nx/react:remote --name=authPage --devServerPort=4002 --directory=apps/authPage --host=host-shell --e2eTestRunner=none --globalCss=true --pascalCaseFiles=true --routing=true --setParserOptionsProject=true --style=css --tags=authPage
```

### api and node apps
``` shell
nx_ADD_PLUGINS=false yarn exec nx g app api --bundler webpack --e2eTestRunner none --directory apps/api --verbose
```