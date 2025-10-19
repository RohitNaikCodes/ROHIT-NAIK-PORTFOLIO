/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'skillicons.dev',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'github-readme-stats.vercel.app',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
