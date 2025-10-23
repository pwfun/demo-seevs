import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DevDocs Demo',
  tagline: 'Documentation as Code - Simple, Fast, Developer-Friendly',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/demo-seevs/',

  organizationName: 'yourusername',
  projectName: 'docs-demo',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Docs-only mode
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/yourusername/docs-demo/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DevDocs Demo',
      items: [
        {
          href: 'https://github.com/yourusername/docs-demo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/intro',
            },
            {
              label: 'API Reference',
              to: '/api-reference',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yourusername/docs-demo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Company. Demo site for docs-as-code workflow.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
