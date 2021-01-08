# Final project React tuto with Mobx/React Router

## Docker

Instead of running directly from host:

- ["yarn start"] for dev mode,

- or ["yarn build", "http-server ./build"] to run production mode served with `http-server`,

you can build containers served by Nginx to reuse on Mac or Linux (images have been tagged):

- run the **build** version (rename "docker-compose.build -> docker-compose") Create builder container with Node and `yarn build` the static files, then run Nginx container to serve the copied static files

- run **dev** (current "docker-compose" runs dev mode). Docker-compose creates 2 containers on a network, one with Node/yarn serving, and one with Nginx reverse proxying, with mount binding the source code for live code changes with <code>CTRL R</code>

## React Router

ok

## Mobx

> Linting: -> Imperatively use `configure` to debug <https://mobx.js.org/configuration.html#linting-options>

Few rules

- if event `onClick`, use `action(()=> handleClick)`

- proxy `observer`: not 100% clear, when accessing `store.attribute` and `store.getter`, not `store.action()`...

- `runInAction` vs/within `useEffect` to update ...

## TODO : what is "reportwebvitals"?

## Lazy loading

done
