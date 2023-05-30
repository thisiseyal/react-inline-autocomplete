import React from 'react';
export interface Props {
    value?: string;
    dataSource: DataSourceItem[];
    className?: string;
    style?: React.CSSProperties;
    placeholder?: string;
    disabled?: boolean;
    navigate?: boolean;
    caseSensitive?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange?: (value: string) => void;
    onPressEnter?: (value: string) => void;
    onSelect?: (item: DataSourceItem) => void;
}
export interface DataSourceItem {
    text: string;
    value: string | number;
    [key: string]: any;
}
declare const RefAutoComplete: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export { RefAutoComplete as InlineAutocomplete };
declare const RefTextAreaAutocomplete: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLTextAreaElement>>;
export { RefTextAreaAutocomplete as TextAreaAutocomplete };
