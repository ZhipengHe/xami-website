import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import useBaseUrl from '@docusaurus/useBaseUrl';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const baseUrl = '/';

const config: Config = {
  title: 'XAMI Lab @QUT',
  tagline: `Supporting Human-Machine Collaboration and Co-evolution by Explainable Analytics for Machine Intelligence`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xami-lab.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZhipengHe', // Usually your GitHub org/user name.
  projectName: 'xami-website', // Usually your repo name.

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
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'research',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/ZhipengHe/xami-website/tree/master/',
        },
        blog: {
          path: 'publications',
          routeBasePath: 'publications',
          blogTitle: 'Publications',
          blogSidebarTitle: 'All Publications',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          blogDescription: 'Research publications from XAMI Lab',
          showReadingTime: false,
          remarkPlugins: [],
          rehypePlugins: [
          ],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        pages: {
          remarkPlugins: [
          ],
          rehypePlugins: [],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/XAMI_v2.png',
    navbar: {
      title: 'XAMI Lab',  
      logo: {
        alt: 'XAMI Logo',
        src: 'img/XAMI-Lab-Collapsed_Overlay.png',
      },
      items: [
        {to: '/mission', label: 'Our Mission', position: 'left'},
        {to: '/people', label: 'People', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'projectSidebar',
          position: 'left',
          label: 'Research Projects',
        },
        // {
        //   type: 'dropdown',
        //   position: 'left',
        //   label: 'Publications',
        //   to: '/bibliography',
        //   items: [
        //     {to: '/bibliography', label: 'Bibliography'},
        //     {to: '/publications', label: 'All Publications'},
        //   ],
        // },
        {to: '/bibliography', label: 'Publications', position: 'left'},
        {to: '/xami-tube', label: 'XAMI-Tube', position: 'left'},
        {
          href: 'https://github.com/XAMI-LAB',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      {
        title: 'Related Links',
        items: [
          {
            html: `
                <a href="https://www.qut.edu.au/" target="_blank" rel="noreferrer noopener" aria-label="QUT Website">
                  <img src="${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}img/QUT_TAGLINE_LOGO_LEFT_RGB_paths_REV.svg" alt="QUT Website" style="width: 40%; height: auto;"/>
                </a>
              `,
          },
          // {
          //   html: `
          //       <a href="https://www.uts.edu.au/" target="_blank" rel="noreferrer noopener" aria-label="UTS Website">
          //         <img src="${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}img/uts.svg" alt="UTS Website" style="width: 25%; height: auto;"/>
          //       </a>
          //     `,
          // },
        ],
      },
      {
        title: 'Contact Us',
        items: [
          {
            label: 'Email',
            href: 'mailto:xami.initiaive@gmail.com',
          },
        ],
      }
      ],
      logo: {
        alt: 'XAMI Lab Logo',
        src: '/img/XAMI-Lab-Long.png',
        href: '/',
        style: {width: "40%", height: "auto"},
      },
      copyright: `Copyright © 2021 - ${new Date().getFullYear()} XAMI Lab @QUT. Last updated: ${new Date().toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})} `,

    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
