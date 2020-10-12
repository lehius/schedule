/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./classes/csv-parser.js":
/*!*******************************!*\
  !*** ./classes/csv-parser.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var parseCsvField = function parseCsvField(_Field) {
  if (_Field.indexOf('"') == 0 && _Field.lastIndexOf('"') == _Field.length - 1) {
    return _Field.substring(1, _Field.length - 1);
  } else if (!isNaN(_Field)) {
    return parseFloat(_Field);
  }

  return _Field;
};

var CSV = /*#__PURE__*/function () {
  function CSV() {
    _classCallCheck(this, CSV);

    if (CSV.exist) {
      return CSV.instance;
    }

    this.opts = {
      delimeter: ",",
      parseHeader: true // skipFirstRow: 0,

    };
    CSV.instance = this;
    CSV.exist = true;
  }

  _createClass(CSV, [{
    key: "parse",
    value: function parse(_str, opts) {
      opts = Object.assign(this.opts, opts);

      var str = _str.replace(/\r/g, "");

      var result = {};
      var rows = str.split('\n');

      if (opts.parseHeader) {
        var title = rows[0].split(opts.delimeter).join(' ').trim();
        result.head = [title];
        var head = rows[1].split(opts.delimeter);
        result.head.push(head.map(function (elem) {
          return parseCsvField(elem);
        }));
        rows = rows.slice(2);
      }

      result.body = rows.map(function (item) {
        return item.split(opts.delimeter).map(function (elem) {
          return parseCsvField(elem);
        });
      });
      return result;
    }
  }, {
    key: "stringify",
    value: function stringify(data, opts) {
      var result = '';

      if (!Array.isArray(data)) {
        console.warn('data for rows is not array');
        return result;
      }

      data.forEach(function (row) {
        if (row.length == 1) {
          return;
        }

        result += row.join(',') + '\n';
      });
      return result;
    }
  }]);

  return CSV;
}();

module.export = CSV;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./common.js":
/*!*******************!*\
  !*** ./common.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function GetDateTime() {
  var result = {};
  var l_Now = new Date();
  var l_Date = ('00' + l_Now.getDate()).slice(-2);
  var l_Month = '';

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

  var l_Year = ('0000' + l_Now.getFullYear()).slice(-4);
  var l_Hours = ('00' + l_Now.getHours()).slice(-2);
  var l_Minutes = ('00' + l_Now.getMinutes()).slice(-2);
  var l_Seconds = ('00' + l_Now.getSeconds()).slice(-2);
  result.date = l_Date + ' ' + l_Month + ' ' + l_Year;
  result.time = l_Hours + ':' + l_Minutes;
  return result;
}

function FillingCells(dataArr, parent, tagElem) {
  var currentCount = parent.children;
  var dataCount = dataArr.length;
  var count = 0;
  var pages = [];
  pages[count] = [];
  dataArr.forEach(function (_elem) {
    if (Array.isArray(_elem)) {
      if (_elem.length < 2) {
        return;
      }

      var tr = document.createElement('tr');
      FillingCells(_elem, tr, tagElem);
      parent.appendChild(tr);

      if (document.body.offsetHeight > window.innerHeight * (count + 1)) {
        count++;
        pages[count] = [];
      }

      pages[count].push(tr);
      return;
    }

    var elem = document.createElement(tagElem);

    if (_elem !== _elem) {
      _elem = '-';
    }

    elem.innerHTML = _elem;
    parent.appendChild(elem);
  });

  if (currentCount > dataCount) {
    for (; currentCount > dataCount; _readOnlyError("dataCount"), dataCount++) {
      parent.children[dataCount].remove();
    }
  }

  return pages;
}

var viewPage = function viewPage(rows, parent) {
  parent.innerHTML = '';
  rows.forEach(function (tr) {
    parent.appendChild(tr);
  });
};

function ViewPages(pages, parent) {
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15000;
  var idx = 0;
  viewPage(pages[idx], parent);
  return setInterval(function () {
    idx = idx % pages.length;
    viewPage(pages[idx], parent);
    idx++;
  }, timeout);
}

function getParametrValueFromURI(param) {
  var search = location.search.substring(1);

  if (!search) {
    return null;
  }

  var args = search.split('&');

  for (var i = 0; i < args.length; i++) {
    var pair = args[i].split('=');

    if (pair[0] === param && pair[1]) {
      return pair[1];
    }
  }

  return null;
}

module.exports = {
  GetDateTime: GetDateTime,
  FillingCells: FillingCells,
  ViewPages: ViewPages,
  getParametrValueFromURI: getParametrValueFromURI
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CSV = __webpack_require__(/*! ./classes/csv-parser */ "./classes/csv-parser.js");

var common = __webpack_require__(/*! ./common */ "./common.js");

__webpack_require__(/*! ./styles/style.sass */ "./styles/style.sass");

var data = {};
var title = document.getElementById('title');
var head = document.getElementById('table-head');
var body = document.getElementById('table-body');
var dateTag = document.querySelector('#currentDate>h1');
var timeTag = document.querySelector('#currentTime>h1');
var elem = {
  th: 'th',
  td: 'td'
};
var param = {
  timeout: 'timeout'
};
var timerID;
var timeout = common.getParametrValueFromURI(param.timeout);
timeout = timeout && timeout > 2000 ? timeout : 15000;

var getDateTime = function getDateTime() {
  var dateTime = common.GetDateTime();
  dateTag.innerHTML = dateTime.date;
  timeTag.innerHTML = dateTime.time;
};

getDateTime();
setInterval(getDateTime, 10000);

function getData() {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var resp, text, csv, pages;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('data.csv');

          case 2:
            resp = _context.sent;
            _context.next = 5;
            return resp.text();

          case 5:
            text = _context.sent;
            csv = new CSV();
            data = csv.parse(text);
            console.log('data', data);
            title.innerHTML = data.head[0];
            head.children[1].remove();
            common.FillingCells([data.head[1]], head, elem.th);
            body.innerHTML = '';
            _context.next = 15;
            return common.FillingCells(data.body, body, elem.td);

          case 15:
            pages = _context.sent;
            timerID = common.ViewPages(pages, body, timeout);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}

getData(); // setInterval(getData, 10000)

var input = document.getElementById('file');
var form = document.getElementById('form');

if (form) {
  form.action = '/upload';
  form.method = 'POST';
  form.enctype = 'multipart/form-data';
}

input.onchange = function (event) {
  form.submit();
};

var subscribeChanges = function subscribeChanges() {
  fetch('/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    if (data.reload) {
      console.log('client: reload');
      clearInterval(timerID);
      setTimeout(getData, 100);
    }

    subscribeChanges();
  }).catch(function (err) {
    console.log('err subscribe:', err);
    document.location.reload(true);
  });
};

subscribeChanges();

/***/ }),

/***/ "./styles/style.sass":
/*!***************************!*\
  !*** ./styles/style.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map