build({
    entryPoints: [`builds/cdn.js`],
    outfile: `dist/alpine-query-string.min.js`,
    bundle: true,
    minify: true,
    platform: 'browser',
    define: { CDN: true },
})

build({
    entryPoints: [`builds/module.js`],
    outfile: `dist/alpine-query-string.esm.js`,
    bundle: true,
    platform: 'neutral',
    mainFields: ['module', 'main'],
})

build({
    entryPoints: [`builds/module.js`],
    outfile: `dist/alpine-query-string.cjs.js`,
    bundle: true,
    target: ['node10.4'],
    platform: 'node',
})

function build(options){
    options.define || (options.define = {})
    options.define['process.env.NODE_ENV'] = process.argv.includes('--watch') ? `'production'` : `'development'`

    return require('esbuild').build({
        watch: process.argv.includes('--watch'),
        // external: ['alpinejs'],
        ...options,
    }).catch(() => process.exit(1))
}
