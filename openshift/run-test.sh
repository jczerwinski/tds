#!/bin/sh

## Runs `yarn run test:ci` against a container on OpenShift. Used by the Test stage of the Jenkinsfile.
## Usage: ./run-test.sh tds latest

NAME=${1}
VERSION=${2:-latest}
IMAGESTREAM=`oc get imagestream ${NAME} -o='jsonpath={.status.dockerImageRepository}'`

oc run ${NAME}-${VERSION} \
  --image=${IMAGESTREAM}:${VERSION} \
  --rm=true \
  --attach=true \
  --restart=Never \
  --overrides='{
    "apiVersion":"v1",
    "spec":{
      "containers":[{
        "name": "'${NAME}'-'${VERSION}'",
        "image": "'${IMAGESTREAM}':'${VERSION}'",
        "command":["yarn", "run", "test:ci"]
      }]
    }
  }'
