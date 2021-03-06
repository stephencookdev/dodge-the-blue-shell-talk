const Bundler = require('parcel-bundler');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const Prerenderer = require('@prerenderer/prerenderer');
const Puppeteer = require('@prerenderer/renderer-puppeteer');
const htmlnano = require('htmlnano');
const prettyMs = require('pretty-ms');

const bundler = new Bundler('src/index.html', {
    watch: false,
    publicUrl: process.env.PUBLIC_URL,
});

bundler.on('buildEnd', async () => {
    if (process.env.NODE_ENV !== 'production') return;
    console.log('');
    const spinner = ora(chalk.grey('Prerendering')).start();
    let routes = ['/']; // the default route
    let rendererConfig = {};

    const { outDir } = bundler.options;

    const publicPathOutDir = `${outDir}${process.env.PUBLIC_URL}`;
    mkdirp.sync(publicPathOutDir);
    execSync(`find ${outDir} -maxdepth 1 -type f | xargs -I {} cp {} ${publicPathOutDir}`);

    const prerenderer = new Prerenderer({
        staticDir: outDir,
        renderer: new Puppeteer(rendererConfig),
    });
    try {
        await prerenderer.initialize();
        const start = Date.now();
        const renderedRoutes = await prerenderer.renderRoutes(routes);
        await Promise.all(renderedRoutes.map(async route => {
        const outputDir = path.join(outDir, route.route);
        const file = path.resolve(outputDir, 'index.html');
        mkdirp.sync(outputDir);
        const { html } = await htmlnano.process(route.html.trim());
        // eslint-disable-next-line no-sync
        fs.writeFileSync(file, html);
        }));
        execSync(`rm -rf ${publicPathOutDir}`);
        const end = Date.now();
        spinner.stopAndPersist({
        symbol: '✨ ',
        text: chalk.green(`Prerendered in ${prettyMs(end - start)}.`),
        });
    } catch (error) {
        console.error(error);
        // eslint-disable-next-line unicorn/no-process-exit, no-process-exit
        process.exit(1);
    } finally {
        prerenderer.destroy();
    }
});

bundler.bundle();