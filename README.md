Meteor Todo App
===============

Running on todosarea.meteor.com

Clone from the official meteor example app:

    meteor create --example todos --release 1.0-rc.7

run 1.0:
  
    meteor --release 1.0-rc.7
  
All credit goes to meteor.com and percolatestudio.com

Links
=====

* https://github.com/meteor/meteor/wiki/Mobile-Dev-Install:-Android-on-Mac#haxm
* https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration

Build apk
=========

    meteor install-sdk android
    meteor add-platform android

    meteor deploy todosarea.meteor.com
    meteor build builds --server=todosarea.meteor.com

    cd builds/android/
    keytool -genkey -alias todosarea -keyalg RSA -keysize 2048 -validity 10000
    jarsigner -digestalg SHA1 unaligned.apk todosarea
    ~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/zipalign 4 unaligned.apk todosarea.apk

