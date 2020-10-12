function GetDateTime() {
  const result = {}
  const l_Now = new Date();
  let l_Date = ('00' + l_Now.getDate()).slice(-2);
  let l_Month = '';
  switch (l_Now.getMonth()) {
    case 0:
      l_Month = "января";
      break;
    case 1:
      l_Month = "февраля";
      break;
    case 2:
      l_Month = "марта";
      break;
    case 3:
      l_Month = "апреля";
      break;
    case 4:
      l_Month = "мая";
      break;
    case 5:
      l_Month = "июня";
      break;
    case 6:
      l_Month = "июля";
      break;
    case 7:
      l_Month = "августа";
      break;
    case 8:
      l_Month = "сентября";
      break;
    case 9:
      l_Month = "октября";
      break;
    case 10:
      l_Month = "ноября";
      break;
    case 11:
      l_Month = "декабря";
      break;
  }
  let l_Year = ('0000' + l_Now.getFullYear()).slice(-4);
  let l_Hours = ('00' + l_Now.getHours()).slice(-2);
  let l_Minutes = ('00' + l_Now.getMinutes()).slice(-2);
  let l_Seconds = ('00' + l_Now.getSeconds()).slice(-2);
  result.date = l_Date + ' ' + l_Month + ' ' + l_Year;
  result.time = l_Hours + ':' + l_Minutes;
  return result
}


function FillingCells(dataArr, parent, tagElem) {
  const currentCount = parent.children
  const dataCount = dataArr.length
  let count = 0
  const pages = []
  pages[count] = []
  dataArr.forEach(_elem => {
    if (Array.isArray(_elem)) {
      if (_elem.length < 2) {
        return
      }
      const tr = document.createElement('tr')
      FillingCells(_elem, tr, tagElem)
      parent.appendChild(tr)
      if (document.body.offsetHeight > (window.innerHeight * (count + 1))) {
        count++
        pages[count] = []
      }
      pages[count].push(tr)
      return
    }
    const elem = document.createElement(tagElem)
    if (_elem !== _elem) {
      _elem = '-'
    }
    elem.innerHTML = _elem
    parent.appendChild(elem)
  })
  if (currentCount > dataCount) {
    for (; currentCount > dataCount; dataCount++) {
      parent.children[dataCount].remove();
    }
  }
  return pages
}
const viewPage = (rows, parent) => {
  parent.innerHTML = ''
  rows.forEach(tr => {
    parent.appendChild(tr)
  })
}

function ViewPages(pages, parent, timeout = 15000) {
  let idx = 0
  viewPage(pages[idx], parent)
  return setInterval(() => {
    idx = idx % pages.length
    viewPage(pages[idx], parent)
    idx++
  }, timeout)
}

function getParametrValueFromURI(param) {
  const search = location.search.substring(1)
  if (!search) {
    return null
  }
  const args = search.split('&')
  for (let i = 0; i < args.length; i++) {
    const pair = args[i].split('=')
    if (pair[0] === param && pair[1]) {
      return pair[1]
    }
  }
  return null
}

module.exports = {GetDateTime, FillingCells, ViewPages, getParametrValueFromURI}