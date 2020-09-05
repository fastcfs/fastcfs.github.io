## fastcfs.github.io

[![Editor CI](https://github.com/fastcfs/fastcfs.github.io/workflows/Editor%20CI/badge.svg)](https://github.com/fastcfs/fastcfs.github.io/actions?query=workflow%3A%22Editor+CI%22)
[![GitHub Pages CI](https://github.com/fastcfs/fastcfs.github.io/workflows/GitHub%20Pages%20CI/badge.svg)](https://github.com/fastcfs/fastcfs.github.io/actions?query=workflow%3A%22GitHub+Pages+CI%22)

[![contributor](https://sourcerer.io/fame/zhangchunsheng/fastcfs/fastcfs.github.io/images/0)](https://sourcerer.io/fame/zhangchunsheng/fastcfs/fastcfs.github.io/links/0)

[Contributors List](https://github.com/fastcfs/fastcfs.github.io/wiki/Contributors)

Fastcfs storage Homepage: <https://fastcfs.github.io>

## How to post a blog

1. Fork it
1. [Syncing your fork](https://help.github.com/cn/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
1. Create your blog branch (git checkout -b your-blog)
1. Write your blog in markdown
1. Add your blog to `_post` folder
1. Add related image to `assets` folder
1. Add your info into `_data/authors.yml`
1. Commit your changes (git commit -am 'added a blog')
1. Push to the branch
1. Create new Pull Request

Done!~

## Contribution Guidelines

### 1. Add Blog Header

All blog should has title, author, date, teaser...

Example as follows:

```yaml
---
title: "'Score Your Face Photo' a Arch&Fastcfs practice"
author: your_github_username
image: your_teaser_image_path
---

<One line abstract for your blog post>

<Your beautiful blog post contents...>
```

### 2. Writing Style

- Keep all filenames & url as lowercase, and use `-` to connect words instead of space. e.g. `2017-10-06-fastcfs-high-performance-distributed-file-storage-system` instead of `2017-10-06-Fastcfs high performance distributed file storage system`
- Find a good image for the blog to make it more beautiful.
- Embed the photo & video before publishing, save all external file to the blog `/assets/${current_year}` directory.

see more: [Do not include Date in URL](https://github.com/fastcfs/fastcfs.github.io/issues/1)

### 4. Just Commit Related Files

Please do not commit unrelated files.

### 5. Add Videos

Example

```html
<iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
```

### 6. Add links to anchor in paragraph

The titles in markdown files will be added an anchor automatically, you can use that to add your own anchor links. And here is some of the rules how the blog generate the anchor:

- convert the title directly to anchor
- spaces will be replaced by dash `-`
- `/`, `&`, `?` and `.` will be eliminated
- Chinese character will be kept in the anchor

#### Example

Say you have a title as `### 我是? a title.bat`. Then you will get the anchor generated as `我是-a-titlebat`. And you can use the generated anchor to implement your own links. Like this:

```markdown
[索米的Link](#我是-a-titlebat)
```

## Usage

### Jekyll

Install all the Jekyll requirements and run it at localhost for blog preview.

#### 1 Use Docker Compose

This is the recommended way for new users to easy getting started

```sh
make docker
```

#### 2 ~~Install Jekyll by Hand~~

You should not use this way except you are a Ruby expert.

```sh
make install
make serve
```

### Test

In order to make sure everything(file name, file size, etc) is ok, you can run the following command to check them before `git push`.

```sh
npm install
npm test
```

### Docusaurus

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

1. Installation: `yarn`
1. Local Development: `yarn start`
    > This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.
1. Build: `yarn build`
    > This command generates static content into the `build` directory and can be served using any static contents hosting service.
1. Deployment `GIT_USER=<Your GitHub username> && USE_SSH=true yarn deploy`
    > If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Directory Structure

We use different branch to support multi language:

- master: English version
- zh: Chinese version

If you want to contribute to English version code, you can pull request to `master` branch.

If you want to contribute to Chinese version code, you can pull request to `zh` branch.

## Welcome to contribute

### Why contribute?

FastCFS is a high performance distributed file storage system.

- [Fastcfs Docker](https://fastcfs.github.io/2020/08/14/fastcfs-docker/)
- .....

### How to contribute docs?

- Fork this repo
- Checkout to the right branch
  - English version: `git checkout master`
  - Chinese version: `git checkout zh`
- Create your doc branch: `git checkout -b doc`
- Write this doc in markdown
- Commit your changes `git commit -am 'doc comment'`
- Push to the branch
- Create new Pull Request to the corresponding branch
  - English version: pull request to master branch
  - Chinese version: pull request to zh branch

### More Contribution

See more in: [Welcome to contribute](https://fastcfs.github.io/docs/welcome-to-contribute)

Contact zhangchunsheng423@gmail.com to learn more

## Markdown Linting Rules

[Markdown Linting Rules Documents](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md)

## Resources

- [Migrating from gitbook to docsify.js](https://timdams.com/2019/05/02/migrating-from-gitbook-to-docsify-js/)
- [Integrating GitBook with JSDoc to Document Your Open Source Project](https://gist.github.com/KevinAst/7e12648245ff2a8e9c1557135014b933)
- [F8 2019: Using Docusaurus to Create Open Source Websites](https://www.youtube.com/watch?v=QcGJsf6mgZE)
- [Jekyll Theme minima](https://github.com/jekyll/minima)

## Maintainers

1. @zhangchunsheng, [Chunsheng Zhang](https://github.com/zhangchunsheng), Researcher of Fastcfs

## Copyright & License

- Code & Docs © 2016-now Fastcfs Contributors <https://github.com/fastcfs>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
