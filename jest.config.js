// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testMatch: [
    '<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)',
  ],
  preset: 'ts-jest'
  ,
  transform: {
    // '^.+\\.jsx?$': 'babel-jest',  // 启用此项需要安装 babel 依赖.
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['jest-enzyme'],   // 添加 jest 测试工具模块
  testEnvironment: 'enzyme',            // 定义测试时的代码环境
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',            // 定义 enzyme 环境版本为 react16 (默认值)
  },
  verbose:true,
  moduleNameMapper:{
    "\\.(jpg|jpeg|png|gif|svg)$":"<rootDir>/tests/mocks/fileMock.js",
    "\\.s?[ac]ss$":"<rootDir>/tests/mocks/objectMock.js"
  }
};
