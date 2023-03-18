import React, { memo } from "react";
import useDropdown from './useDropdown'
import styles from './styles';
import { useEffect } from 'react';
import { DropdownItemType } from "../../types";

type Props = {
    items: DropdownItemType[];
    dropdownTitle?: string;
    defaultValue?: DropdownItemType;
    onClick?: (item: DropdownItemType) => void;
}
const Dropdown: React.FC<Props> = ({ items, dropdownTitle = 'Select your news', onClick, defaultValue }) => {
    const {
        wrapperRef,
        collapse,
        selected,
        indexSelected,
        renderItem,
        toggleList,
        onSaveItemSelected
    } = useDropdown()

    useEffect(() => {
        if (defaultValue) {
            const defaultValueIndex = items.findIndex(item => item.id === defaultValue.id)
            onSaveItemSelected(defaultValueIndex, defaultValue)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSelected = (indexOnClick: number, objectSelected: DropdownItemType) => {
        onSaveItemSelected(indexOnClick, objectSelected)
        onClick!(objectSelected)
    }

    return (
        <div style={styles.dropdown} ref={wrapperRef}  >
            <div
                className="opacity"
                style={styles.titleContent}
                onClick={toggleList}
            >
                {selected.label ? (
                    <div style={styles.selectedItem}>
                        {renderItem(selected.label, selected.icon, styles.iconItemSelected)}
                    </div>
                ) : (
                    <p style={styles.title}>
                        {dropdownTitle}
                    </p>
                )}
                <p style={styles.downIcon}>&#x3c;</p>
            </div>
            {collapse && (
                <ul style={styles.list}>
                    {items.map((item, index) => (
                        <li
                            key={item.id}
                            className="opacity"
                            style={styles.item(indexSelected === index)}
                            onClick={() => handleSelected(index, items[index])}
                        >
                            {renderItem(item.label, item.icon, styles.iconItem)}
                        </li>
                    ))}
                </ul>
            )
            }
        </div >
    );
}
export default memo(Dropdown)