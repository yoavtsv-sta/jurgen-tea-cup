const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const config = createJestConfig({
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.js'],
})

module.exports = config
