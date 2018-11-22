import React from 'react'
const reg = /(?:`(\s+|\S+)`)/

const replaceCode = str => str.replace(reg, (_, c) => <code>c</code>)

const __fliterReduce = cb => (cur, acc, index) => {
  if (cb(acc, index)) {
    cur.push(acc)
  }
  return cur
}

const arr = [2, 4, 6]

const equalTwo = item => item === 2

const result = arr.reduce(__fliterReduce(equalTwo))

export { replaceCode, reg }