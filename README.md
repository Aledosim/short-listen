# Short Listen
[![codecov][codecov-shield]][codecov-url]
[![cypress][cypress-shield]][cypress-url]
[![license][license-shield]][license-url]

<br />
<p align="center">
  <h3 align="center">Short Listen</h3>

  <p align="center">
    A small project to navigate the songs of Deezer
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
  </p>
</p>

<details open="open">
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
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <ul>
        <li><a href="#futuretasks">Future tasks</a></li>
      </ul>
  </ol>
</details>

## About The Project
This is a one page application that shows you the most played musics of Deezer. It allows you to search the catalog and save your favorite ones in a list. The list isn't persistent and it don't play the previews of the musics yet.
You can check live [here]().

### Built With
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Axios](https://axios-http.com/)
* [Styled Components](https://styled-components.com/)
* [Cypress](https://www.cypress.io/)


## Getting Started
Just clone this repo and install it using npm.


### Prerequisites
To run this project you need node (developed with v14.17.5)


### Installation
1. Clone the repo and enter the folder
   ```sh
   git clone https://github.com/Aledosim/short-listen
   cd short-listen
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
## Usage
To view the page locally run the development server
   ```sh
   npm start
   ```

Right now Deezer API responses don't have access-control-allow-origin headers. If you find troubles with CORS, try some extension for your browser. [More info](https://stackoverflow.com/questions/45483759/cannot-load-deezer-api-resources-from-localhost-with-the-fetch-api).


### Testing
To run the unit tests execute
```sh
npm test
```

To run the integration tests, run after lauching the development server
```sh
npm run cypress:run
```

## License
Distributed under the GPL3 License. See `LICENSE` for more information.

## Contact
Alexandre do Sim - [LinkedIn](https://www.linkedin.com/in/alexandre-do-sim-86930414b/) - aledosim@yahoo.com.br
Project Link: [https://github.com/Aledosim/short-listen](https://github.com/Aledosim/short-listen)


## Acknowledgements
This application is a Manipulaê junior front-end development challenge.

### What I've learned
For this project I learned to use Redux, Styled Components and Axios. I had some difficulty structuring the Redux slices, but I discovered that it was a problem in the division of responsibilities. Axios is a library easy to learn and use, with great documentation.
Right now in love with Styled Components.

### Future tasks
- Implement music player (to listen the tracks preview)
- A more robust API client
- Better interface design

[codecov-shield]: https://codecov.io/gh/Aledosim/short-listen/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/Aledosim/short-listen
[cypress-shield]: https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/xctxsj/master&style=flat&logo=cypress
[cypress-url]: https://dashboard.cypress.io/projects/xctxsj/runs
[license-shield]: https://img.shields.io/badge/license-GPL3-green
[license-url]: https://raw.githubusercontent.com/Aledosim/short-listen/master/LICENSE
