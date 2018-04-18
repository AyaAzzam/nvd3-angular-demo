# Nvd3AngularDemo


 A simple demo of drawing charts with Angular4, [d3](https://github.com/d3/d3), [NVD3](https://github.com/novus/nvd3) and [ng2-nvd3](https://github.com/krispo/ng2-nvd3).

## Dependencies
* d3 version 3.5.17
* nvd3 version 1.8.6
* ng2-nvd3 version 2.0.0


## Notes:
* you need to include `d3` and `nvd3` in `angular-cli.json`

```json
       "scripts": [
        "../node_modules/d3/d3.min.js",
        "../node_modules/nvd3/build/nv.d3.min.js"
      ],
```

* you need to include `nvd3`style sheet in `angular-cli.json`

```json
      "styles": [
        "styles.css",
        "../node_modules/nvd3/build/nv.d3.css'"
      ],
```
OR add the css file to your code base for more customization.


This project was generated with angular-cli

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


