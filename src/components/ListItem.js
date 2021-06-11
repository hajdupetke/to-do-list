import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'

const CheckBox = styled.input.attrs({type: 'checkbox'})`
        position: relative;
	    cursor: ;pointer;
        margin: 30px;
        margin-right: 10px;
        width: 20px;
        height: 20px;
        '&:before': {
            content: "";
            display: block;
            position: absolute;
            width: 20px;
            height: 20px;
            top: 0;
            left: 0;
            background-color:#e9e9e9;
        },
        '&:checked:before': {
            content: "";
            display: block;
            position: absolute;
            width: 20px;
            height: 20px;
            top: 0;
            left: 0;
            background-color:#1E80EF;
        },
        '&:checked:after': {
            content: "";
            display: block;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            top: 2px;
            left: 6px;
        } 
         `;

const Box = styled.div`
        display: flex;
        flex-direction: row;
        position: relative;
        align-items: center;
        height: 10vh;
        width: 30vw;
        background-color: #EAE9E8;
        margin: 15px;
`;

const Icons = styled(FaTimes)`
        position: absolute;
        right: 30px;   
        color: red;
        cursor: pointer;
`

const ListItem = (props) => {
    const handleChange = e => {
        props.onChange(e.target.checked, props.id)
    }
    const removeChange = e => {
        props.remove(props.id);
    }
    
        return (
            <Box>
                <CheckBox checked={props.checked} onChange={handleChange}/>
                <p>{props.title}</p>
                <Icons onClick={removeChange} />
            </Box>
        )
    
}

export default ListItem;