# nativescript-pdf-view

This is a very basic PDF view implementation that does only one thing, and
that is to display PDF files. It conveniently uses the iOS `UIWebView`, but
for Android it uses AndroidPdfView.

This plugin does the bare minimum required to render the PDF, no configuration
options, and no error handling have been built yet. I welcome all Pull Requests!

# Usage

##

Check out the demo folder for a sample usage.

## Angular 2

If you're using the plugin with Angular 2, the plugin automatically registers
`PDFView` as a valid tag for Angular templates. Usage is simple:

1. Make sure to import `nativescript-pdf-view` somewhere in your code, e.g:

  ```ts
  import 'nativescript-pdf-view';
  ```

2. Include the tag in your template:

  ```html
  <PDFView [src]="'http://www.pdf995.com/samples/pdf.pdf'"></PDFView>
  ```

# Try the Demo

To try the demo, `cd` into the `demo` folder, and run the following commands:

```sh
npm install

# iOS
tns platform add ios
tns run ios

# Android
tns platform add android@2.2.0-next-2016-08-02-918
tns run android  # try again if you get error "more than one library ..."
```

## Why the dependency on `android@next` platform

I've been getting all kinds of different issues trying to run this plugin with
the latest released version of `tns-core-modules` and `tns-android` runtime, and
the issues don't appear to exist in the current pre-release versions. Therefore
for the time being I've set the dependencies to pre-release versions.