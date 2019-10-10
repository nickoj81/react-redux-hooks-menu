import React, { useState, useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import ToggleButton from './ToggleButton';

const ExpandableList = props => {
    const {
        title,
        listItems,
        expanded,
        onToggled,
    } = props;

    const [menuOpen, setMenuOpen] = useState(expanded);

    useEffect(() => {
        setMenuOpen(expanded);
    }, [expanded]);

    const listElements = listItems.map(
        item => <li key={item}>{item}</li>
    );

    const handleToggleClicked = () => {
        setMenuOpen(!menuOpen)
        onToggled(menuOpen)
    }

    return (
        <div>
            <span>{title}</span>
            <ToggleButton
                onClick={handleToggleClicked}
                closed = {<AddCircleIcon />}
                opened = {<RemoveCircleIcon />}
                isOpen = {menuOpen}
            />
            <ul>
                {menuOpen && listElements}
            </ul>
        </div>

    )
}

export default ExpandableList