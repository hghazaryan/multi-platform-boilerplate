import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import atomicTheme from './Style';

// import Label from './Components/Label';
// import Palette from './Components/Palette';
// import PaletteGroup from './Components/PaletteGroup';
// import Section from './Components/Section';
// import TypeSpecimen from './Components/TypeSpecimen';
// import Profile, { exposeSymbol as exposeProfileSymbol } from './Components/Profile';
// import Button, { exposeSymbol as exposeButtonSymbol } from './Components/Form/Button';
// import Button from './Components/Form/Button';

// import Profile from './components/Profile';
import Button from './Components/Form/Button';
import Icon from './Components/Primitives/Icon';
// import Space from './components/Space';

import { faPlus } from '@fortawesome/fontawesome-free-solid';
import IconAmazon from '~/Assets/Icons/FontAwesome/amazon.svg';



// import DATA from './data';

// const H1 = styled.h1`
//   font-family: "SF UI Display", "San Francisco";
// `;
//
// const P1 = styled.p`
//   font-family: "SF UI Display", "San Francisco";
//   max-width: '28em';
//   line-height: 1.5;
// `;
//
// const Flex = styled.div`
//   display: 'flex';
//   flex-direction: 'row';
// `;

/*
 * <Profile /> is defined with platform-independent components
 * from react-primitives. We can use it in our web UI, and
 * continue to use primitives, or mix them with DOM elements
 */
// const App = () => (
//   <div>
//     <H1>Cross-platform components!</H1>
//     <P1>
//       &lt;Profile /&gt; is defined with platform-independent components
//       from react-primitives. We can use it in our web UI, and
//       continue to use primitives, or mix them with DOM elements
//     </P1>
//     <Flex>
//       {DATA.map(user => (
//         <Space key={user.screen_name} h={spacing} v={spacing}>
//           <Profile user={user} />
//           <Button label="Awesome Button" />
//         </Space>
//       ))}
//     </Flex>
//   </div>
// );

const App = () => (
  <ThemeProvider theme={atomicTheme}>
      <div>
          <div>
              <Icon icon="circle" color="pink" height="16" />
          </div>
          <div>
              <Icon icon={IconAmazon} color="red" height="16" />
          </div>
          <div>
              <Button icon="coffee" label="Coffee Button" />
          </div>
          <div>
              <Button icon={faPlus} label="Plus Button" />
          </div>
      </div>
  </ThemeProvider>
);

// const Flex = styled(View)`
//     flex-wrap: wrap;
//     flex-direction: row;
// `;
//
// const xDocument = ({ system, theme }) => (
// <Arboard name="Global" style={{ padding: system.spacing * 2 }}>
//     <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
//         <Label>
//             This is an example react-sketchapp document, showing how to render a
//             styleguide from a data representation of your design system.
//         </Label>
//     </View>
//
//     <Section title="Type Styles">
//         {/*Object.keys(theme.typography).map(name => (
//             <TypeSpecimen name={name} style={TextStyles.get(name)} />
//         ))*/}
//     </Section>
//
//     <Section title="Color Palettes">
//         {/*Object.keys(theme.colors).map(category => (
//             <PaletteGroup title={category} colors={theme.colors[category]} />
//         ))*/}
//     </Section>
//
//     <Section title="Component">
//         <Flex>
//             <Profile user={DATA[0]} />
//             <ThemeProvider theme={theme}>
//                 <Button label="I'm a button" />
//             </ThemeProvider>
//         </Flex>
//     </Section>
// </Arboard>
// );

export default App;
