# XAMI Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Refactor Plan

> **Note:** This is a work in progress. The goal is to refactor the current website to use Docusaurus.

- [x] Use `create-docusaurus` to create a new template website
- [x] Add pages for each of the main sections from the current website
- [ ] Add content to each of the pages
    - [x] Config Home page
    - [x] Add Our Mission page
    - [ ] Add People page
    - [x] Add Research Projects page (with subpages)
        - [x] Add subpage for project 1
        - [x] Add subpage for project 2
        - [x] Add subpage for project 3
        - [x] Add subpage for project 4
    - [ ] Add Publications page
    - [ ] Add XAMI-Tube page


## Getting Started

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### File Structure

```
.
├── README.md
├── blog
│   ├── 2019-05-28-first-blog-post.md
│   ├── 2019-05-29-long-blog-post.md
│   ├── 2021-08-01-mdx-blog-post.mdx
│   ├── 2021-08-26-welcome
│   ├── authors.yml
│   └── tags.yml
├── docs
│   ├── intro.md
│   ├── tutorial-basics
│   └── tutorial-extras
├── docusaurus.config.ts # website config
├── package.json
├── sidebars.ts # sidebar config
├── src
│   ├── components
│   ├── css
│   └── pages
├── static
│   └── img
├── tsconfig.json
└── yarn.lock

12 directories, 12 files
```