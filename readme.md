# Getting Started

1. Clone this repository to your local machine
2. run `npm install`
3. run `npm run start`

That's it! 😎

The scripts in `package.json` is also configured for hot reload, meaning whenever you modify a file while the script is running, eleventy and sass will automatically recompile. 

## Note to WSL Users
WSL, especially WSL2, has optimizations that allow it to run faster when data is stored under the Linux filesystem. So make sure you `git clone` into your Linux filesystem (e.g. `/home/<username>/`), and **not** your Windows filesystem. 

## Westwood Sans
To install Westwood Sans from its repository, run `git submodule init`
To update, run `git pull --recurse-submodules`