/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

:root {
  font-size: 15px;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  --green: rgb(67, 212, 140);
  --gray: rgb(240, 240, 240);
}

#nav {
  background-color: var(--green);
  height: 50px;
  display: flex;
  align-items: center;
}

#header {
  color: white;
  padding-left: 20px;
  font-size: 1.5rem;
}

#sidebar {
  background-color: var(--gray);
  border-right: 1px solid rgb(184, 184, 184);
}

#main-content {
  display: grid;
  grid-template-columns: 250px max-content;
  height: 100vh;
}

#todo-items #project-name {
  padding-top: 40px;
  padding-left: 40px;
  font-size: 1.5rem;
}

.menu {
  padding-top: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  height: 20px;
}

.menu button:nth-child(-n + 2) {
  font-weight: 300;
  font-size: 15px;
  font-family: Roboto, sans-serif;
  border: none;
}

.menu button:nth-child(-n + 2):hover {
  color: rgb(0 0 0 / 0.5);
}

.menu button:nth-child(3) {
  border: none;
  color: red;
  font-size: 1.5rem;
}

.menu button:nth-child(3):hover {
  color: rgba(255, 0, 0, 0.5);
  transform: scale(1.5);
}

.menu:nth-child(4) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
}

button {
  cursor: pointer;
}

#add-task-button {
  width: 40px;
  height: 40px;
  font-size: 2em;
  font-weight: bold;
  border-radius: 50%;
  border: none;
  background-color: var(--green);
  color: white;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 60px;
  margin-right: 60px;
}

#add-task-button:hover {
  filter: brightness(1.1);
  transform: scale(1.1);
}

#todo-items #new-task {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  outline: 0;
  border-radius: 15px;
  width: 50%;
  height: 25%;
}

.modal-header {
  background-color: var(--green);
  color: white;
  padding: 10px;
  font-weight: 300;
}

#todo-items #new-task .formclass {
  padding-left: 45px;
  padding-right: 45px;
  display: grid;
  gap: 10px;
}

.formclass input:not(#due-date),
.formclass textarea {
  border-width: 0 0 1px;
  font-family: Roboto, sans-serif;
  padding: 5px;
  font-size: 1rem;
}

.formclass #due-date {
  border: none;
  width: 250px;
}

.formclass textarea {
  resize: none;
}

#new-task .formclass label {
  width: 120px;
}

.formclass select {
  background-color: var(--gray);
  border: none;
  width: 250px;
}

.formclass {
  display: flex;
  gap: 5px;
}

.formclass input[type='date'] {
  box-sizing: border-box;
  background-color: var(--gray);
}

.formclass #saveBtn {
  background-color: var(--green);
}

.formclass #cancelBtn {
  background-color: darkgray;
}

#new-task .formclass button {
  margin-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.formclass button {
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: bold;
}

.formclass button:hover {
  filter: brightness(1.1);
}

.form-buttons,
#new-task .formclass div {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 10px;
}

#new-project-dialog {
  width: 250px;
  border: none;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  outline: 0;
  border-radius: 15px;
  position: absolute;
  top: 150px;
  left: 250px;
}

#new-project-dialog .formclass {
  display: grid;
  justify-content: center;
  align-items: center;
}

#new-project-dialog button {
  padding: 5px 20px 5px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,+BAA+B;EAC/B,gBAAgB;EAChB,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,SAAS;EACT,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,uCAAuC;EACvC,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,qBAAqB;EACrB,+BAA+B;EAC/B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,uCAAuC;EACvC,UAAU;EACV,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 15px;\n  box-sizing: border-box;\n  font-family: Roboto, sans-serif;\n  font-weight: 300;\n  --green: rgb(67, 212, 140);\n  --gray: rgb(240, 240, 240);\n}\n\n#nav {\n  background-color: var(--green);\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n\n#header {\n  color: white;\n  padding-left: 20px;\n  font-size: 1.5rem;\n}\n\n#sidebar {\n  background-color: var(--gray);\n  border-right: 1px solid rgb(184, 184, 184);\n}\n\n#main-content {\n  display: grid;\n  grid-template-columns: 250px max-content;\n  height: 100vh;\n}\n\n#todo-items #project-name {\n  padding-top: 40px;\n  padding-left: 40px;\n  font-size: 1.5rem;\n}\n\n.menu {\n  padding-top: 20px;\n  padding-left: 20px;\n  display: flex;\n  align-items: center;\n  height: 20px;\n}\n\n.menu button:nth-child(-n + 2) {\n  font-weight: 300;\n  font-size: 15px;\n  font-family: Roboto, sans-serif;\n  border: none;\n}\n\n.menu button:nth-child(-n + 2):hover {\n  color: rgb(0 0 0 / 0.5);\n}\n\n.menu button:nth-child(3) {\n  border: none;\n  color: red;\n  font-size: 1.5rem;\n}\n\n.menu button:nth-child(3):hover {\n  color: rgba(255, 0, 0, 0.5);\n  transform: scale(1.5);\n}\n\n.menu:nth-child(4) {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 20px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n#add-task-button {\n  width: 40px;\n  height: 40px;\n  font-size: 2em;\n  font-weight: bold;\n  border-radius: 50%;\n  border: none;\n  background-color: var(--green);\n  color: white;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin-bottom: 60px;\n  margin-right: 60px;\n}\n\n#add-task-button:hover {\n  filter: brightness(1.1);\n  transform: scale(1.1);\n}\n\n#todo-items #new-task {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: none;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n  outline: 0;\n  border-radius: 15px;\n  width: 50%;\n  height: 25%;\n}\n\n.modal-header {\n  background-color: var(--green);\n  color: white;\n  padding: 10px;\n  font-weight: 300;\n}\n\n#todo-items #new-task .formclass {\n  padding-left: 45px;\n  padding-right: 45px;\n  display: grid;\n  gap: 10px;\n}\n\n.formclass input:not(#due-date),\n.formclass textarea {\n  border-width: 0 0 1px;\n  font-family: Roboto, sans-serif;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.formclass #due-date {\n  border: none;\n  width: 250px;\n}\n\n.formclass textarea {\n  resize: none;\n}\n\n#new-task .formclass label {\n  width: 120px;\n}\n\n.formclass select {\n  background-color: var(--gray);\n  border: none;\n  width: 250px;\n}\n\n.formclass {\n  display: flex;\n  gap: 5px;\n}\n\n.formclass input[type='date'] {\n  box-sizing: border-box;\n  background-color: var(--gray);\n}\n\n.formclass #saveBtn {\n  background-color: var(--green);\n}\n\n.formclass #cancelBtn {\n  background-color: darkgray;\n}\n\n#new-task .formclass button {\n  margin-top: 10px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.formclass button {\n  color: white;\n  border: none;\n  border-radius: 15px;\n  font-weight: bold;\n}\n\n.formclass button:hover {\n  filter: brightness(1.1);\n}\n\n.form-buttons,\n#new-task .formclass div {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  gap: 10px;\n}\n\n#new-project-dialog {\n  width: 250px;\n  border: none;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n  outline: 0;\n  border-radius: 15px;\n  position: absolute;\n  top: 150px;\n  left: 250px;\n}\n\n#new-project-dialog .formclass {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n#new-project-dialog button {\n  padding: 5px 20px 5px 20px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/todo-app.js":
/*!*************************!*\
  !*** ./src/todo-app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   general: () => (/* binding */ general),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");
/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list.js */ "./src/todo-list.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.js */ "./src/view.js");





const projects = []; // stores all todo-lists created

function printListOfProjects() {
  projects.forEach((list) => {
    console.log('TITLE: ' + list.title);
    if (list.todos[0]) {
      for (let i = 0; i < list.todos.length; i++) {
        console.log(
          'TODO ITEM: ' +
            list.todos[i].title +
            '\nCOMPLETED: ' +
            list.todos[i].completed
        ); // print all to do items in each list
      }
    } else {
      console.log('This list contains no todo items');
    }
    console.log(''); // used for seperation of lists
  });
}

// default list
// export to enter items into this list when no list is provided
const general = (0,_todo_list_js__WEBPACK_IMPORTED_MODULE_2__.createTodoList)('General');

// test
const shoppingList = (0,_todo_list_js__WEBPACK_IMPORTED_MODULE_2__.createTodoList)('ShoppingList');
const christmasList = (0,_todo_list_js__WEBPACK_IMPORTED_MODULE_2__.createTodoList)('Christmas Wish List');

const item1 = (0,_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)(
  'Buy Milk',
  'Get Soy or Oatmilk',
  'April 13 2024',
  shoppingList,
  _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.PRIORITIES.LOW
);

const item2 = (0,_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)(
  'Buy Shoes',
  'Store closes at 10 PM',
  'April 13 2024',
  general,
  _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.PRIORITIES.MEDIUM,
  false
);

const item3 = (0,_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)(
  'Buy a new hat',
  'Store closed on weekends',
  'April 13 2024',
  general,
  _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.PRIORITIES.HIGH,
  true
);

printListOfProjects();
const display = (0,_view_js__WEBPACK_IMPORTED_MODULE_3__.displayController)();


/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRIORITIES: () => (/* binding */ PRIORITIES),
/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem)
/* harmony export */ });
/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-app */ "./src/todo-app.js");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list */ "./src/todo-list.js");




// Create a todo object using factories (we will create as many as user wants)
function createTodoItem(
  title = '',
  description = '',
  dueDate = Date.now(),
  todoList = _todo_app__WEBPACK_IMPORTED_MODULE_0__.general, // if you don't specify which list, it goes into general
  priority = PRIORITIES.LOW,
  completed = false
  // consider adding a checkbox = false to keep track of completion of task
) {
  const todoItemData = {
    title,
    description,
    dueDate,
    todoList,
    priority,
    completed,
  };

  // push todoItemData into the corresponding todoList todos array
  todoList.addTodoItem(todoItemData);

  // functions to update each attribute
  function updateTitle(newTitle) {
    title = newTitle;
  }

  function updateDescription(newDescription) {
    description = newDescription;
  }

  function updateDueDate(newDueDate) {
    dueDate = newDueDate;
  }

  function updateTodoList(newLocation) {
    todoList = newLocation;
  }

  function updatePriority(newPriority) {
    priority = newPriority;
  }

  function updateCompletion(newStatus) {
    completed = newStatus;
  }

  return {
    todoItemData,
    updateTitle,
    updateDescription,
    updateDueDate,
    updateTodoList,
    updatePriority,
    updateCompletion,
  };
}

// Enum for priority/urgency level
const PRIORITIES = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
};


/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoList: () => (/* binding */ createTodoList)
/* harmony export */ });
/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-app */ "./src/todo-app.js");


// Create a todo list using factory functions (we will need to create multiple todo lists)
function createTodoList(title) {
  const todoListData = {
    title,
    todos: [],
  };

  _todo_app__WEBPACK_IMPORTED_MODULE_0__.projects.push(todoListData);

  function updateTodoListName(newTitle) {
    todoListData.title = newTitle;
  }

  function findItem(title) {
    todoListData.todos.forEach((item, index) => {
      if (item.title === title) {
        return index;
      } else {
        return false;
      }
    });
  }

  function addTodoItem(todoItem) {
    if (findItem(todoListData.title) === false) {
      console.log('Error. This item is already included.');
    } else {
      todoListData.todos.push(todoItem);
    }
  }

  function deleteTodoItem(todoItem) {
    const itemSearched = findItem(todoListData.title); // itemSearched returns index
    if (itemSearched === false) {
      console.log('Error. This item is not found.');
    } else {
      todoListData.todos.splice(itemSearched, 1);
    }
  }

  return { todoListData, updateTodoListName, addTodoItem, deleteTodoItem };
}


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayController: () => (/* binding */ displayController)
/* harmony export */ });
// DisplayController factory function here
function displayController() {
  // new Date needs to be the user's timezone
  // then fix the length UI issue
  const datePicker = (document.getElementById('due-date').valueAsDate =
    new Date());

  // open and close task modal
  const newTaskModal = (function () {
    const addTodoItemButton = document.getElementById('add-task-button');
    const taskDialog = document.querySelector('#new-task');
    const taskCloseButton = document.querySelector('#new-task button');

    addTodoItemButton.addEventListener('click', () => {
      taskDialog.showModal();
    });

    taskCloseButton.addEventListener('click', () => {
      taskDialog.close();
    });
  })();

  // open and close project modal
  const newProjectModal = (function () {
    const addProjectsButton = document.getElementById('add-project-button');
    const projectDialog = document.querySelector('#new-project-dialog');
    const projectCloseButton = document.querySelector(
      '#new-project-dialog button'
    );

    addProjectsButton.addEventListener('click', () => {
      projectDialog.showModal();
    });

    projectCloseButton.addEventListener('click', () => {
      projectDialog.close();
    });
  })();

  // handle updating project header text on click
  const updateProjectHeader = (function () {
    const todoItemsDiv = document.getElementById('todo-items');
    const currentProjectHeader = document.createElement('p');
    currentProjectHeader.setAttribute('id', 'project-name');
    const buttons = document.querySelectorAll('.btn');
    // have 'All Tasks' display as initial value on refresh
    // TODO: have it handle the projects we create in the submenu as well
    const initialValue = document.getElementById('initial-value');
    currentProjectHeader.textContent = initialValue.value;
    todoItemsDiv.appendChild(currentProjectHeader);
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        currentProjectHeader.textContent = e.target.value;
        todoItemsDiv.appendChild(currentProjectHeader);
      });
    });
  })();

  // TODO: add new projects to submenu
  // have a General project always present

  return {};
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todo-app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1B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QXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjpyb290IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtLWdyZWVuOiByZ2IoNjcsIDIxMiwgMTQwKTtcbiAgLS1ncmF5OiByZ2IoMjQwLCAyNDAsIDI0MCk7XG59XG5cbiNuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2hlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuI3NpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE4NCwgMTg0LCAxODQpO1xufVxuXG4jbWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBtYXgtY29udGVudDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI3RvZG8taXRlbXMgI3Byb2plY3QtbmFtZSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubWVudSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLm1lbnUgYnV0dG9uOm50aC1jaGlsZCgtbiArIDIpIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tZW51IGJ1dHRvbjpudGgtY2hpbGQoLW4gKyAyKTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyAwLjUpO1xufVxuXG4ubWVudSBidXR0b246bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm1lbnUgYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4ubWVudTpudGgtY2hpbGQoNCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2FkZC10YXNrLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbn1cblxuI2FkZC10YXNrLWJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbiN0b2RvLWl0ZW1zICNuZXctdGFzayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2IoMCAwIDAgLyAwLjIpO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDI1JTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jdG9kby1pdGVtcyAjbmV3LXRhc2sgLmZvcm1jbGFzcyB7XG4gIHBhZGRpbmctbGVmdDogNDVweDtcbiAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uZm9ybWNsYXNzIGlucHV0Om5vdCgjZHVlLWRhdGUpLFxuLmZvcm1jbGFzcyB0ZXh0YXJlYSB7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mb3JtY2xhc3MgI2R1ZS1kYXRlIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5mb3JtY2xhc3MgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbiNuZXctdGFzayAuZm9ybWNsYXNzIGxhYmVsIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uZm9ybWNsYXNzIHNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmZvcm1jbGFzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4uZm9ybWNsYXNzIGlucHV0W3R5cGU9J2RhdGUnXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xufVxuXG4uZm9ybWNsYXNzICNzYXZlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuXG4uZm9ybWNsYXNzICNjYW5jZWxCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuI25ldy10YXNrIC5mb3JtY2xhc3MgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtY2xhc3MgYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9ybWNsYXNzIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xufVxuXG4uZm9ybS1idXR0b25zLFxuI25ldy10YXNrIC5mb3JtY2xhc3MgZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI25ldy1wcm9qZWN0LWRpYWxvZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYigwIDAgMCAvIDAuMik7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMjUwcHg7XG59XG5cbiNuZXctcHJvamVjdC1kaWFsb2cgLmZvcm1jbGFzcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbmV3LXByb2plY3QtZGlhbG9nIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgLS1ncmVlbjogcmdiKDY3LCAyMTIsIDE0MCk7XFxuICAtLWdyYXk6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuI25hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTg0LCAxODQsIDE4NCk7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jdG9kby1pdGVtcyAjcHJvamVjdC1uYW1lIHtcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tZW51IHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5tZW51IGJ1dHRvbjpudGgtY2hpbGQoLW4gKyAyKSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm1lbnUgYnV0dG9uOm50aC1jaGlsZCgtbiArIDIpOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMCAwIDAgLyAwLjUpO1xcbn1cXG5cXG4ubWVudSBidXR0b246bnRoLWNoaWxkKDMpIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1lbnUgYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5tZW51Om50aC1jaGlsZCg0KSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jdG9kby1pdGVtcyAjbmV3LXRhc2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiKDAgMCAwIC8gMC4yKTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMjUlO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jdG9kby1pdGVtcyAjbmV3LXRhc2sgLmZvcm1jbGFzcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm1jbGFzcyBpbnB1dDpub3QoI2R1ZS1kYXRlKSxcXG4uZm9ybWNsYXNzIHRleHRhcmVhIHtcXG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5mb3JtY2xhc3MgI2R1ZS1kYXRlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuLmZvcm1jbGFzcyB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNuZXctdGFzayAuZm9ybWNsYXNzIGxhYmVsIHtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLmZvcm1jbGFzcyBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5mb3JtY2xhc3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uZm9ybWNsYXNzIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbi5mb3JtY2xhc3MgI3NhdmVCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4uZm9ybWNsYXNzICNjYW5jZWxCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxufVxcblxcbiNuZXctdGFzayAuZm9ybWNsYXNzIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5mb3JtY2xhc3MgYnV0dG9uIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm1jbGFzcyBidXR0b246aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMsXFxuI25ldy10YXNrIC5mb3JtY2xhc3MgZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1kaWFsb2cge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2IoMCAwIDAgLyAwLjIpO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1MHB4O1xcbiAgbGVmdDogMjUwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdC1kaWFsb2cgLmZvcm1jbGFzcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtZGlhbG9nIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvSXRlbSwgUFJJT1JJVElFUyB9IGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCB7IGNyZWF0ZVRvZG9MaXN0IH0gZnJvbSAnLi90b2RvLWxpc3QuanMnO1xuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tICcuL3ZpZXcuanMnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTsgLy8gc3RvcmVzIGFsbCB0b2RvLWxpc3RzIGNyZWF0ZWRcblxuZnVuY3Rpb24gcHJpbnRMaXN0T2ZQcm9qZWN0cygpIHtcbiAgcHJvamVjdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdUSVRMRTogJyArIGxpc3QudGl0bGUpO1xuICAgIGlmIChsaXN0LnRvZG9zWzBdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgJ1RPRE8gSVRFTTogJyArXG4gICAgICAgICAgICBsaXN0LnRvZG9zW2ldLnRpdGxlICtcbiAgICAgICAgICAgICdcXG5DT01QTEVURUQ6ICcgK1xuICAgICAgICAgICAgbGlzdC50b2Rvc1tpXS5jb21wbGV0ZWRcbiAgICAgICAgKTsgLy8gcHJpbnQgYWxsIHRvIGRvIGl0ZW1zIGluIGVhY2ggbGlzdFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnVGhpcyBsaXN0IGNvbnRhaW5zIG5vIHRvZG8gaXRlbXMnKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJycpOyAvLyB1c2VkIGZvciBzZXBlcmF0aW9uIG9mIGxpc3RzXG4gIH0pO1xufVxuXG4vLyBkZWZhdWx0IGxpc3Rcbi8vIGV4cG9ydCB0byBlbnRlciBpdGVtcyBpbnRvIHRoaXMgbGlzdCB3aGVuIG5vIGxpc3QgaXMgcHJvdmlkZWRcbmV4cG9ydCBjb25zdCBnZW5lcmFsID0gY3JlYXRlVG9kb0xpc3QoJ0dlbmVyYWwnKTtcblxuLy8gdGVzdFxuY29uc3Qgc2hvcHBpbmdMaXN0ID0gY3JlYXRlVG9kb0xpc3QoJ1Nob3BwaW5nTGlzdCcpO1xuY29uc3QgY2hyaXN0bWFzTGlzdCA9IGNyZWF0ZVRvZG9MaXN0KCdDaHJpc3RtYXMgV2lzaCBMaXN0Jyk7XG5cbmNvbnN0IGl0ZW0xID0gY3JlYXRlVG9kb0l0ZW0oXG4gICdCdXkgTWlsaycsXG4gICdHZXQgU295IG9yIE9hdG1pbGsnLFxuICAnQXByaWwgMTMgMjAyNCcsXG4gIHNob3BwaW5nTGlzdCxcbiAgUFJJT1JJVElFUy5MT1dcbik7XG5cbmNvbnN0IGl0ZW0yID0gY3JlYXRlVG9kb0l0ZW0oXG4gICdCdXkgU2hvZXMnLFxuICAnU3RvcmUgY2xvc2VzIGF0IDEwIFBNJyxcbiAgJ0FwcmlsIDEzIDIwMjQnLFxuICBnZW5lcmFsLFxuICBQUklPUklUSUVTLk1FRElVTSxcbiAgZmFsc2Vcbik7XG5cbmNvbnN0IGl0ZW0zID0gY3JlYXRlVG9kb0l0ZW0oXG4gICdCdXkgYSBuZXcgaGF0JyxcbiAgJ1N0b3JlIGNsb3NlZCBvbiB3ZWVrZW5kcycsXG4gICdBcHJpbCAxMyAyMDI0JyxcbiAgZ2VuZXJhbCxcbiAgUFJJT1JJVElFUy5ISUdILFxuICB0cnVlXG4pO1xuXG5wcmludExpc3RPZlByb2plY3RzKCk7XG5jb25zdCBkaXNwbGF5ID0gZGlzcGxheUNvbnRyb2xsZXIoKTtcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHByb2plY3RzLCBnZW5lcmFsIH0gZnJvbSAnLi90b2RvLWFwcCc7XG5pbXBvcnQgeyBhZGRUb2RvSXRlbSB9IGZyb20gJy4vdG9kby1saXN0JztcblxuLy8gQ3JlYXRlIGEgdG9kbyBvYmplY3QgdXNpbmcgZmFjdG9yaWVzICh3ZSB3aWxsIGNyZWF0ZSBhcyBtYW55IGFzIHVzZXIgd2FudHMpXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0oXG4gIHRpdGxlID0gJycsXG4gIGRlc2NyaXB0aW9uID0gJycsXG4gIGR1ZURhdGUgPSBEYXRlLm5vdygpLFxuICB0b2RvTGlzdCA9IGdlbmVyYWwsIC8vIGlmIHlvdSBkb24ndCBzcGVjaWZ5IHdoaWNoIGxpc3QsIGl0IGdvZXMgaW50byBnZW5lcmFsXG4gIHByaW9yaXR5ID0gUFJJT1JJVElFUy5MT1csXG4gIGNvbXBsZXRlZCA9IGZhbHNlXG4gIC8vIGNvbnNpZGVyIGFkZGluZyBhIGNoZWNrYm94ID0gZmFsc2UgdG8ga2VlcCB0cmFjayBvZiBjb21wbGV0aW9uIG9mIHRhc2tcbikge1xuICBjb25zdCB0b2RvSXRlbURhdGEgPSB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICB0b2RvTGlzdCxcbiAgICBwcmlvcml0eSxcbiAgICBjb21wbGV0ZWQsXG4gIH07XG5cbiAgLy8gcHVzaCB0b2RvSXRlbURhdGEgaW50byB0aGUgY29ycmVzcG9uZGluZyB0b2RvTGlzdCB0b2RvcyBhcnJheVxuICB0b2RvTGlzdC5hZGRUb2RvSXRlbSh0b2RvSXRlbURhdGEpO1xuXG4gIC8vIGZ1bmN0aW9ucyB0byB1cGRhdGUgZWFjaCBhdHRyaWJ1dGVcbiAgZnVuY3Rpb24gdXBkYXRlVGl0bGUobmV3VGl0bGUpIHtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUb2RvTGlzdChuZXdMb2NhdGlvbikge1xuICAgIHRvZG9MaXN0ID0gbmV3TG9jYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb21wbGV0aW9uKG5ld1N0YXR1cykge1xuICAgIGNvbXBsZXRlZCA9IG5ld1N0YXR1cztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9kb0l0ZW1EYXRhLFxuICAgIHVwZGF0ZVRpdGxlLFxuICAgIHVwZGF0ZURlc2NyaXB0aW9uLFxuICAgIHVwZGF0ZUR1ZURhdGUsXG4gICAgdXBkYXRlVG9kb0xpc3QsXG4gICAgdXBkYXRlUHJpb3JpdHksXG4gICAgdXBkYXRlQ29tcGxldGlvbixcbiAgfTtcbn1cblxuLy8gRW51bSBmb3IgcHJpb3JpdHkvdXJnZW5jeSBsZXZlbFxuZXhwb3J0IGNvbnN0IFBSSU9SSVRJRVMgPSB7XG4gIExPVzogJ0xPVycsXG4gIE1FRElVTTogJ01FRElVTScsXG4gIEhJR0g6ICdISUdIJyxcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdG9kby1hcHAnO1xuXG4vLyBDcmVhdGUgYSB0b2RvIGxpc3QgdXNpbmcgZmFjdG9yeSBmdW5jdGlvbnMgKHdlIHdpbGwgbmVlZCB0byBjcmVhdGUgbXVsdGlwbGUgdG9kbyBsaXN0cylcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvTGlzdCh0aXRsZSkge1xuICBjb25zdCB0b2RvTGlzdERhdGEgPSB7XG4gICAgdGl0bGUsXG4gICAgdG9kb3M6IFtdLFxuICB9O1xuXG4gIHByb2plY3RzLnB1c2godG9kb0xpc3REYXRhKTtcblxuICBmdW5jdGlvbiB1cGRhdGVUb2RvTGlzdE5hbWUobmV3VGl0bGUpIHtcbiAgICB0b2RvTGlzdERhdGEudGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRJdGVtKHRpdGxlKSB7XG4gICAgdG9kb0xpc3REYXRhLnRvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbS50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9kb0l0ZW0odG9kb0l0ZW0pIHtcbiAgICBpZiAoZmluZEl0ZW0odG9kb0xpc3REYXRhLnRpdGxlKSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvci4gVGhpcyBpdGVtIGlzIGFscmVhZHkgaW5jbHVkZWQuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9MaXN0RGF0YS50b2Rvcy5wdXNoKHRvZG9JdGVtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbSh0b2RvSXRlbSkge1xuICAgIGNvbnN0IGl0ZW1TZWFyY2hlZCA9IGZpbmRJdGVtKHRvZG9MaXN0RGF0YS50aXRsZSk7IC8vIGl0ZW1TZWFyY2hlZCByZXR1cm5zIGluZGV4XG4gICAgaWYgKGl0ZW1TZWFyY2hlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvci4gVGhpcyBpdGVtIGlzIG5vdCBmb3VuZC4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0xpc3REYXRhLnRvZG9zLnNwbGljZShpdGVtU2VhcmNoZWQsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHRvZG9MaXN0RGF0YSwgdXBkYXRlVG9kb0xpc3ROYW1lLCBhZGRUb2RvSXRlbSwgZGVsZXRlVG9kb0l0ZW0gfTtcbn1cbiIsIi8vIERpc3BsYXlDb250cm9sbGVyIGZhY3RvcnkgZnVuY3Rpb24gaGVyZVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250cm9sbGVyKCkge1xuICAvLyBuZXcgRGF0ZSBuZWVkcyB0byBiZSB0aGUgdXNlcidzIHRpbWV6b25lXG4gIC8vIHRoZW4gZml4IHRoZSBsZW5ndGggVUkgaXNzdWVcbiAgY29uc3QgZGF0ZVBpY2tlciA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZUFzRGF0ZSA9XG4gICAgbmV3IERhdGUoKSk7XG5cbiAgLy8gb3BlbiBhbmQgY2xvc2UgdGFzayBtb2RhbFxuICBjb25zdCBuZXdUYXNrTW9kYWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFkZFRvZG9JdGVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ1dHRvbicpO1xuICAgIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKTtcbiAgICBjb25zdCB0YXNrQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2sgYnV0dG9uJyk7XG5cbiAgICBhZGRUb2RvSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICB0YXNrQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgLy8gb3BlbiBhbmQgY2xvc2UgcHJvamVjdCBtb2RhbFxuICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtZGlhbG9nJyk7XG4gICAgY29uc3QgcHJvamVjdENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjbmV3LXByb2plY3QtZGlhbG9nIGJ1dHRvbidcbiAgICApO1xuXG4gICAgYWRkUHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuICB9KSgpO1xuXG4gIC8vIGhhbmRsZSB1cGRhdGluZyBwcm9qZWN0IGhlYWRlciB0ZXh0IG9uIGNsaWNrXG4gIGNvbnN0IHVwZGF0ZVByb2plY3RIZWFkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvZG9JdGVtc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWl0ZW1zJyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY3VycmVudFByb2plY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUnKTtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpO1xuICAgIC8vIGhhdmUgJ0FsbCBUYXNrcycgZGlzcGxheSBhcyBpbml0aWFsIHZhbHVlIG9uIHJlZnJlc2hcbiAgICAvLyBUT0RPOiBoYXZlIGl0IGhhbmRsZSB0aGUgcHJvamVjdHMgd2UgY3JlYXRlIGluIHRoZSBzdWJtZW51IGFzIHdlbGxcbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdGlhbC12YWx1ZScpO1xuICAgIGN1cnJlbnRQcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gaW5pdGlhbFZhbHVlLnZhbHVlO1xuICAgIHRvZG9JdGVtc0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdEhlYWRlcik7XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3VycmVudFByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdG9kb0l0ZW1zRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0SGVhZGVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KSgpO1xuXG4gIC8vIFRPRE86IGFkZCBuZXcgcHJvamVjdHMgdG8gc3VibWVudVxuICAvLyBoYXZlIGEgR2VuZXJhbCBwcm9qZWN0IGFsd2F5cyBwcmVzZW50XG5cbiAgcmV0dXJuIHt9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdG9kby1hcHAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=