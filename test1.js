const path = require('node:path')
const ignore = require('ignore').default

const unignoreFiles = [
    '.prettierignore.deny-all',
    '.prettierignore.permit-test'
]

console.log('=============== Test 1 ===============')

const ignoreTest = ignore()

ignoreTest.add('*')

for (const unignoreFile of unignoreFiles) {
    ignoreTest.add(`!${unignoreFile}`)
}

;[...unignoreFiles, 'test1.js'].forEach((f) =>
    console.log(f, ignoreTest.test(path.join(`./${f}`)))
)
