import filedirname from 'filedirname'

// usage
const [__filename, __dirname] = filedirname()
console.log({ __filename, __dirname })
