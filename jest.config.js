const folderAliases = [
  'constants',
  'api',
  'utils',
  'store',
  'pages',
  'routes',
  '_tests_',
  'assets',
  'shared',
  'layouts'
];

function getModuleNameMapperByArray(data) {
  const finalObj = {};

  data.forEach((item) => {
    finalObj[`^@${item}(.*$)`] = `<rootDir>/src/${item}$1`;
  });

  return finalObj;
}

module.exports = {
  preset: 'ts-jest',
  transform: {
    '.(ts|js)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/utils/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/src/utils/assetsTransformer.js',
    ...getModuleNameMapperByArray(folderAliases),
    '^@atoms(.*$)': `<rootDir>/src/components/atoms$1`,
    '^@molecules(.*$)': `<rootDir>/src/components/molecules$1`,
    '^@organisms(.*$)': `<rootDir>/src/components/organisms$1`,
    '^@styles(.*$)': `<rootDir>/src/assets/styles$1`
  }
};
