const fs = require('node:fs')
const path = require('node:path')
const ignore = require('ignore').default

const ignoreFiles = ['.prettierignore.deny-all', '.prettierignore.permit-test']

const fileContents = ignoreFiles.reduce((c, f) => {
    c[f] = fs.readFileSync(f, 'utf-8')

    return c
}, {})

console.log('=============== Test 3 ===============')

const ignoreTest = ignore()

for (const ignoreFile of ignoreFiles) {
    ignoreTest.add(fileContents[ignoreFile])
}

;[...ignoreFiles, 'test1.js', 'test2.js', 'test3.js'].forEach((f) =>
    console.log(f, ignoreTest.test(path.join(`./${f}`)))
)
