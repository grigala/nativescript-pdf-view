import { NativeScriptConfig } from '@nativescript/core'

export default {
    id: 'de.mynethome.nativescriptpdfviewdemo',
    appPath: 'app',
    appResourcesPath: 'app/App_Resources',
    android: {
        v8Flags: '--expose_gc',
        markingMode: 'none',
    },
    cli: {
        packageManager: "npm"
    },
    useLegacyWorkflow: false,
} as NativeScriptConfig;
