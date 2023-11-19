import Timer from './src/renderer/src/Timer'
import * as repl from 'node:repl'
import * as fs from 'node:fs'

const timer = new Timer()

const replServer = repl.start('(00:00)>')
replServer.setupHistory('.repl_history', (err) => err && console.log('Repl history error:', err))
replServer.context.timer = timer
