import React from 'react';
import { ThemeProvider } from 'styled-components';
import { makeSymbol } from 'react-sketchapp';
import IconSVG from './Icon';

// makeSymbol(() => (
//   <Icon label="Label" />
// ), 'Atoms/Icon');

const Icon = (props) => {
    let {style, ...iconProps} = props;

    return (
        <div style={style}>
            <IconSVG {...iconProps}></IconSVG>
        </div>
    );
};

export default Icon;

// And autoexecute ??
export const exposeSymbol = ({ name, icon, theme }) => {
  icon = icon || "amazon";
  makeSymbol(() => (
      <ThemeProvider theme={theme}>
          <Icon
              icon={icon}
          />
      </ThemeProvider>
  ), name);
};
