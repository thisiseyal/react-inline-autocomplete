import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import ignoreCase from 'ignore-case';

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

var styles = {"inline-autocomplete-wrap":"_2ob9L","inline-autocomplete-input":"_ocEvG","inline-autocomplete-complete":"_2eaMo"};

const _excluded = ["value", "dataSource", "className", "navigate", "caseSensitive", "onBlur", "onFocus", "onChange", "onPressEnter", "onSelect"],
  _excluded2 = ["value", "dataSource", "className", "navigate", "caseSensitive", "onBlur", "onFocus", "onChange", "onPressEnter", "onSelect"];
const Autocomplete = (props, ref) => {
  const {
      value,
      dataSource,
      className,
      navigate = true,
      caseSensitive = true,
      onBlur,
      onFocus,
      onChange,
      onPressEnter,
      onSelect
    } = props,
    others = _objectWithoutPropertiesLoose(props, _excluded);
  const [innerVal, setInnerVal] = useState('');
  const [matchedDataSource, setMatchedDataSource] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const ctrlValue = value != null ? value : innerVal;
  /**
   * inputRef
   */
  const inputRef = useRef();
  React.useImperativeHandle(ref, () => inputRef.current);
  const updateValue = value => {
    onChange && onChange(value);
    setInnerVal(value);
  };
  const findMatchedDataSourceItem = value => {
    return dataSource.filter(({
      text
    }) => {
      return caseSensitive ? text.startsWith(value) && text !== value : ignoreCase.startsWith(text, value) && !ignoreCase.equals(text, value);
    });
  };
  const updateMatchedDataSource = value => {
    setActiveIndex(0);
    value ? setMatchedDataSource(findMatchedDataSourceItem(value)) : setMatchedDataSource([]);
  };
  /**
   * InputChange Handler
   * @param e
   */
  const handleChange = e => {
    const value = e.target.value;
    updateValue(value);
    updateMatchedDataSource(value);
  };
  /**
   * KeyDown Handler
   * deal with `Tab` | `Enter` | `ArrowUp` | `ArrowDown`
   * @param e
   */
  const handleKeyDown = e => {
    if (Object.values(KeyEnum).includes(e.key)) {
      e.key !== KeyEnum.TAB && e.preventDefault();
    }
    const matchedDataSourceItem = matchedDataSource == null ? void 0 : matchedDataSource[activeIndex];
    switch (e.key) {
      case KeyEnum.TAB:
        if (!matchedDataSourceItem) return;
        /**
         * onChange >>> onSelect >>> Search matched item
         */
        const {
          text
        } = matchedDataSourceItem;
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
        setActiveIndex(idx => {
          if (matchedDataSource != null && matchedDataSource.length) {
            return (idx - 1 + matchedDataSource.length) % matchedDataSource.length;
          }
          return 0;
        });
        break;
      case KeyEnum.ARROW_DOWN:
        if (!navigate) break;
        setActiveIndex(idx => {
          if (matchedDataSource != null && matchedDataSource.length) {
            return (idx + 1) % matchedDataSource.length;
          }
          return 0;
        });
        break;
    }
  };
  const breakUp = () => {
    var _matchedDataSource$ac;
    return matchedDataSource != null && (_matchedDataSource$ac = matchedDataSource[activeIndex]) != null && _matchedDataSource$ac.text ? `${ctrlValue}${matchedDataSource[activeIndex].text.slice(ctrlValue.length)}` : undefined;
  };
  const wrapClassString = classNames('ria-wrap', styles['inline-autocomplete-wrap'], className); // `className` should cover `styles.wrap`
  const inputClassString = classNames('ria-input', styles['inline-autocomplete-input']);
  const completeClassString = classNames('ria-complete', styles['inline-autocomplete-complete']);
  const completeContent = breakUp();
  return React.createElement("div", {
    className: wrapClassString
  }, React.createElement("input", Object.assign({
    ref: inputRef,
    className: inputClassString,
    value: ctrlValue,
    type: "text",
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: handleChange,
    onKeyDown: handleKeyDown
  }, others)), React.createElement("div", {
    className: completeClassString
  }, completeContent));
};
const RefAutoComplete = React.forwardRef(Autocomplete);
const TextAreaAutocomplete = (props, ref) => {
  const {
      value,
      dataSource,
      className,
      navigate = true,
      caseSensitive = true,
      onBlur,
      onFocus,
      onChange,
      onSelect
    } = props,
    others = _objectWithoutPropertiesLoose(props, _excluded2);
  const [innerVal, setInnerVal] = useState('');
  const [matchedDataSource, setMatchedDataSource] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const ctrlValue = value != null ? value : innerVal;
  /**
   * inputRef
   */
  const inputRef = useRef();
  React.useImperativeHandle(ref, () => inputRef.current);
  const updateValue = value => {
    onChange && onChange(value);
    setInnerVal(value);
  };
  const updateMatchedDataSource = value => {
    setActiveIndex(0);
    value ? setMatchedDataSource(dataSource.filter(({
      text
    }) => {
      return caseSensitive ? text.startsWith(value) && text !== value : ignoreCase.startsWith(text, value) && !ignoreCase.equals(text, value);
    })) : setMatchedDataSource([]);
  };
  /**
   * InputChange Handler
   * @param e
   */
  const handleChange = e => {
    const value = e.target.value;
    updateValue(value);
    updateMatchedDataSource(value);
  };
  /**
   * KeyDown Handler
   * deal with `Tab` | `Enter` | `ArrowUp` | `ArrowDown`
   * @param e
   */
  const handleKeyDown = e => {
    if (Object.values(KeyEnum).includes(e.key)) {
      e.key != KeyEnum.TAB && e.preventDefault();
    }
    switch (e.key) {
      case KeyEnum.TAB:
        const matchedDataSourceItem = matchedDataSource == null ? void 0 : matchedDataSource[activeIndex];
        if (!matchedDataSourceItem) return;
        /**
         * onChange >>> onSelect >>> Search matched item
         */
        const {
          text
        } = matchedDataSourceItem;
        updateValue(text);
        onSelect && onSelect(matchedDataSourceItem);
        updateMatchedDataSource(text);
        break;
      case KeyEnum.ENTER:
        /**
         * onPressEnter >>> Just add a new line
         */
        updateValue(`${ctrlValue}\n`);
        break;
      case KeyEnum.ARROW_UP:
        if (!navigate) break;
        setActiveIndex(idx => {
          if (matchedDataSource != null && matchedDataSource.length) {
            return (idx - 1 + matchedDataSource.length) % matchedDataSource.length;
          }
          return 0;
        });
        break;
      case KeyEnum.ARROW_DOWN:
        if (!navigate) break;
        setActiveIndex(idx => {
          if (matchedDataSource != null && matchedDataSource.length) {
            return (idx + 1) % matchedDataSource.length;
          }
          return 0;
        });
        break;
    }
  };
  const breakUp = () => {
    var _matchedDataSource$ac2;
    return matchedDataSource != null && (_matchedDataSource$ac2 = matchedDataSource[activeIndex]) != null && _matchedDataSource$ac2.text ? `${ctrlValue}${matchedDataSource[activeIndex].text.slice(ctrlValue.length)}` : undefined;
  };
  const wrapClassString = classNames('ria-wrap', styles['inline-autocomplete-wrap'], className); // `className` should cover `styles.wrap`
  const inputClassString = classNames('ria-input', styles['inline-autocomplete-input']);
  const completeClassString = classNames('ria-complete', ['inline-autocomplete-complete']);
  const completeContent = breakUp();
  return React.createElement("div", {
    className: wrapClassString
  }, React.createElement("textarea", Object.assign({
    ref: inputRef,
    className: inputClassString,
    value: ctrlValue,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: handleChange,
    onKeyDown: handleKeyDown
  }, others)), React.createElement("div", {
    className: completeClassString
  }, completeContent));
};
const RefTextAreaAutocomplete = React.forwardRef(TextAreaAutocomplete);

export { RefAutoComplete as InlineAutocomplete, RefTextAreaAutocomplete as TextAreaAutocomplete };
//# sourceMappingURL=index.modern.js.map
