import { useState, useEffect, useRef } from 'react';
import { DropdownItemType } from '../../types';

const useDropdown = () => {
    const [collapse, setCollapse] = useState<boolean>(false)
    const [indexSelected, setIndexSelected] = useState<number>(-1)
    const [selected, setSelected] = useState<DropdownItemType>({})
    const wrapperRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Alert if clicked on outside of element
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setCollapse(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const toggleList = () => {
        setCollapse(!collapse)
    };
    const onSaveItemSelected = (indexOnClick: number, objectSelected: DropdownItemType) => {
        setSelected(objectSelected)
        setIndexSelected(indexOnClick)
        setCollapse(false)
    }

    const renderItem = (label?: string, icon?: string, style?: object) => (
        <>
            {icon && <img style={style} src={icon} alt={label} />}
            <p>{label}</p>
        </>
    )
    return {
        wrapperRef,
        collapse,
        selected,
        indexSelected,
        toggleList,
        onSaveItemSelected,
        renderItem
    };
}

export default useDropdown;