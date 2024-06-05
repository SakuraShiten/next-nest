import {defineConfig} from '@kubb/core'
import createSwagger from '@kubb/swagger'
import createSwaggerTanstackQuery from '@kubb/swagger-tanstack-query'
import createSwaggerTS from '@kubb/swagger-ts'
import createSwaggerClient from '@kubb/swagger-client'

/** @type {import('@kubb/core').UserConfig} */
export const config = {
    root: '.',
    input: {path: 'http://localhost:5000/openapi-json'},
    output: {path: './src/gen', clean: true},
    plugins: [
        createSwagger({output: false,}),
        createSwaggerTS({
            output: {path: 'models'},
        }),
        createSwaggerClient({
            framework: 'react',
            client: {importPath: './../../tanstack-query-client'},
            exclude: [{type: 'tag', pattern: 'store'}],
            transformers: {name: (name) => name.replace('Controller', '')},
        }),
        createSwaggerTanstackQuery({
            output: {path: './hooks'},
            framework: 'react',
            client: {importPath: './../../tanstack-query-client'},
            exclude: [{type: 'tag', pattern: 'store'}],
            transformers: {name: (name) => name.replace('Controller', '')},
        })
    ]
}

export default defineConfig(config)