//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getNextConfig, withNx } = require('@nrwl/next/plugins/with-nx');
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

const sentryWebpackPluginOptions = {
  silent: true

};
// module.exports = withNx(nextConfig);
module.exports = withSentryConfig(
  withNx({
    ...nextConfig,
    sentry: {
      disableServerWebpackPlugin: false,
      disableClientWebpackPlugin: false,
      hideSourceMaps: true,
    },
  }),
  sentryWebpackPluginOptions
);