const parseCsvField = _Field => {
  if(_Field.indexOf('"') == 0 && _Field.lastIndexOf('"') == _Field.length-1) {
    return _Field.substring(1, _Field.length-1)
  } else if(!isNaN(_Field)) {
    return parseFloat(_Field)
  }
  return _Field
}
class CSV {
  constructor() {
    if (CSV.exist) {
      return CSV.instance
    }
    this.opts = {
      delimeter: ",",
      parseHeader: true,
      // skipFirstRow: 0,
    }

    CSV.instance = this
    CSV.exist = true
  }
  parse(_str, opts) {
    opts = Object.assign(this.opts, opts)
    const str = _str.replace(/\r/g,"")
    let result = {};
    let rows = str.split('\n');
    if (opts.parseHeader) {
      const title = rows[0].split(opts.delimeter).join(' ').trim()
      result.head = [title]
      const head = rows[1].split(opts.delimeter)
      result.head.push(head.map(elem => parseCsvField(elem)))
      rows = rows.slice(2)
    }
    result.body = rows.map(item => item.split(opts.delimeter).map(elem => parseCsvField(elem)))
    return result
  }
  stringify(data, opts) {
    let result = ''
    if (!Array.isArray(data)) {
      console.warn('data for rows is not array')
      return result
    }
    data.forEach(row => {
      if (row.length == 1) {
        return
      }
      result += row.join(',') + '\n'
    })
    return result
  }
}
module.export = CSV