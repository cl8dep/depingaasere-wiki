import 'dotenv/config'

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const plugins = [];

if (process.env.NODE_ENV !== "development") {
  plugins.push([
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: process.env.TRACKING_ID,
      anonymizeIP: true,
    },
  ])
}

const config: Config = {
  title: 'De pinga asere',
  tagline: 'De pinga asere',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.depingaasere.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cl8dep', // Usually your GitHub org/user name.
  projectName: 'depingaasere-wiki', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  plugins: [
    ...plugins
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cl8dep/depingaasere-wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cl8dep/depingaasere-wiki/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'De pinga asere',
      logo: {
        alt: 'De pinga asere',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'migrateSidebar',
          position: 'left',
          label: 'Migración',
        },
        {
          type: 'docSidebar',
          sidebarId: 'businessSidebar',
          position: 'left',
          label: 'Negocios',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ocioSidebar',
          position: 'left',
          label: 'Ocio',
        },
        {
          type: 'docSidebar',
          sidebarId: 'otherSidebar',
          position: 'left',
          label: 'Otros',
        }
        // {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Migración',
          items: [
            {
              label: 'Uruguay',
              to: 'docs/migration/uruguay',
            }
          ],
        },
        {
          title: 'Negocios',
          items: [
            {
              label: 'Bitcoin',
              to: 'docs/business/bitcoin/intro',
            },
            {
              label: 'Divisas',
              to: 'docs/business/monedas/intro',
            }
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Más',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'Código fuente',
              href: 'https://github.com/cl8dep/depingaasere-wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} De pinga asere. Hecho con poca paciencia pero con mucho amor.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
