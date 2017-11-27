const logger = (strategy, level, message, ...args) => {
  return strategy(level, message, ...args)
}

const logToConsoleStrategy = (level, message) =>
  console[level](message)

const logToDOMStrategy = (level, message, node) =>
  node.innerHTML = `<div class='${level}'>${message}</div>`



logger(
  logToConsoleStrategy,
  'warn',
  'log first message to console'
)

logger(
  logToDOMStrategy,
  'warn',
  'log second message to DOM',
  document.querySelector('#log')
)