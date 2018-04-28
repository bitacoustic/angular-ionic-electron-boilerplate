Boilerplate to create a cross-platform application using Ionic with Angular 5.
- Electron is used to package the application for desktop.
- Ionic provides Cordova which allows building the application for iOS and Android.

## Dependencies
- Node.js / npm - https://nodejs.org/en/download/
- Ionic - `npm install -g ionic`
- Electron - `npm install -g electron`
- XCode (for iOS development)
- Android SDK (for Android development) - https://developer.android.com/studio/

## Development

### Preview
- `npm run serve` - local browser
- `npm run serve:ios` - XCode Simulator - iPad Air 2
- `npm run build:ios && ionic cordova run ios --target="iPad-Air-2"` - Run in iOS Simulator with a target from the available options in Device menu (replace space with hyphen)

## Setup steps
For posterity, there were the steps in terminal to set up this project:

```
// new project
ionic start merzi-ionic blank
cd merzi-ionic

// add platforms
npm install electron electron-builder foreman --save-dev // desktop
ionic cordova platform add ios
ionic cordova platform add android

// install plugins
ionic cordova plugin add cordova-plugin-screen-orientation
npm install --save @ionic-native/screen-orientation
```

## Resources
- https://ionicframework.com/docs/developer-resources/#
- https://medium.com/@LohaniDamodar/lets-make-desktop-application-with-ionic-3-and-electron-44316f82901d