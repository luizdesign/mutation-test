module.exports = function(config) {
  config.set({
    mutate: ["src/**/*.js"],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    testFramework: "jest",
    plugins: [
      'stryker-jest-runner',
      'stryker-html-reporter',
      'stryker-javascript-mutator'
    ],
    transpilers: [],
    coverageAnalysis: './coverage/',
    symlinkNodeModules: false,
    timeoutMs: 60000,
  });
};
