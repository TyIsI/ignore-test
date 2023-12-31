# ignore-test

Testing `ignore` to confirm the problem is not in the ignore library.

## Setup

`yarn install`

## Run

### Testing ignore

`ls -1 test*.js | xargs -n 1 node`

### Testing prettier

By manually specifying the _deny-all_ and _permit-test_ files, we can emulate the behaviour of the default value of `.gitignore` and `.prettierignore` as if the `.gitignore` file masked everything.

#### Error behaviour

`ls -1 .prettierignore.* test*.js | xargs -n 1 yarn prettier --ignore-path .prettierignore.deny-all --ignore-path .prettierignore.permit-test --file-info | egrep -B 1 -w ignored`

#### Expected behaviour

```sh
cat .prettierignore.deny-all .prettierignore.permit-test > .prettierignore.combined
ls -1 .prettierignore.* test*.js | xargs -n 1 yarn prettier --ignore-path .prettierignore.combined --file-info | egrep -B 1 -w ignored
```
