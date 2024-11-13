import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import * as partials from '@porsche-design-system/components-react/partials';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            headPartials: [
              partials.getMetaTagsAndIconLinks({ appTitle: 'Sample Integration React' }),
              partials.getInitialStyles({
                skeletonTagNames: [
                  'p-button',
                  'p-button-pure',
                  'p-checkbox-wrapper',
                  'p-fieldset-wrapper',
                  'p-link',
                  'p-link-pure',
                  'p-radio-button-wrapper',
                  'p-select-wrapper',
                  'p-textarea-wrapper',
                  'p-text-field-wrapper',
                ],
              }),
              partials.getFontFaceStyles(),
              partials.getFontLinks({ weights: ['regular', 'semi-bold', 'bold'] }),
              partials.getComponentChunkLinks({
                components: [
                  'button',
                  'checkbox-wrapper',
                  'divider',
                  'flex',
                  'grid',
                  'headline',
                  'link',
                  'link-pure',
                  'modal',
                  'pagination',
                  'radio-button-wrapper',
                  'select-wrapper',
                  'spinner',
                  'tabs',
                  'text',
                  'textarea-wrapper',
                  'text-field-wrapper',
                ],
              }),
              partials.getIconLinks({ icons: ['arrow-head-right', 'highway', 'search', 'compare', 'configurate'] }),
            ].join('\n'),
            bodyPartials: [
              partials.getLoaderScript(),
              partials.getBrowserSupportFallbackScript(),
              partials.getCookiesFallbackScript(),
            ].join('\n'),
          },
        },
      }),
    ],
  };
});
