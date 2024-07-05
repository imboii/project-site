#!/bin/bash

echo "[+] Building packages now!"
dpkg-scanpackages -m ./debs > Packages
cp Packages Packages.temp
bzip2 Packages -f
mv Packages.temp Packages
echo "[+] Done building packages!"