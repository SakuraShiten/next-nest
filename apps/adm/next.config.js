/** @type {import('next').NextConfig} */
module.exports = {
    output: 'standalone',
    transpilePackages: [
        "@repo/ui",
        "@repo/api",
        "@repo/eslint-config",
        "@repo/typescript-config"
    ],
};
