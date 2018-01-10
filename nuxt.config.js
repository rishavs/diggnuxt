const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'diggnuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },
    plugins: ['~/plugins/vuetify.js'],
    css: [
        '~/assets/style/app.styl'
    ],
    /*
    ** Customize the progress bar color
    */
    loading: { 
        color: 'blue',
        height: '2px' 
    },

    mode:'spa',
    modules: [
        '@nuxtjs/pwa'
    ],
    plugins: [
        '~/plugins/checkAuth'],

    /*
    ** Build configuration
    */
    build: {
        babel: {
            plugins: [
                ["transform-imports", {
                    "vuetify": {
                        "transform": "vuetify/es5/components/${member}",
                        "preventFullImport": true
                    }
                }]
            ]
        },
        vendor: [
            '~/plugins/vuetify.js',
            'firebase'
        ],
        extractCSS: true,
        /*
        ** Run ESLint on save
        */
        extend (config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options : {
                                fix : true
                        }
                })
            }
            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ]
            }
        }
    }
}
