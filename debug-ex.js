const a= require('debug')('module:A')
const b= require('debug')('module:B')

a('Here is some info !')
b('Here is some  other info !')


// DEBUG=module:* node debug-ex