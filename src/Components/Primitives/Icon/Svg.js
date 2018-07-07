import React from 'react';
import styled from 'styled-components';
import getSvgAttributes from './svgAttributes';

const SvgComponent = (props) => {
    const attributes = getSvgAttributes(props);

    return (
        <svg {...attributes}>
            {props.children}
            <path d={props.path} />
        </svg>
    );
};

export default SvgComponent;
