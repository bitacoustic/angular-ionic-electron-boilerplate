# Angular with Ionic and Electron boilerplate

A cross-platform application using Angular 5 with Electron and Ionic.
- Electron is used to package the application for desktop.
- Ionic provides Cordova, which allows packaging for iOS (and Android, etc.).

## Dependencies
- Node.js / npm - https://nodejs.org/en/download/
- Ionic - `npm i -g ionic`
- Electron (for Windows/Mac/Linux desktop application) - `npm i -g electron`
- *Windows development*:
    - If building for Windows on Windows, no special Electron dependencies are required.
    - When building the project for Windows on a Mac, Electron looks for Wine as a dependency (i.e. it must be installed even if you have no intention of running the build on your dev machine). See https://www.davidbaumgold.com/tutorials/wine-mac/ for Wine installation instructions. If you have XCode installed you may need a recent version for Wine to install correctly.
- *iOS development*:
    - Mac with XCode
    - `npm i -g ios-deploy`
- *Android development*: Android SDK - https://developer.android.com/studio/
    - [Documentation and build process pending]

## Development

### Serve and build scripts

| Platform       | Browser             | Electron                 | iOS                              | Android
| ---------------|---------------------|--------------------------|----------------------------------|-------------------------|
| Serve          | `npm run serve`     | `npm run serve:electron` | `npm run serve:ios`<sup>*</sup>  |                         |
| Build          | `npm run build`     | `npm run build:electron` | `npm run build:ios`              | `npm run build:android` |

<sup>*</sup>Runs in XCode Simulator with default device as iPad Air 2. To run in XCode Simulator with a target device from the available options in Device menu:
`ionic cordova build ios && ionic cordova run ios --target="iPad-Air-2"`

### Development process
Use Chrome for local development. Use the DevTools device toolbar to simulate the different production environments i.e. Windows (Chromium browser) and IOS tablet. Ionic/Cordova will add appropriate classes to the `<ion-app>` tag which can be hooked on to for platform-specific features and styling. If you change the simulated device in DevTools, refresh the page to trigger the device-specific classes. The three specific device scenarios are:

##### Local development
i.e. viewing in browser as non-mobile device
```html
<ion-app class="app-root app-root-md md platform-core enable-hover" ng-version="5.2.10"></ion-app>
```

##### Running application in Electron
```html
<ion-app class="app-root app-root-md md platform-core platform-electron enable-hover" ng-version="5.2.10"></ion-app>
```

##### Running on iOS (or iOS device preview in Chrome)
This scenario shows iPad with iOS11. Note the `platform-ios11` and `platform-ipad` classes.
```html
<ion-app class="app-root app-root-ios ios platform-mobile platform-ios platform-ios11 platform-ios11_0
platform-tablet platform-ipad platform-mobileweb" ng-version="5.2.10"></ion-app>
```

### Project setup
For posterity, these were the essential steps in terminal to set up this project:

```
// new project
ionic start angular-ionic-electron-boilerplate blank
cd angular-ionic-electron-boilerplate

// add platforms
npm install electron electron-builder foreman --save-dev // desktop
ionic cordova platform add ios
npm i -g ios-deploy
ionic cordova platform add android

// install plugins
ionic cordova plugin add cordova-plugin-screen-orientation
ionic cordova plugin add cordova-plugin-hidden-statusbar-overlay
npm i --save @ionic-native/screen-orientation
```

Other worthwhile plugins:
- https://github.com/gshigeto/ionic-environment-variables

## Resources
- https://ionicframework.com/docs/developer-resources/#
- https://medium.com/@LohaniDamodar/lets-make-desktop-application-with-ionic-3-and-electron-44316f82901d
- https://electronjs.org/docs
