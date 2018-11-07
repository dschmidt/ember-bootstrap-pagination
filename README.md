ember-bootstrap-pagination
==============================================================================

Ember component to render a Bootstrap set of pagination buttons.

**What it does:**

* Renders a set of Bootstrap pagination buttons for first, previous, current, next and last pages.
* When a pagination button is selected, the component passes back the newly requested page value and the current page value.
* Disables relevant pagination buttons if there are no next or previous pages.

**What it does not do:**

* Backend requests to retrieve page content. That bit is up to you. :)

Installation
------------------------------------------------------------------------------

```bash
ember install ember-bootstrap-pagination
```

Usage
------------------------------------------------------------------------------

**Requirements**
Simply specify the first, last, previous, next and current page numbers and the component will do the rest.

These values can come from anywhere you wish.

The only requirement is that they are placed in an object called `pages`.

You will also need an action called `updatePagination` to update the pages.
#####EXAMPLE:

**app/controllers/somefile.js**

```javascript
import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
    pages: computed(function() {
      return EmberObject.create({
        first: 1, // these values can be obtained from anywhere you wish
        last: 10,
        prev: 8,
        self: 10,
        next: null
    });
  }),
  actions: {
    updatePagination(requestedPage, currentPage) {
      console.log(requestedPage, currentPage);
    }
  },
});

```

* `first` the first page number
* `last` the last page number
* `prev` the previous page number
* `self` the current page number
* `next` the next page number

If there is not a `prev` or `next` value, simply provide a value of `null`. This will result in the relevant pagination button being disabled.

When the `updatePagination` action is triggered, the `requestedPage` and `currentPage` are passed back. These can be used to make a request for the new page.

**app/templates/somefile.hbs**

Using the component in the template

```hbs
{{ember-bootstrap-pagination
  pages=pages
  paginate=(action "updatePagination")
}}
```
We pass it the `pages` object and the action required to retrieve new page numbers.

This will result in the Bootstrap pagination set being rendered into the browser.

### Contributing

* `git clone https://github.com/markogrady1/ember-bootstrap-pagination.git`


### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
