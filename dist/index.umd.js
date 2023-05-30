(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('ignore-case')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', 'ignore-case'], factory) :
  (global = global || self, factory(global.reactInlineAutocomplete = {}, global.React, global.classnames, global.ignoreCase));
}(this, (function (exports, React, classNames, ignoreCase) {
  var React__default = 'default' in React ? React['default'] : React;
  classNames = classNames && Object.prototype.hasOwnProperty.call(classNames, 'default') ? classNames['default'] : classNames;
  ignoreCase = ignoreCase && Object.prototype.hasOwnProperty.call(ignoreCase, 'default') ? ignoreCase['default'] : ignoreCase;

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

  exports.InlineAutocomplete = RefAutoComplete;
  exports.TextAreaAutocomplete = RefTextAreaAutocomplete;

})));
//# sourceMappingURL=index.umd.js.map
