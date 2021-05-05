# Client container (React.js, TypeScript)

**Possible errors:**

* Be careful with `node-sass`;  if you install the wrong version of `node-sass` (defined in `package.json`) or the wrong version of Node.js (set in `Dockerfile`), you will get errors on container instantiation. The problem is that `node-sass` doesn't support the latest Node.js, so we have to use an old one.
* For the same reason, don't install the latest version of `node-sass`
* You may get an error related to `awesome-typescript-loader`; to fix it run `npm i --save-dev awesome-typescript-loader --force`
