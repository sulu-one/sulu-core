# sulu-core
[![NPM version][npm-image]][npm-url]
[![SULU Package][sulu-package-image]][sulu-package-url]  
> A console shell app to manage sulu packages. It works since [```sulu v0.1.50```](https://github.com/sulu-one/sulu/releases)

## Installation
Only global installation is supported.

```sh
$ npm install -g sulu-core
```

## Usage

```sulu-core``` is just an alias for ```npm --prefix <current-sulu-installation-package-folder> <npm-command-line-arguments>```. So you can use any [npm command line arguments](https://docs.npmjs.com/cli/npm) to manage sulu packages.

```bash
$ npm install -g sulu-core


# sulu-core <npm-command-line-arguments>

$ sulu-core list
$ sulu-core install @npmpackage
$ sulu-core uninstall @npmpackage
$ sulu-core update
```



## License

MIT © [s-a](https://github.com/s-a)


[npm-image]: https://badge.fury.io/js/sulu-core.svg
[npm-url]: https://npmjs.org/package/sulu-core
[sulu-package-url]: https://github.com/sulu-one/sulu
[sulu-package-image]: https://img.shields.io/badge/SULU-package-orange.svg
