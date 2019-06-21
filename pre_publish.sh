#!/usr/bin/env bash

DIST=dist
rm -rf $DIST
mkdir $DIST
mv netlify/* $DIST

for d in */ ; do
  base=$(basename $d)
  if [ $base == $DIST ] || [ $base == "netlify" ]; then
    continue
  fi
  cd $d; zip -r "../$DIST/${base}.zip" .; cd ..
done
