import React from 'react';
import { ThemeProvider } from 'styled-components';
import { makeSymbol } from 'react-sketchapp';
import Button from './Button';

// const ButtonSymbol = makeSymbol(({ label }) => (
//   <Button
//       overrides={{
//           Label: label
//       }}
//   />
// ), 'Atoms/Button');

export default Button;
// export default ButtonSymbol;

// And autoexecute ??
export const exposeSymbol = ({ name, theme }) => {
    makeSymbol(() => {
        return (
            <ThemeProvider theme={theme}>
                <Button
                    icon="amazon"
                    label="Label"
                />
            </ThemeProvider>
        );
    }, name);
};
