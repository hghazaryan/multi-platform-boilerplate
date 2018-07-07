import React from 'react';
import styled, { withTheme } from 'styled-components';

import Icon from '~/Components/Primitives/Icon';

// ButtonTag.defaultProps = {
// 	theme: {
// 		colors: {
//             text: {
//                 white: 'white'
//             },
//             bg: {
//                 black: 'black'
//             }
//         }
// 	}
// };

// ButtonLabel.defaultProps = {
// 	theme: {
//         colors: {
//             text: {
//                 white: 'white'
//             }
//         }
// 		// typography: {
//         //     "Body": {
//         //         // color: 'pink',
//         //         fontSize: 14,
//         //         fontFamily: "Arial",
//         //         fontWeight: "normal"
//         //         // lineHeight: 14,
//         //         // marginBottom: 0
//         //     }
//         // }
// 	}
// };

// const ButtonLabel = styled(Text)`
//     color: ${props => props.theme.typography.Body.color};
//     font-size: ${props => props.theme.typography.Body.fontSize}px;
//     font-family: "${props => props.theme.typography.Body.fontFamily}";
//     font-weight: "${props => props.theme.typography.Body.fontWeight}";
//     line-height: ${props => props.theme.typography.Body.lineHeight}px;
//     margin-bottom: ${props => props.theme.typography.Body.marginBottom}px;
//
//     line-height: 50px;
//     color: #fff;
//     text-align: center;
// `;

// ButtonLabel.defaultProps = {
// 	theme: {
//         colors: {
//             text: {
//                 white: '#ffffff'
//             }
//         },
// 		typography: {
//             "Body": {
//                 // color: 'pink',
//                 fontSize: 14,
//                 fontFamily: "Arial",
//                 fontWeight: "normal"
//                 // lineHeight: 14,
//                 // marginBottom: 0
//             }
//         }
// 	}
// };

// const buttonStyle = {
//   borderRadius: 3,
//   boxSizing: 'border-box',
//   color: colors.White,
//   cursor: 'pointer',
//   padding: spacing.Medium,
//   width: 200,
//   height: 50,
//   backgroundColor: '#595959'
// };

const ButtonTag = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    width: 200px;
    height: 50px;
    background: #595959;
    outline: none;
`;
// color: ${props => props.colors.white};

const StyledIcon = styled(Icon)`
    display: inline-block;
    flex: 0 0 auto;
    margin-right: 15px;
`;
// line-height: 50px;

const SpanTag = styled.span`
    display: inline-block;
    flex: 0 0 auto;
    line-height: 16px;
    font-size: 14px;
    font-family: Arial;
    color: #ffffff;
`;
// line-height: 50px;
// text-align: center;

const Button = ({ icon, label }) => {
    return (
        <ButtonTag>
            {icon &&
                <StyledIcon icon={icon} color="purple" height="16"></StyledIcon>
            }
            <SpanTag>{label}</SpanTag>
        </ButtonTag>
    );
};

// const StyledButton = styled(Button)`
//     border-radius: 3px;
//     border: 0;
//     box-sizing: border-box;
//     cursor: pointer;
//     width: 200px;
//     height: 50px;
//     background: #595959;
// `;

/*
@media (max-width: 700px) {
    background: palevioletred;
}

.label {
    font-size: 14px;
    font-family: Arial;
    line-height: 50px;
    color: #ffffff;
    text-align: center;
}
*/

// Button.defaultProps = {
// 	label: 'Label'
// };

export default withTheme(Button);
