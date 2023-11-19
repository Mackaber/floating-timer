import Timer from './src/renderer/src/Timer'
import * as repl from 'node:repl'

const timer = new Timer()

const replServer = repl.start()
replServer.context.timer = timer
