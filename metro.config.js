/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
var getBlacklistRE = function getBlacklistRE(){
  return new RegExp("(.*\\android\\.*|.*\\__fixtures__\\.*|node_modules[\\\\]react[\\\\]dist[\\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$");
}

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
    resolver: {
      "blacklistRE": getBlacklistRE(),
    }
  };
