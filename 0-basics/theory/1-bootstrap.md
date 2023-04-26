# Bootstrap 4: Introduction and Basics

## Getting started

Steps to use bootstrap

1. Go to the Bootstrap website at https://getbootstrap.com/.
2. Click on the "CSS" or "JS" link next to the version of Bootstrap you want to use.
3. Copy the URL of the CSS or JS file from the "Bootstrap CDN" section.
4. Add the Bootstrap CSS file to your HTML file by adding the following line inside the <head> section of your HTML file:

```html
<link rel="stylesheet" href="URL_OF_CSS_FILE" />
```

5. Replace "URL_OF_CSS_FILE" with the URL you copied from the Bootstrap website.
   Add the Bootstrap JS files to your HTML file by adding the following lines before the closing `</body>` tag:

```html
<script src="URL_OF_JQUERY"></script>
<script src="URL_OF_BOOTSTRAP_JS"></script>
```

Replace "URL_OF_JQUERY" with the URL of the jQuery library (which is required by Bootstrap), and replace "URL_OF_BOOTSTRAP_JS" with the URL of the Bootstrap JS file you copied from the Bootstrap website.

example: [bootstrap](./1-bootstrap.html)

## What is Bootstrap?

- Bootstrap is a front-end development framework.
- It was created by a guy named Mark Otto at Twitter.
- It provides a pre-defined stylesheet that helps developers build websites more quickly and easily.
- It is component-oriented, meaning that it provides pre-built components like navigation bars, cards, and modals that developers can use in their own projects.

## Why use Bootstrap?

- Bootstrap is useful because it saves developers time by providing pre-built components.
- It is responsive, meaning that it works well on different screen sizes and devices.
- It provides a consistent look and feel across different projects.
- It is actively maintained and updated by a community of developers.

## Bootstrap Versions and Download

- Bootstrap has several versions, so be sure to use the latest version for your project.
- You can download Bootstrap from the official website, or use a CDN to import it directly into your HTML.

## The Grid System

- The grid system is one of the key features of Bootstrap.
- It provides a way to create layouts using a 12-column grid.
- Rows hold columns as immediate children, and each row has 12 columns.
- Columns are measured in percentages, so they are responsive to different screen sizes.
- There are several classes you can use to specify the size of a column, including col, col-xs, col-sm, col-md, col-lg, and col-xl.

# Code examples

```html
<!-- Basic layout -->
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>
```

### Navbar component

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">My Website</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
```

### Modal component

```html
<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-primary"
  data-toggle="modal"
  data-target="#exampleModal"
>
  Launch demo modal
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">Modal content goes here.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

# Best Practices

- Use the latest stable version of Bootstrap for your project.
- Don't be afraid to customize Bootstrap components to fit your specific design needs.
- Use the grid system to create responsive layouts.
- Use helper/utility classes to avoid writing too much custom CSS.
- Keep your HTML code clean and organized.
