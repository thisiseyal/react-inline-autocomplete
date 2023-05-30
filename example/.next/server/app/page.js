(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 40252:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 97999:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/path-to-regexp");

/***/ }),

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 61090:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param.js");

/***/ }),

/***/ 78652:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 69274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 21668:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 25136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(18038);
var React__default = _interopDefault(React);
var classNames = _interopDefault(__webpack_require__(97641));
var ignoreCase = _interopDefault(__webpack_require__(68631));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var KeyEnum;
(function (KeyEnum) {
  KeyEnum["TAB"] = "Tab";
  KeyEnum["ENTER"] = "Enter";
  KeyEnum["ARROW_UP"] = "ArrowUp";
  KeyEnum["ARROW_DOWN"] = "ArrowDown";
})(KeyEnum || (KeyEnum = {}));

var styles = {"wrap":"_31Ve9","input":"_ZX6Lw","complete":"_NwvFz"};

var _excluded = ["value", "dataSource", "className", "navigate", "caseSensitive", "onBlur", "onFocus", "onChange", "onPressEnter", "onSelect"],
  _excluded2 = ["value", "dataSource", "className", "navigate", "caseSensitive", "onBlur", "onFocus", "onChange", "onPressEnter", "onSelect"];
var Autocomplete = function Autocomplete(props, ref) {
  var value = props.value,
    dataSource = props.dataSource,
    className = props.className,
    _props$navigate = props.navigate,
    navigate = _props$navigate === void 0 ? true : _props$navigate,
    _props$caseSensitive = props.caseSensitive,
    caseSensitive = _props$caseSensitive === void 0 ? true : _props$caseSensitive,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    onChange = props.onChange,
    onPressEnter = props.onPressEnter,
    onSelect = props.onSelect,
    others = _objectWithoutPropertiesLoose(props, _excluded);
  var _useState = React.useState(''),
    innerVal = _useState[0],
    setInnerVal = _useState[1];
  var _useState2 = React.useState(),
    matchedDataSource = _useState2[0],
    setMatchedDataSource = _useState2[1];
  var _useState3 = React.useState(0),
    activeIndex = _useState3[0],
    setActiveIndex = _useState3[1];
  var ctrlValue = value != null ? value : innerVal;
  /**
   * inputRef
   */
  var inputRef = React.useRef();
  React__default.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  var updateValue = function updateValue(value) {
    onChange && onChange(value);
    setInnerVal(value);
  };
  var updateMatchedDataSource = function updateMatchedDataSource(value) {
    setActiveIndex(0);
    value ? setMatchedDataSource(dataSource.filter(function (_ref) {
      var text = _ref.text;
      return caseSensitive ? text.startsWith(value) && text !== value : ignoreCase.startsWith(text, value) && !ignoreCase.equals(text, value);
    })) : setMatchedDataSource([]);
  };
  /**
   * InputChange Handler
   * @param e
   */
  var handleChange = function handleChange(e) {
    var value = e.target.value;
    updateValue(value);
    updateMatchedDataSource(value);
  };
  /**
   * KeyDown Handler
   * deal with `Tab` | `Enter` | `ArrowUp` | `ArrowDown`
   * @param e
   */
  var handleKeyDown = function handleKeyDown(e) {
    if (Object.values(KeyEnum).includes(e.key)) {
      e.preventDefault();
    }
    switch (e.key) {
      case KeyEnum.TAB:
        var matchedDataSourceItem = matchedDataSource == null ? void 0 : matchedDataSource[activeIndex];
        if (!matchedDataSourceItem) return;
        /**
         * onChange >>> onSelect >>> Search matched item
         */
        var text = matchedDataSourceItem.text;
        updateValue(text);
        onSelect && onSelect(matchedDataSourceItem);
        updateMatchedDataSource(text);
        break;
      case KeyEnum.ENTER:
        /**
         * onPressEnter >>> Reset
         */
        onPressEnter && onPressEnter(ctrlValue);
        updateMatchedDataSource();
        break;
      case KeyEnum.ARROW_UP:
        if (!navigate) break;
        setActiveIndex(function (idx) {
          if (matchedDataSource != null && matchedDataSource.length) {
            return (idx - 1 + matchedDataSource.length) % matchedDataSource.length;
          }
          return 0;
        });
        break;
      case KeyEnum.ARROW_DOWN:
        if (!navigate) break;
        setActiveIndex(function (idx) {
          if (matchedDataSource != null && matchedDataSource.length) {
            return (idx + 1) % matchedDataSource.length;
          }
          return 0;
        });
        break;
    }
  };
  var breakUp = function breakUp() {
    var _matchedDataSource$ac;
    return matchedDataSource != null && (_matchedDataSource$ac = matchedDataSource[activeIndex]) != null && _matchedDataSource$ac.text ? "" + ctrlValue + matchedDataSource[activeIndex].text.slice(ctrlValue.length) : undefined;
  };
  var wrapClassString = classNames('ria-wrap', styles.wrap, className); // `className` should cover `styles.wrap`
  var inputClassString = classNames('ria-input', styles.input);
  var completeClassString = classNames('ria-complete', styles.complete);
  var completeContent = breakUp();
  return React__default.createElement("div", {
    className: wrapClassString
  }, React__default.createElement("input", Object.assign({
    ref: inputRef,
    className: inputClassString,
    value: ctrlValue,
    type: "text",
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: handleChange,
    onKeyDown: handleKeyDown
  }, others)), React__default.createElement("div", {
    className: completeClassString
  }, completeContent));
};
var RefAutoComplete = React__default.forwardRef(Autocomplete);
var TextAreaAutocomplete = function TextAreaAutocomplete(props, ref) {
  var value = props.value,
    dataSource = props.dataSource,
    className = props.className,
    _props$navigate2 = props.navigate,
    navigate = _props$navigate2 === void 0 ? true : _props$navigate2,
    _props$caseSensitive2 = props.caseSensitive,
    caseSensitive = _props$caseSensitive2 === void 0 ? true : _props$caseSensitive2,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    onChange = props.onChange,
    onSelect = props.onSelect,
    others = _objectWithoutPropertiesLoose(props, _excluded2);
  var _useState4 = React.useState(''),
    innerVal = _useState4[0],
    setInnerVal = _useState4[1];
  var _useState5 = React.useState(),
    matchedDataSource = _useState5[0],
    setMatchedDataSource = _useState5[1];
  var _useState6 = React.useState(0),
    activeIndex = _useState6[0],
    setActiveIndex = _useState6[1];
  var ctrlValue = value != null ? value : innerVal;
  /**
   * inputRef
   */
  var inputRef = React.useRef();
  React__default.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  var updateValue = function updateValue(value) {
    onChange && onChange(value);
    setInnerVal(value);
  };
  var updateMatchedDataSource = function updateMatchedDataSource(value) {
    setActiveIndex(0);
    value ? setMatchedDataSource(dataSource.filter(function (_ref2) {
      var text = _ref2.text;
      return caseSensitive ? text.startsWith(value) && text !== value : ignoreCase.startsWith(text, value) && !ignoreCase.equals(text, value);
    })) : setMatchedDataSource([]);
  };
  /**
   * InputChange Handler
   * @param e
   */
  var handleChange = function handleChange(e) {
    var value = e.target.value;
    updateValue(value);
    updateMatchedDataSource(value);
  };
  /**
   * KeyDown Handler
   * deal with `Tab` | `Enter` | `ArrowUp` | `ArrowDown`
   * @param e
   */
  var handleKeyDown = function handleKeyDown(e) {
    if (Object.values(KeyEnum).includes(e.key)) {
      e.preventDefault();
    }
    switch (e.key) {
      case KeyEnum.TAB:
        var matchedDataSourceItem = matchedDataSource == null ? void 0 : matchedDataSource[activeIndex];
        if (!matchedDataSourceItem) return;
        /**
         * onChange >>> onSelect >>> Search matched item
         */
        var text = matchedDataSourceItem.text;
        updateValue(text);
        onSelect && onSelect(matchedDataSourceItem);
        updateMatchedDataSource(text);
        break;
      case KeyEnum.ENTER:
        /**
         * onPressEnter >>> Just add a new line
         */
        updateValue(ctrlValue + "\n");
        break;
      case KeyEnum.ARROW_UP:
        if (!navigate) break;
        setActiveIndex(function (idx) {
          if (matchedDataSource != null && matchedDataSource.length) {
            return (idx - 1 + matchedDataSource.length) % matchedDataSource.length;
          }
          return 0;
        });
        break;
      case KeyEnum.ARROW_DOWN:
        if (!navigate) break;
        setActiveIndex(function (idx) {
          if (matchedDataSource != null && matchedDataSource.length) {
            return (idx + 1) % matchedDataSource.length;
          }
          return 0;
        });
        break;
    }
  };
  var breakUp = function breakUp() {
    var _matchedDataSource$ac2;
    return matchedDataSource != null && (_matchedDataSource$ac2 = matchedDataSource[activeIndex]) != null && _matchedDataSource$ac2.text ? "" + ctrlValue + matchedDataSource[activeIndex].text.slice(ctrlValue.length) : undefined;
  };
  var wrapClassString = classNames('ria-wrap', styles.wrap, className); // `className` should cover `styles.wrap`
  var inputClassString = classNames('ria-input', styles.input);
  var completeClassString = classNames('ria-complete', styles.complete);
  var completeContent = breakUp();
  return React__default.createElement("div", {
    className: wrapClassString
  }, React__default.createElement("textarea", Object.assign({
    ref: inputRef,
    className: inputClassString,
    value: ctrlValue,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: handleChange,
    onKeyDown: handleKeyDown
  }, others)), React__default.createElement("div", {
    className: completeClassString
  }, completeContent));
};
var RefTextAreaAutocomplete = React__default.forwardRef(TextAreaAutocomplete);

exports.F = RefAutoComplete;
exports.a = RefTextAreaAutocomplete;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 82839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRouter": () => (/* reexport default from dynamic */ next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "GlobalError": () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default.a),
/* harmony export */   "LayoutRouter": () => (/* reexport default from dynamic */ next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   "RenderFromTemplateContext": () => (/* reexport default from dynamic */ next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "StaticGenerationSearchParamsBailoutProvider": () => (/* reexport default from dynamic */ next_dist_client_components_static_generation_searchparams_bailout_provider__WEBPACK_IMPORTED_MODULE_8___default.a),
/* harmony export */   "__next_app_webpack_require__": () => (/* binding */ __next_app_webpack_require__),
/* harmony export */   "actionAsyncStorage": () => (/* reexport safe */ next_dist_client_components_action_async_storage__WEBPACK_IMPORTED_MODULE_6__.actionAsyncStorage),
/* harmony export */   "createSearchParamsBailoutProxy": () => (/* reexport safe */ next_dist_client_components_searchparams_bailout_proxy__WEBPACK_IMPORTED_MODULE_9__.createSearchParamsBailoutProxy),
/* harmony export */   "decodeAction": () => (/* reexport safe */ react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_11__.decodeAction),
/* harmony export */   "decodeReply": () => (/* reexport safe */ react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_11__.decodeReply),
/* harmony export */   "originalPathname": () => (/* binding */ originalPathname),
/* harmony export */   "pages": () => (/* binding */ pages),
/* harmony export */   "preconnect": () => (/* reexport safe */ next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__.preconnect),
/* harmony export */   "preloadFont": () => (/* reexport safe */ next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__.preloadFont),
/* harmony export */   "preloadStyle": () => (/* reexport safe */ next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__.preloadStyle),
/* harmony export */   "renderToReadableStream": () => (/* reexport safe */ react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_11__.renderToReadableStream),
/* harmony export */   "requestAsyncStorage": () => (/* reexport safe */ next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__.requestAsyncStorage),
/* harmony export */   "serverHooks": () => (/* reexport module object */ next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "staticGenerationAsyncStorage": () => (/* reexport safe */ next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__.staticGenerationAsyncStorage),
/* harmony export */   "staticGenerationBailout": () => (/* reexport safe */ next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_7__.staticGenerationBailout),
/* harmony export */   "tree": () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54592);
/* harmony import */ var next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_app_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76301);
/* harmony import */ var next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_layout_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57431);
/* harmony import */ var next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_render_from_template_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52673);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30094);
/* harmony import */ var next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_async_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24437);
/* harmony import */ var next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_request_async_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_components_action_async_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46127);
/* harmony import */ var next_dist_client_components_action_async_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_action_async_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45486);
/* harmony import */ var next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_bailout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_client_components_static_generation_searchparams_bailout_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86404);
/* harmony import */ var next_dist_client_components_static_generation_searchparams_bailout_provider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_static_generation_searchparams_bailout_provider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dist_client_components_searchparams_bailout_proxy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95486);
/* harmony import */ var next_dist_client_components_searchparams_bailout_proxy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_searchparams_bailout_proxy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63332);
/* harmony import */ var next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_hooks_server_context__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27902);
/* harmony import */ var next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93099);
/* harmony import */ var next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_rsc_preloads__WEBPACK_IMPORTED_MODULE_12__);

    const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73428)), "C:\\GuideCH\\Programming\\project\\react-inline-autocomplete\\example\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4756))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 60729)), "C:\\GuideCH\\Programming\\project\\react-inline-autocomplete\\example\\app\\layout.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4756))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
    const pages = ["C:\\GuideCH\\Programming\\project\\react-inline-autocomplete\\example\\app\\page.tsx"];

    
    
    
    

    

    
    

    
    
    

    

    
    const __next_app_webpack_require__ = __webpack_require__
    

    const originalPathname = "/page"
  

/***/ }),

/***/ 52682:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14213))

/***/ }),

/***/ 29470:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 1636:
/***/ (() => {



/***/ }),

/***/ 14213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71338);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2318);
/* harmony import */ var react_inline_autocomplete_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25136);
/* harmony import */ var react_inline_autocomplete_dist_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75558);
/* harmony import */ var react_inline_autocomplete_dist_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_inline_autocomplete_dist_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Home() {
    const dataSource = [
        {
            text: "Amazon",
            value: "Amazon"
        },
        {
            text: "Google",
            value: "Google"
        },
        {
            text: "Google Search",
            value: "GoogleSearch"
        },
        {
            text: "Apple",
            value: "Apple"
        },
        {
            text: "Apple Pencil",
            value: "ApplePencil"
        },
        {
            text: "Apple Watch",
            value: "AppleWatch"
        },
        {
            text: "Apple Power",
            value: "ApplePower"
        }
    ].map((i)=>Object.assign(i, {
            color: "#" + (Math.random() * 0xffffff << 0).toString(16)
        }));
    const [timelineList, setTimelineList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const ref = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    const nref = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    const focus = ()=>{
        ref.current.focus();
    };
    const addTimelineItem = (item)=>{
        setTimelineList((prevList)=>[
                item
            ].concat(prevList));
    };
    const onChange = (value)=>{
        addTimelineItem({
            value,
            event: "Change"
        });
    };
    const onPressEnter = (value)=>{
        addTimelineItem({
            value,
            event: "PressEnter"
        });
    };
    const onSelect = (item)=>{
        addTimelineItem({
            value: item.text,
            event: "Select"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "flex min-h-screen flex-col items-center justify-between p-24",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-5",
                    children: dataSource.map((i, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__/* .Tag */ .Vp, {
                            color: i.color,
                            children: i.text
                        }, idx))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_inline_autocomplete_dist__WEBPACK_IMPORTED_MODULE_3__/* .TextAreaAutocomplete */ .a, {
                        ref: ref,
                        className: "min-w-full",
                        dataSource: dataSource,
                        caseSensitive: false,
                        onChange: onChange,
                        onSelect: onSelect,
                        onPressEnter: onPressEnter
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_inline_autocomplete_dist__WEBPACK_IMPORTED_MODULE_3__/* .InlineAutocomplete */ .F, {
                    ref: nref,
                    className: "min-w-full",
                    dataSource: dataSource,
                    caseSensitive: false,
                    onChange: onChange,
                    onSelect: onSelect,
                    onPressEnter: onPressEnter
                })
            ]
        })
    });
}


/***/ }),

/***/ 60729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7887);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92817);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);




const metadata = {
    title: "React-inline-autocomplete",
    description: "Generated by create next app with typescript enabled"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 73428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\GuideCH\Programming\project\react-inline-autocomplete\example\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75558:
/***/ (() => {



/***/ }),

/***/ 71338:
/***/ (() => {



/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [405,396], () => (__webpack_exec__(82839)));
module.exports = __webpack_exports__;

})();