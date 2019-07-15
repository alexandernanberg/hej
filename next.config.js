/* eslint-disable import/no-extraneous-dependencies */
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const bundleAnalyzerPlugin = require('@next/bundle-analyzer')

const withBundleAnalyzer = bundleAnalyzerPlugin({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  },
})
