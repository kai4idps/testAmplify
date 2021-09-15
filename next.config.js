const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true" // analyze .next folder bundle
});

const nextConfig = {
	devtool: "source-map",
	trailingSlash: true,
	distDir: "build",
	webpack5: true,
	webpack: config => {
		config.resolve.alias = {
			...config.resolve.alias,
			react: "preact/compat",
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat",
			"@material-ui/core": "@material-ui/core/esm"
		};

		return config;
	}
};

module.exports = withBundleAnalyzer(nextConfig);
