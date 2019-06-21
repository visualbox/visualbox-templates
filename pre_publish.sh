#!/usr/bin/env bash

DIST=dist
rm -rf $DIST
mkdir $DIST
mv 404.html $DIST

for d in */ ; do
  base=$(basename $d)
  if [ $base == $DIST ]; then
    continue
  fi
  cd $d; zip -r "../$DIST/${base}.zip" .; cd ..
done
