# qboot
quill platform branding

Live here http://style.quill-platform.com/

To use variables provided by bootstrap in your project place the below in your less file.

`@import (reference) '~qboot/less/qboot';`


# Distribution

IMPORTANT: Be sure to run `npm run build` before distrubting a new build. We can't run `prepublish` scripts since our internal modules are not kept on npm. If your changes are not appearing on the consuming module this is probably why!

Be sure to bump the version number and create a tag and update dependencies in consuming applications where needed.

`git tag v0.0.x`

`git push origin v0.0.x`

Note all consuming applications should use branch tags in their `package.json` to avoid breaking changes.
