# Final project React tuto with Mobx/React Router

## Docker

Two versions:

- run the **build** version. Create builder container with Node and `yarn build` the static files, then run Nginx container to serve the copied static files

- run **dev**. Docker-compose creates 2 containers on a network, one with Node/yarn serving, and one with Nginx reverse proxying, with mount binding the source code for live code changes with <code>CTRL R</code>

## React Router

ok

## Mobx

Few rules

- if event `onClick`, use `action(()=> handleClick)`

- proxy `observer`: not 100% clear, when accessing `store.attribute` and `store.getter`, not `store.action()`...

- `runInAction` within `useEffect` to update ...

## TODO : what is "reportwebvitals"?

## Lazy loading

done
