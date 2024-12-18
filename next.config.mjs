/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {
        loader: 'imgix',
        path: 'https://tmisun.github.io/sun/',
    },
    assetPrefix: 'https://tmisun.github.io/sun/',
};

export default nextConfig;
