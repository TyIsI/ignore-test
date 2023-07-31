const path = require('node:path')
const ignore = require('ignore').default

const unignoreFiles = [
    '.prettierignore.deny-all',
    '.prettierignore.permit-test'
]

console.log('=============== Test 2 ===============')

const ignoreTest = ignore()

ignoreTest.add('*')
ignoreTest.add(unignoreFiles.map((f) => `!${f}`).join('\n'))
;[...unignoreFiles, 'test1.js'].forEach((f) =>
    console.log(f, ignoreTest.test(path.join(`./${f}`)))
)
