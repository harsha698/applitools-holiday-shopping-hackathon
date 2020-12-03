module.exports = {
    appName: 'AppliFashion',
    showLogs: false,
    batchName: 'Holiday Shopping',
    browser: [
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {width: 1200, height: 800, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {width: 1200, height: 800, name: 'edgechromium'},
        {width: 1200, height: 800, name: 'safari'},
    ],
    concurrency: 10
};
