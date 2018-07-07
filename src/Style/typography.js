// import { css } from 'styled-components/primitives';
import colors from './colors';

const typography = {
    "H1": {
        color: colors.text.black,
        fontSize: 24,
        fontFamily: "Arial", // "Lato"
        fontWeight: "bold",
        lineHeight: 24,
        marginBottom: 24
    },
    "H2": {
        color: colors.text.black,
        fontSize: 22,
        fontFamily: "Arial", // "Lato"
        fontWeight: "bold",
        lineHeight: 22,
        marginBottom: 22
    },
    "Body": {
      color: colors.text.black,
      fontSize: 14,
      fontFamily: "Arial",
      fontWeight: "normal",
      lineHeight: 14,
      marginBottom: 0
    }
};

// for (let type in typography) {
//     typography[type].css = css`
//         color: ${typography[type].color};
//         font-size: ${typography[type].fontSize}px;
//         font-family: "${typography[type].fontFamily}";
//         font-weight: "${typography[type].fontWeight}";
//         line-height: ${typography[type].lineHeight}px;
//         margin-bottom: ${typography[type].marginBottom}px;
//     `;
// }

export default typography;
