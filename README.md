# Kashmir
> A theme with modern tooling.

![Kashmir Screenshot](screenshot.png)

#### Setup
- Node
  - Use `nvm`
    - [Unix based](https://github.com/creationix/nvm)
    - [Windows](https://github.com/coreybutler/nvm-windows)
- Gulp
  ```
  $ npm install - gulp
  ```
- Composer
  ```
  php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
  php composer-setup.php
  php -r "unlink('composer-setup.php');"
  mv composer.phar /usr/local/bin/composer
  ```
- Drupal Modules
  - Components
    - `composer require drupal/components`
    - `drush dl components`
  - Twig Tweak
    - `composer require drupal/twig_tweak`
    - `drush dl twig_tweak`


#### Setup sub-theme
- Install Kashmir
  - `composer require drupal/kashmir`
  - `drush dl kashmir`
- Enable Kashmir
  - `drush en kashmir`
- Generate a sub-theme
  - `drush kashmir sub_theme_name`
- Configure settings
  - Update settings in `gulp/_config.js` for Browsersync and Source for scripts and styles.


#### Theme tasks
- Styles
  - `gulp styles`
  - To Compile styles and generate RTL styles for files with `.ltr` suffix.
- Styles Lint
  - `gulp scripts-lint`
  - To check styles for errors and warnings.
- Patternlab
  - `gulp patternlab`
  - To generate Patternlab from files in `components`.
- Scripts
  - `gulp scripts`
  - To Compile and Uglify scripts
- Scripts Lint
  - `gulp scripts-lint`
  - To check scripts for errors and warnings.
- SVG
  - `gulp svg`
  - To combine multiple SVG files into a single sprite.
- Watch
  - `gulp watch`
  - Starts a proxy server and, lints and compiles file on change.
- Default
  - `gulp`
  - To generate SVG sprite and lint + compile the scripts and styles in theme.
