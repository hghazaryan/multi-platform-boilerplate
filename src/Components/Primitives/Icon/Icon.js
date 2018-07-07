import React from 'react';
import styled, { css, withTheme } from 'styled-components';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// import theme from '~/Style';

// import { faPlus, faCircle, faCoffee } from '@fortawesome/fontawesome-free-solid';
// import IconAmazon from '~/Assets/Icons/FontAwesome/amazon.svg';

import Svg from './Svg';
import getSvgAttributes from './svgAttributes';

const Icon = (props) => {
    let SvgComponent,
        StyledSvgComponent;

    const attributes = getSvgAttributes(props);

    let icon = props.icon;

    // Treating as icon name
    if (_.isString(icon)) {
        icon = props.theme.icons[icon];
    }

    // Handle FontAwesome icon objects
    if (_.has(icon, 'icon')) {
        attributes.viewBox = `0 0 ${icon.icon[0]} ${icon.icon[1]}`;
        attributes.path = icon.icon[4];

        if (attributes.width && !attributes.height) {
            attributes.height = Math.ceil(attributes.width * icon.icon[1] / icon.icon[0]);
        }
        else if (!attributes.width && attributes.height) {
            attributes.width = Math.ceil(attributes.height * icon.icon[0] / icon.icon[1]);
        }

        SvgComponent = Svg;
    }
    // Treating as own svg icon
    else {
        SvgComponent = icon;
    }

    /*
    if (props.inline) {
        StyledSvgComponent = styled(SvgComponent)`
            display: inline;
        `;
        // font-size: inherit;
        // height: 1em;
        // overflow: visible;
        // vertical-align: -.125em;
    } else {
        StyledSvgComponent = SvgComponent;
    }
    */

    return (
        <SvgComponent aria-hidden="true" role="img" {...attributes}>
            {props.children}
        </SvgComponent>
    );
};

Icon.defaultProps = {
    icon: 'amazon',
    color: 'black',
    height: 16
};

const inlineCSS = css`
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -.125em;
`;

// const ThemedIcon = withTheme(Icon);
// ThemedIcon.defaultProps = Icon.defaultProps;

const StyledIcon = styled(Icon)`
    ${props => props.inline ? inlineCSS : ''}
`;

export default withTheme(StyledIcon);
