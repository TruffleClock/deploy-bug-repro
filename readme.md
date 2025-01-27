# Steps to repro

- clone this repo
- deploy a project to Railway with 2 services: `backend` and `tika`
- set `backend` watch path to
    ```
    apps/backend/**
    ```

- set `tika` watch path to 
    ```
    apps/backend/**
    apps/tika/**
    ```

- make a change to `apps/backend/app.js`

- `backend` deploys but `tika` does not

# Context

I have multiple deployments within a single project; some have a single watch path and others have 2 watch paths.

When I push a change to `apps/backend` - only the `backend` deploys, tika does not even though it has `apps/backend/**` in the watch path.

It seems like the issue is when the watch path doesn't match the root directory I set in the "Source" section in Railway config.

# Observation


When pushing a change to `apps/backend`:

- root=`apps/backend` + watch=`apps/backend/**` = works

- root=`apps/tika` + watch=`apps/backend/**, apps/tika/**` = does not work

- root=`apps/tika` + watch=`apps/backend/**` = does not work

- root=`apps/tika` + watch=(empty) = works
