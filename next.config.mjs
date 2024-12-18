/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {
        loader: 'imgix',
        path: 'https://tmisun.github.io/',
    },
    assetPrefix: '/sun',
};

export default nextConfig;
