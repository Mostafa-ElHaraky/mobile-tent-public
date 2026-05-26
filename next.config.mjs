/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    poweredByHeader: false,
    reactStrictMode: true,

    images: {
        unoptimized: false,
        remotePatterns: [
            {
                protocol: '',
                hostname: '',
                pathname: '',
            },
        ],
    },

    productionBrowserSourceMaps: false,
    compress: true,
    typescript: {
        ignoreBuildErrors: false,
    },

    // 🔽 ADD THIS REWRITES SECTION
    async rewrites() {
        return [
            {
                source: '/upload/:path*',
                destination: '',
            },
        ];
    },

    async redirects() {
        return [
            {
                source: '/:slug(^arochnyy-|^angar-|^bolshoy-|^bystrosbornye-|^glemping-|^karkasno-|^klassicheskiy-|^kupolnyy-|^mobilnye-|^naduvnoy-|^pergola-|^sfera-|^shatyor-|^tentovyy-|^zont-)',
                destination: '/tent/:slug',
                permanent: true,
            },
        ];
    },

    async headers() {
        const securityHeaders = [
            {
                key: 'X-DNS-Prefetch-Control',
                value: 'on'
            },
            {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload'
            },
            {
                key: 'X-XSS-Protection',
                value: '1; mode=block'
            },
            {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN'
            },
            {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
            },
            {
                key: 'Referrer-Policy',
                value: 'origin-when-cross-origin'
            },
        ];

        return [
            {
                source: '/search',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                ],
            },
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;