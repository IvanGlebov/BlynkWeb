# BlynkWeb

Project created for managing and using my smart home devices. 

Smart devices connect to my Blynk server located on Raspberry Pi 3B+. As I own a public IP-address, I can host this site anywhere and still control devices.

If web-server is running, you can can got to the page at https://dashboard.iota02.keenetic.link/dashboard

## Installing

Before installation update packages with ```sudo apt update```

If you don't have git installed use ```sudo apt install git```

Before beginnin clone project by running this command
```
git clone https://github.com/IvanGlebov/BlynkWeb
```
If you don't have Node installed use ```sudo apt install npm```.

Go to folder 'BlynkWeb' and run ```npm install```.

Then go to the folder 'web-client' and run ```npm install``` again.

To run Web server in dev mode go to folder 'web-client' and run ```npm start```.


## Dashboard
This is the main page in the application.

Here you can find smart-blocks - elemnts of dashboard created for a specific device in my house.
Now works only "Main Lamp" - lamp on my table. I don't mind if you'll try to turn in on/off, but, please, don't do it on night time.
Settings now don't work because the lamp controller now doesn't use them. (New version of code for it is coming soon)

## Mobile version won't be released soon
I don't have a lot time for this, and I can always use the Blynk app on my phone to perform the same operations as from site, or even more.
## Web interface image
<img src="/gitSrc/Dashboard_img.png" width="900px">

