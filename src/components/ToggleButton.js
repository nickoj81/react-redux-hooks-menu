import React, { useState } from 'react';

const ToggleButton = props => {
    const {
        opened,
        closed,
        onClick,
        isOpen,
    } = props;

    return (
        <button
            onClick={onClick}
        >
            {isOpen ? opened : closed}
        </button>

    )
}

export default ToggleButton