import React from 'react';
import styled from 'styled-components';
import { Svg } from 'react-sketchapp';

import getSvgAttributes from './svgAttributes';

const SvgComponent = (props) => {
    const attributes = getSvgAttributes(props);

    return (
        <Svg {...attributes}>
            {props.children}
            <Svg.Path d={props.path} />
        </Svg>
    );
};

export default SvgComponent;
