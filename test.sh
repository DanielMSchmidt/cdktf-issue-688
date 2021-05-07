#!/bin/bash

set -ex

for i in {1..100}; do
   echo "Run #$i"
   cdktf deploy --auto-approve
   cdktf destroy --auto-approve
done
