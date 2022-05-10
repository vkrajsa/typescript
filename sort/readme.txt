SETUP

1) src is folder where your write
2) build is folder that gets compiled file from tsc compiler
3) this is set up in tsconfig.js
- tsc init (creates tsconfig)
- check rootDir and outDir

4) type 'tsc' into command line
- tsc -w (this watches and automatically compiles)

5) Run compiled filed
- node build/index.js

6) Automate
- npm init -y (generate package.json)
- npm install nodemon
- npm isntall concurrently (running multiple scripts at the same time)

PROJECT INSTRUCTIONS