const CSV = require('./classes/csv-parser')
const common = require('./common')
require('./styles/style.sass')

let data = {}
const title = document.getElementById('title')
const head = document.getElementById('table-head')
const body = document.getElementById('table-body')
const dateTag = document.querySelector('#currentDate>h1')
const timeTag = document.querySelector('#currentTime>h1')
const elem = {
  th: 'th',
  td: 'td'
}
const param = {
  timeout: 'timeout'
}

let timerID

let timeout = common.getParametrValueFromURI(param.timeout)
timeout = (timeout && timeout > 2000) ? timeout : 15000

const getDateTime = () => {
  const dateTime = common.GetDateTime()
  dateTag.innerHTML = dateTime.date
  timeTag.innerHTML = dateTime.time
}
getDateTime()
setInterval(getDateTime, 10000)

async function getData() {
  const resp = await fetch('data.csv')
  const text = await resp.text()

  const csv = new CSV()

  data = csv.parse(text)
  console.log('data', data)
  title.innerHTML = data.head[0]
  head.children[1].remove()
  common.FillingCells([data.head[1]], head, elem.th)
  body.innerHTML = ''
  const pages = await common.FillingCells(data.body, body, elem.td)
  timerID = common.ViewPages(pages, body, timeout)
}
getData()

// setInterval(getData, 10000)

const input = document.getElementById('file')
const form = document.getElementById('form')
if (form) {
  form.action = '/upload'
  form.method = 'POST'
  form.enctype = 'multipart/form-data'
}

input.onchange = event => {
  form.submit()
}
const subscribeChanges = () => {
  fetch('/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      if (data.reload) {
        console.log('client: reload')
        clearInterval(timerID)
        setTimeout(getData, 100)
      }
      subscribeChanges()
    })
    .catch(err => {
      console.log('err subscribe:', err)
      document.location.reload(true)
    })
}
subscribeChanges()