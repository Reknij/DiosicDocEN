---
title: Self Compile
date: 2022-12-26 22:01:36
categories:
    - Installation
---
# Compile and install by yourself
## Download the source code
1. `git clone https://github.com/Reknij/diosic`
2. `cd diosic`

Running the above command will download the source code from `GitHub` and enter the directory where the source code is located.

## Server
1. Run `cd server` to enter the backend source code and run the following command:
     ```
     cargo build --release
     ```
2. According to your compiling platform, copy the `diosic` or `diosic.exe` program file to the directory you want.

     For example, copy it to the root directory after compiling on the linux platform:
     ```
     cp ./target/release/diosic /diosic
     ```

## Diosic Web
If you want *Diosic* web pages, remember to compile the frontend too.

1. Run `cd web` in the `server` directory to enter the directory where the source code is located and run the following command:
     ```
     npm install
     npm run build
     ```
2. Copy the `./dist` directory to the directory where the back-end `diosic` program is located and rename it to `webpage`. For example, the `diosic` program is in the root directory:
    ```
    mkdir /webpage
    cp -r dist/* /webpage
    ```
# Run to start
Pass arguments to the `diosic` file program to start:
```
/diosic -d /your_data_directory -l "your_library_name;your_library_directory"
```
The meanings of the parameters are as follows:
- `-d` is your `data` directory, where the cache and data files are placed.
- `-l` is your media library name and directory. The format is `name;directory`. For example `MyMusic;/music`

# Result
Open the browser and enter your ip address + port number `3177` to open `Diosic Web`:
```
http://127.0.0.1:3177
```