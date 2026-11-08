// Configuração necessária para o expo-sqlite funcionar na web.
// Docs: https://docs.expo.dev/versions/v57.0.0/sdk/sqlite/
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// O SQLite na web roda via WebAssembly.
config.resolver.assetExts.push('wasm');

// Cabeçalhos exigidos pelo SharedArrayBuffer, usado pelo SQLite na web (servidor de desenvolvimento).
config.server.enhanceMiddleware = (middleware) => {
  return (req, res, next) => {
    res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    middleware(req, res, next);
  };
};

module.exports = config;
