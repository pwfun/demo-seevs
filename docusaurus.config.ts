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

  url: 'https://pwfun.github.io',
  baseUrl: '/demo-seevs/',

  organizationName: 'pwfun',
  projectName: 'demo-seevs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/pwfun/demo-seevs/tree/main/',
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
          href: 'https://github.com/pwfun/demo-seevs',
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
              to: 'intro',
            },
            {
              label: 'API Reference',
              to: 'api-reference',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pwfun/demo-seevs',
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
