import commonjs from '@rollup/plugin-commonjs';
import pluginjson from '@rollup/plugin-json';
import packageInfo from './package.json';

export default {
    input: 'dist/src/index.js',
    output: {
        file: packageInfo.name + '.js',
        format: 'cjs',
        exports: 'auto'
    },
    plugins: [commonjs(), pluginjson({ exclude: '*' })],
    external: [
        'fs',
        ...Object.keys(packageInfo.dependencies),
        ...Object.keys(packageInfo.devDependencies)
    ]
};
