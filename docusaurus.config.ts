import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'VegaSat - CanSat',
  tagline: 'VegaSat - Slovenian CanSat team',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cansat.si',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VegaSat', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/VegaSat/website',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'VegaSat',
      logo: {
        alt: 'VegaSat Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: "/about",
          position: 'left',
          label: 'About us',
        },
        {
          to: "/supporters",
          position: 'left',
          label: 'Supporters',
        },
        {
          href: 'https://github.com/VegaSat',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram - VegaSat',
              href: 'https://www.instagram.com/vega.sat',
            },
            {
              label: 'Instagram - SpaceApps',
              href: 'https://www.instagram.com/spaceapps.vegova',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@vegasat6273',
            },
          ],
        },
        {
          title: "Address",
          items:[
            {
              html: "VegaSat<br />Vegova Ljubljana<br />Vegova ulica 4,<br />1000 Ljubljana<br />Slovenia",
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} VegaSat, Elektrotehniško-računalniška strokovna šola in gimnazija Ljubljana.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
