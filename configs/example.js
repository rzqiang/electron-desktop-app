module.exports = {
    hooks: {
        generateAssets: async () => {
            const fs = require('fs');
            fs.writeFile('config.json', JSON.stringify({
                APP_URL: 'http://blog.coder98.com/'
            }), (err) => {
                if (err) throw err;
            });
        }
    },
    make_targets: {
        win32: [
            'squirrel'
        ],
        darwin: [
            'dmg'
        ],
        linux: [
            'deb'
        ]
    },
    electronPackagerConfig: {
        name: 'zz_app',
        packageManager: 'npm',
        icon: './images/favicon.icon'
    },
    electronWinstallerConfig: {
        name: 'zz_app',
        authors: 'rzqiangchina@gmail.com',
        owners: 'rzqiangchina@gmail.com',
        description: 'zz_app',
        iconUrl: 'http://blog.coder98.com/images/favicon.png',
        setupIcon: './images/favicon.ico',
        loadingGif: './images/loading.gif'
    },
    electronInstallerDMG: {
        icon: './images/favicon.icns'
    },
    electronInstallerDebian: {},
    electronInstallerRedhat: {},
    github_repository: {
        owner: '',
        name: ''
    },
    windowsStoreConfig: {
        packageName: 'zz_app',
        name: 'zz_app'
    }
};
