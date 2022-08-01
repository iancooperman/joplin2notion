# joplin2notion

A script meant to aid in the transfer of entries from [Joplin](https://joplinapp.org/) to [Notion](https://www.notion.so/)

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<h3 align="center">joplin2notion</h3>

  <p align="center">
    A script meant to aid in the transfer of entries from <a href="https://joplinapp.org/">Joplin</a> to <a href="https://www.notion.so/">Notion</a>
    <br />
    <a href="https://github.com/iancooperman/joplin2notion"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/iancooperman/joplin2notion">View Demo</a>
    ·
    <a href="https://github.com/iancooperman/joplin2notion/issues">Report Bug</a>
    ·
    <a href="https://github.com/iancooperman/joplin2notion/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `iancooperman`, `joplin2notion`, `@IanPLCooperman`, `ian-pl-cooperman`, `gmail`, `ian.pl.cooperman`, `joplin2notion`, `A script meant to aid in the transfer of entries from [Joplin](https://joplinapp.org/) to [Notion](https://www.notion.so/)`

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create a Notion integration and copy the internal integration token by following the steps here: [https://www.notion.so/help/add-and-manage-integrations-with-the-api](https://www.notion.so/help/add-and-manage-integrations-with-the-api)
2. Clone the repo
   ```sh
   git clone https://github.com/iancooperman/joplin2notion.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your keys into a file called `.env`
   ```env
   NOTION_TOKEN="secret_ABCDEFGHIJKLMNOPQRSTUVWXYZ123456"
   JOPLIN_CLIPPER_PORT=41184
   JOPLIN_AUTHORIZATION_TOKEN="e39c0d1dc22ff649a545cfe65b6f0b75cdeeeb0b5f923492b5bea4f390f40e9155efc34981843d156cf9c2489783fc6dc1515538e63cfb39d59f7946093f6ca2"
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
In a terminal, enter the following:

ps
```
node index.js [joplin-notebook-id] [notion-database-id]

```

*Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.*


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing
This code was written solely for my own purposes. I have no intention to maintain this repo after my own usage is done. I just thought that others might be able to benefit from my work here.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ian Cooperman - [@IanPLCooperman](https://twitter.com/IanPLCooperman) - ian.pl.cooperman@gmail.com

Project Link: [https://github.com/iancooperman/joplin2notion](https://github.com/iancooperman/joplin2notion)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/iancooperman/joplin2notion.svg?style=for-the-badge
[contributors-url]: https://github.com/iancooperman/joplin2notion/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/iancooperman/joplin2notion.svg?style=for-the-badge
[forks-url]: https://github.com/iancooperman/joplin2notion/network/members
[stars-shield]: https://img.shields.io/github/stars/iancooperman/joplin2notion.svg?style=for-the-badge
[stars-url]: https://github.com/iancooperman/joplin2notion/stargazers
[issues-shield]: https://img.shields.io/github/issues/iancooperman/joplin2notion.svg?style=for-the-badge
[issues-url]: https://github.com/iancooperman/joplin2notion/issues
[license-shield]: https://img.shields.io/github/license/iancooperman/joplin2notion.svg?style=for-the-badge
[license-url]: https://github.com/iancooperman/joplin2notion/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ian-pl-cooperman
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 