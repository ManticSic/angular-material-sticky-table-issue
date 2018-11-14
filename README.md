# Sticky

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.  

This is only a very simple rebuild of an app having a similar strcture.
The resulting DOM-Structure is the smae, aside from used `<router-outlet>`'s.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# THE ISSUE

## Description
Using `position: sticky` for table cells doesnt work if the table is used in Angular Materials `mat-sidenav-container`.
When using `mat-sidenav-container` `position: sticky` behave like a regular `position: relative`.

## Reproduce
Start the development server, open `http://localhost:5000/` in your browser and see what happens with our sticky header.

## Solution
https://stackoverflow.com/questions/52441095/sticky-table-header-doesnt-work-in-angular-materials-mat-sidenav-container/52474361#52474361
