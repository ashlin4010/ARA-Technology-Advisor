import React from 'react';
import { getColor } from 'random-material-color';

import {Chip, TextField, Checkbox, Autocomplete} from '@mui/material'
import { createFilterOptions } from '@mui/material/Autocomplete';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const OPTIONS_LIMIT = undefined;
const defaultFilterOptions = createFilterOptions();


export default function TagSelector(props) {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
    const checkedIcon = <CheckBoxIcon fontSize="small"/>;

    const tags = props.tags ? props.tags.map((tag) => {
        return {name: tag, color: getColor({text: tag})}
    }) : [];
    const defaultValue = props.defaultValue ? props.defaultValue.map((tag) => {
        return {name: tag, color: getColor({text: tag})}
    }) : [];
    const readOnly = !!props.readOnly;
    const width = props.width || 400;
    const size = props.size;

    const filterOptions = (options, state) => defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);

    return (
        <Autocomplete
            onChange={props.onChange || undefined}
            multiple
            filterOptions={filterOptions}
            readOnly={readOnly}
            freeSolo={readOnly}
            disablePortal
            disableCloseOnSelect
            defaultValue={defaultValue}
            options={tags}
            sx={{width}}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            renderOption={(props, option, {selected}) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{marginRight: 8}}
                        checked={selected}
                    />
                    {option.name}
                </li>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    sx={{".MuiInputBase-root": {minHeight: 125}}}
                    label="Tags"
                />
            )}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        size={size}
                        {...(props.color === true ? {style: {backgroundColor: option.color, color: "white"}} : {})}
                        label={option.name}
                        {...getTagProps({index})}
                    />
                ))
            }
        />
    );
}