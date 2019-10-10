import React, { useState, useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import ExpandableList from './ExpandableList';
import ToggleButton from './ToggleButton';

const Menu = props => {
    const [submenuStates, setSubmenuStates] = useState({});

    useEffect(() => {
        setSubmenuStates(props.data)
    }, [props.data]);

    const anyOpen = () =>
        !!Object.values(submenuStates).find(({ expandState }) => expandState === true)

    const handleMainToggle = () => {
        const newState = Object.keys(submenuStates).reduce((acc, album) => {
            acc[album] = {...submenuStates[album], expandState: !anyOpen()}
            return acc;
        }, {});
        setSubmenuStates(newState)
    }

    const handleSubmenuToggled = title => {
        setSubmenuStates(
            {
                ...submenuStates,
                [title]:
                {
                    ...submenuStates[title],
                    expandState: !submenuStates[title].expandState
                }
            }
        )
    };

    const dataMenu = Object.keys(submenuStates).map(title => {
        return (
            <ExpandableList
                key={title}
                title={title}
                listItems={submenuStates[title].songs}
                expanded={submenuStates[title].expandState}
                onToggled={() => { handleSubmenuToggled(title) }}
            />
        )
    });

    return (
        <div>
            <h4>Albums</h4>
            <ToggleButton
                onClick={() => { handleMainToggle() }}
               closed={<AddCircleIcon />}
                opened={<RemoveCircleIcon />}
                isOpen={anyOpen()}
            />
            {dataMenu}
        </div>
    )
}

export default Menu