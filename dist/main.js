/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n.tabs{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background-color: rgb(255, 235, 206, 0.2);\r\n}\r\nh1{\r\n    color: antiquewhite;\r\n}\r\n\r\n.DishesDiv{\r\n   display: flex; \r\n   flex-wrap: wrap;\r\n   justify-content: space-around;\r\n   align-items: center;\r\n   padding: 5%;   \r\n}\r\n.pastriesDiv{\r\n    display: flex; \r\n   flex-wrap: wrap;\r\n   justify-content: space-around;\r\n   align-items: center;\r\n   padding: 5%;\r\n}\r\n.cocktailDiv{\r\n    display: flex; \r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 5%;\r\n}\r\n.formDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 5%;\r\n} \r\n.label{\r\n    padding-top: 20px;\r\n    color: rgb(15, 15, 15);\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n}\r\n.orderButton{\r\n    width: 100px;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    font-size: large;\r\n    background-color: rgb(137, 137, 182);\r\n}\r\n.orderButtonDiv{\r\n    padding-top: 40px;\r\n}\r\nh4{\r\n    padding: 5%;\r\n    font-size: 30px;\r\n    color: rgb(255, 140, 0);\r\n}\r\nh5{\r\n    font-size: 30px;\r\n    color: black;\r\n}\r\n.aboutContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.contentDiv{\r\n    margin-top: 50px;\r\n}\r\np{\r\n    color: rgb(230, 223, 223);\r\n}\r\n.tabsButton{\r\n    border: none;\r\n    background-color: rgb(210, 235, 241,0.3);\r\n    height: 30px;\r\n}\r\n    `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction aboutPage(){\r\n        const aboutContainerDiv = document.createElement('div');\r\n        aboutContainerDiv.classList.add('aboutContainerDiv')\r\n\r\n        const aboutContainer = document.createElement(\"div\");\r\n        aboutContainer.classList.add(\"aboutContainer\");\r\n\r\n     const restaurantAboutInfo = document.createElement('h4');\r\n     restaurantAboutInfo.textContent= \"Welcome to Aroma and Taste, where we are proud to serve delectable and inventive dishes made with locally sourced ingredients in a cozy and welcoming atmosphere. Whether you're looking for a casual meal or a special occasion, our menu will tantalize your taste buds and leave you wanting more. Join us for a memorable dining experience.\"\r\n     aboutContainer.appendChild(restaurantAboutInfo);\r\n\r\n     const contact = document.createElement('h5')\r\n     contact.textContent = \"Contact: 0593009511\"\r\n     aboutContainer.appendChild(contact);\r\n\r\n     const location = document.createElement('h5')\r\n     location.textContent = \"Location: Bunsu-Junction\"\r\n     aboutContainer.appendChild(location);\r\n\r\n     const contentDiv = document.querySelector(\".content\");\r\n     aboutContainerDiv.appendChild(aboutContainer);\r\n \r\n     contentDiv.appendChild(aboutContainerDiv);\r\n     document.body.appendChild(contentDiv)\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n//# sourceURL=webpack://restaurant_page/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ \"./src/order.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n    const contentDiv = document.querySelector(\".content\");\r\n    contentDiv.classList.add(\"contentDiv\")\r\n    document.body.appendChild(contentDiv)\r\n\r\n    const restaurantNameDiv = document.createElement(\"div\");\r\n    restaurantNameDiv.classList.add(\"restaurantNameDiv\");\r\n\r\n    const restaurantName = document.createElement(\"h1\");\r\n    restaurantName.textContent = \"Aroma and Taste\";\r\n\r\n    restaurantNameDiv.appendChild(restaurantName)\r\n    document.body.appendChild(restaurantNameDiv)\r\n\r\n\r\n    const tabsDiv = document.createElement(\"div\");\r\n    tabsDiv.classList.add(\"tabs\");\r\n    document.body.appendChild(tabsDiv)\r\n\r\n     \r\n     const aboutButton = document.createElement('button');\r\n     aboutButton.textContent = 'ABOUT';\r\n     aboutButton.classList.add(\"tabsButton\");\r\n     tabsDiv.appendChild(aboutButton)\r\n\r\n    \r\n     const menuButton = document.createElement('button');\r\n     menuButton.textContent = 'MENU';\r\n     menuButton.classList.add(\"tabsButton\");\r\n     tabsDiv.appendChild(menuButton)\r\n     \r\n     \r\n     const orderButton = document.createElement('button');\r\n     orderButton.textContent = 'ORDER';\r\n     orderButton.classList.add(\"tabsButton\");\r\n     tabsDiv.appendChild(orderButton)\r\n     \r\n        const bodyElement = document.body;\r\n        bodyElement.style.backgroundImage = 'url(\"./static/images/background.jpg\")';\r\n        bodyElement.style.backgroundSize = 'cover'; \r\n        bodyElement.style.backgroundRepeat = 'no-repeat';\r\n\r\n  menuButton.addEventListener('click', () => {\r\n    clearContent();\r\n     (0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n  \r\n  aboutButton.addEventListener('click', () => {\r\n    clearContent();\r\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n  \r\n  orderButton.addEventListener('click', () => {\r\n    clearContent();\r\n    (0,_order__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n  \r\n   function clearContent() {\r\n    if (contentDiv.innerHTML !== \"\") {\r\n       contentDiv.innerHTML = \"\";\r\n     } \r\n  };\r\n\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction menuPage(){\r\n        const menuContainerDiv = document.createElement(\"div\");\r\n        menuContainerDiv.classList.add(\"menucontainerDiv\");\r\n\r\n        const menuContainer= document.createElement('div');\r\n        menuContainer.classList.add(\"menucontainer\");\r\n        menuContainer.style.backgroundColor= 'rgba(0, 0, 0, 0.5)';\r\n        \r\n   const DishesDiv = document.createElement('div');\r\n   DishesDiv.classList.add('DishesDiv')\r\n   const pastriesDiv = document.createElement('div');\r\n   pastriesDiv.classList.add('pastriesDiv')\r\n   const cocktailDiv = document.createElement('div');\r\n   cocktailDiv.classList.add('cocktailDiv')\r\n\r\nmenuContainer.appendChild(DishesDiv)\r\nmenuContainer.appendChild(pastriesDiv)\r\nmenuContainer.appendChild(cocktailDiv)\r\n\r\n menuContainerDiv.appendChild(menuContainer)\r\n const contentDiv = document.querySelector(\".content\");\r\n contentDiv.appendChild(menuContainerDiv);\r\n \r\nconst imageUrls1 = [\r\n   './static/images/banku.jpeg',\r\n   './static/images/friedRice.jpeg',\r\n   './static/images/friesss.jpeg',\r\n   './static/images/fufuuu.jpeg',\r\n   './static/images/gcb3.jpeg',\r\n   './static/images/jollof.jpeg',\r\n ];\r\n \r\n const dishTexts1 = [\r\n   'Banku and Tilapia: $8 ',\r\n   'Fried Rice: $8',\r\n   'Fries: $6',\r\n   'Fufu: $10',\r\n   'G)b3: $4',\r\n   'Jollof Rice: $8',\r\n ];\r\n \r\n imageUrls1.forEach((imageUrl, index) => {\r\n   const imageDiv = document.createElement('div');\r\n   const image = document.createElement('img');\r\n   image.src = imageUrl;\r\n   image.alt = 'Image';\r\n   image.style.width = '150px';\r\n   image.style.height = '150px';\r\n \r\n   const text = document.createElement('p');\r\n   text.textContent = dishTexts1[index];\r\n \r\n   imageDiv.appendChild(image);\r\n   imageDiv.appendChild(text);\r\n   DishesDiv.appendChild(imageDiv);\r\n });\r\n \r\n const imageUrls2 = [\r\n   './static/images/burger.jpeg',\r\n  './static/images/cake.jpeg',\r\n  './static/images/cupcake.jpeg',\r\n  './static/images/meatpie.jpeg',\r\n  './static/images/pancake.jpeg',\r\n  './static/images/pizza.jpeg'\r\n ];\r\n \r\n const dishTexts2 = [\r\n   'Burger: $3',\r\n   'Cake: $3',\r\n   'Cup cake: $1',\r\n   'Meatpie: $2',\r\n   'Pancake: $2',\r\n   'Pizza: $4',\r\n ];\r\n \r\n imageUrls2.forEach((imageUrls2, index) => {\r\n   const imageDiv = document.createElement('div');\r\n   const image = document.createElement('img');\r\n   image.src = imageUrls2;\r\n   image.alt = 'Image';\r\n   image.style.width = '150px';\r\n   image.style.height = '150px';\r\n \r\n   const text = document.createElement('p');\r\n   text.textContent = dishTexts2[index];\r\n \r\n   imageDiv.appendChild(image);\r\n   imageDiv.appendChild(text);\r\n   pastriesDiv.appendChild(imageDiv);\r\n });\r\n\r\n const imageUrls3 = [\r\n   './static/images/summerPunchCocktail.jpg',\r\n   './static/images/StrawberryCocktails.jpeg',\r\n   './static/images/rainbowCocktail.jpeg',\r\n   './static/images/milkshake.jpeg',\r\n    './static/images/fruityCocktail.jpeg',\r\n   './static/images/frozenVodka.jpeg'\r\n ];\r\n \r\n const dishTexts3= [\r\n   'summer Punch Cocktail: $5',\r\n   'Strawberry Cocktail: $5',\r\n   'rainbow Cocktail: $6',\r\n   'milkshake: $4',\r\n   'fruity Cocktail: $7',\r\n   'frozen Vodka: $10',\r\n ];\r\n \r\n imageUrls3.forEach((imageUrls3, index) => {\r\n   const imageDiv = document.createElement('div');\r\n   const image = document.createElement('img');\r\n   image.src = imageUrls3;\r\n   image.alt = 'Image';\r\n   image.style.width = '150px';\r\n   image.style.height = '150px';\r\n \r\n   const text = document.createElement('p');\r\n   text.textContent = dishTexts2[index];\r\n \r\n   imageDiv.appendChild(image);\r\n   imageDiv.appendChild(text);\r\n   cocktailDiv.appendChild(imageDiv);\r\n });\r\n\r\n  document.body.appendChild(contentDiv)\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction orderPage(){\r\n      const orderContainerDiv = document.createElement(\"div\");\r\n      orderContainerDiv.classList.add(\"orderContainerDiv\");\r\n\r\n        const orderContainer = document.createElement('div');\r\n        orderContainer.classList.add(\"orderContainer\");\r\n        orderContainer.style.backgroundImage = 'url(\"./static/images/cake.jpeg\")';\r\n        orderContainer.style.backgroundSize = 'cover'; \r\n        orderContainer.style.backgroundRepeat = 'no-repeat';\r\n\r\n    const form = document.createElement('form');\r\n    const formDiv = document.createElement('div')\r\n    formDiv.classList.add('formDiv')\r\n    formDiv.appendChild(form)\r\n   \r\n\r\n    const dishNameDiv = document.createElement('div');\r\n    dishNameDiv.classList.add('label')\r\n    const dishNameLabel = document.createElement('label');\r\n    dishNameLabel.textContent = 'Name of Dish(s):';\r\n    const dishNameInput = document.createElement('input');\r\n    dishNameInput.type = 'text';\r\n    dishNameInput.name = 'dishName';\r\n    dishNameDiv.appendChild(dishNameLabel);\r\n    dishNameDiv.appendChild(dishNameInput);\r\n    form.appendChild(dishNameDiv);\r\n    formDiv.appendChild(dishNameDiv)\r\n    \r\n    const dishAmountDiv = document.createElement('div');\r\n    dishAmountDiv.classList.add('label')\r\n    const dishAmountLabel = document.createElement('label');\r\n    dishAmountLabel.textContent = 'Amount of Each Dish:';\r\n    const dishAmountInput = document.createElement('input');\r\n    dishAmountInput.type = 'number';\r\n    dishAmountInput.name = 'dishNumber';\r\n    dishAmountDiv.appendChild(dishAmountLabel);\r\n    dishAmountDiv.appendChild(dishAmountInput);\r\n    form.appendChild(dishAmountDiv);\r\n    formDiv.appendChild(dishAmountDiv)\r\n    \r\n    const totalAmountDiv = document.createElement('div');\r\n    totalAmountDiv.classList.add('label')\r\n    const totalAmountLabel = document.createElement('label');\r\n    totalAmountLabel.textContent = 'Total Amount:';\r\n    const totalAmountInput = document.createElement('input');\r\n    totalAmountInput.type = 'number';\r\n    totalAmountInput.name = 'totalAmount';\r\n    totalAmountDiv.appendChild(totalAmountLabel);\r\n    totalAmountDiv.appendChild(totalAmountInput);\r\n    form.appendChild(totalAmountDiv);\r\n    formDiv.appendChild(totalAmountDiv)\r\n    \r\n    const deliveryDetailsDiv = document.createElement('div');\r\n    deliveryDetailsDiv.classList.add('label')\r\n    const deliveryDetailsLabel = document.createElement('label');\r\n    deliveryDetailsLabel.textContent = 'Delivery Details:';\r\n    const deliveryDetailsInput = document.createElement('textarea');\r\n    deliveryDetailsInput.name = 'deliveryDetails';\r\n    deliveryDetailsDiv.appendChild(deliveryDetailsLabel);\r\n    deliveryDetailsDiv.appendChild(deliveryDetailsInput);\r\n    form.appendChild(deliveryDetailsDiv);\r\n    formDiv.appendChild(deliveryDetailsDiv)\r\n    \r\n    const reservationTimeDiv = document.createElement('div');\r\n    reservationTimeDiv.classList.add('label')\r\n    const reservationTimeLabel = document.createElement('label');\r\n    reservationTimeLabel.textContent = 'Time for Reservation:';\r\n    const reservationTimeInput = document.createElement('input');\r\n    reservationTimeInput.type = 'time';\r\n    reservationTimeInput.name = 'reservationTime';\r\n    reservationTimeDiv.appendChild(reservationTimeLabel);\r\n    reservationTimeDiv.appendChild(reservationTimeInput);\r\n    form.appendChild(reservationTimeDiv);\r\n    formDiv.appendChild(reservationTimeDiv)\r\n\r\n    const buttonDiv = document.createElement('div')\r\n    buttonDiv.classList.add('orderButtonDiv')\r\n    const orderButton = document.createElement('button');\r\n    orderButton.classList.add('orderButton')\r\n    orderButton.textContent = 'ORDER';\r\n    orderButton.type = 'submit';\r\n    formDiv.appendChild(buttonDiv)\r\n    formDiv.appendChild(orderButton);\r\n   \r\n    orderContainerDiv.appendChild(orderContainer);\r\n    const contentDiv = document.querySelector(\".content\");\r\n    contentDiv.appendChild(orderContainer);\r\n    contentDiv.appendChild(formDiv);\r\n    document.body.appendChild(contentDiv)\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderPage);\n\n//# sourceURL=webpack://restaurant_page/./src/order.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;