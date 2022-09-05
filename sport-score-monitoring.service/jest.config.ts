import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: [
        "./__tests__/dotenv-config.js"
    ],
    modulePathIgnorePatterns:['./dist'],
    testPathIgnorePatterns: ['./__tests__/dotenv-config.js']
    
};

export default config;