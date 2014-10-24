Meteor Todo App
===============

from the official meteor example app:

  meteor create --example todos --release 1.0-rc.7

run 1.0:
  
  meteor --release 1.0-rc.7
  
All credit goes to meteor.com and percolatestudio.com

Links
=====

Dok: https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration

Build apk
=========

  meteor add-platform android

  meteor deploy todosarea.meteor.com
  meteor build builds --server=todosarea.meteor.com

  cd builds
  keytool -genkey -alias todosarea -keyalg RSA -keysize 2048 -validity 10000

  cd builds/android/
  jarsigner -digestalg SHA1 unaligned.apk todosarea
  ~/.meteor/android_bundle/android-sdk/build-tools/20.0.0/zipalign 4 unaligned.apk todosarea.apk

