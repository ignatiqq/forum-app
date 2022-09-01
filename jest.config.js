const folderAliases = ['constants', 'api', 'utils', 'store', 'pages', 'routes', '_tests_'];

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
    ...getModuleNameMapperByArray(folderAliases),
    '^@atoms(.*$)': `<rootDir>/src/components/atoms`
  }
};
