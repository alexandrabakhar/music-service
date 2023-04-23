import { DropdownItem } from './DropdownItem';
import { DropdownRadio } from './DropdownRadio';

export const Dropdown = (props) => {
    let content = '';
    let dropdownType = '';
    if (props.content === 'button-author') {
        content = 'Artist';
        dropdownType = 'list';
    }
    if (props.content === 'button-genre') {
        content = 'Genre';
        dropdownType = 'list';
    }
    if (props.content === 'button-year') {
        content = 'Year';
        dropdownType = 'radio';
    }

    //пока заглушки
    if (dropdownType === 'list') {
        return (
            <ul>
                <DropdownItem dropdownType={dropdownType} text={content} />
                <DropdownItem dropdownType={dropdownType} text={content} />
                <DropdownItem dropdownType={dropdownType} text={content} />
                <DropdownItem dropdownType={dropdownType} text={content} />
                <DropdownItem dropdownType={dropdownType} text={content} />
                <DropdownItem dropdownType={dropdownType} text={content} />
                <DropdownItem dropdownType={dropdownType} text={content} />
                <DropdownItem dropdownType={dropdownType} text={content} />
            </ul>
        );
    }

    if (dropdownType === 'radio') {
        return <DropdownRadio></DropdownRadio>;
    }
};




