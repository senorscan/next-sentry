//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getNextConfig } = require('@nrwl/next/plugins/with-nx');
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

// module.exports = withNx(nextConfig);
module.exports = withSentryConfig(
  getNextConfig({
    ...nextConfig,
    sentry: {
      disableServerWebpackPlugin: false,
      disableClientWebpackPlugin: false,
      hideSourceMaps: true,
    },
  }),
  // sentryWebpackPluginOptions
);