import React from 'react';
import { render, TextStyles } from 'react-sketchapp';
import { createNewDocument, getStoragePath, saveDocument, closeDocument, addLibrary } from './Utils/Sketch/sketch-utils';

import atomicTheme from './Style';
import App from './App';
import Arboard from './Components/Sketch/Artboard';

import { exposeSymbol as exposeButtonSymbol } from './Components/Form/Button';
import { exposeSymbol as exposeIconSymbol } from './Components/Primitives/Icon';

const Document = () => (
  <Arboard name="Global" style={{padding: 32}}>
    <View>
        <App />
    </View>
  </Arboard>
);

export function generateLibrary (context) {
  // Injected in Webpack DefinePlugin
  const libraryName = SKETCH_PLUGIN_NAME;

  const document = createNewDocument(context);

  context.document = document;

  renderLibrary(context);

  const path = getStoragePath(context, libraryName);
  saveDocument(document, path);
  closeDocument(document);
  addLibrary(path);

  context.document.showMessage('Library added! 🙌');
};

export function renderLibrary(context) {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    atomicTheme.typography
  );

  exposeButtonSymbol({
      name: 'Atoms/Button',
      theme: atomicTheme
  });

  for (let [key, value] of Object.entries(atomicTheme.icons)) {
      exposeIconSymbol({
          name: 'Atoms/Icons/' + key,
          icon: key,
          theme: atomicTheme
      });
  }

  render(<Document />, context.document.currentPage());
};
