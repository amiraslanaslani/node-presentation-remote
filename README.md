# Presentation Remote JS
A simple network-based remote control with NodeJS (and [node-key-sender module][https://github.com/garimpeiro-it/node-key-sender], that used in project, uses Java).
Currently, these can be controlled:
+ System volume. (increase, decrease, mute and unmute)
+ Up, Down, Left and Right buttons.
+ PageUp and PageDown buttons.
+ Home and End buttons.

## Usage
If we assume that the program is in the /Path/To/PresentationRemoteJS folder, you must use the following command to run:
```
node /Path/To/PresentationRemoteJS
```
Then you should see the output that says:
```
Open below address(es) in browser:
http://<IP-ADDRESS>:8888
```
And now you have access to your system from http://<IP-ADDRESS>:8888 .

## Note:
I'm not a NodeJS programmer and this is my first project in NodeJS; For this reason this is not a clean and pretty code! I will try to clean it and make it more professional at my leisure time.
