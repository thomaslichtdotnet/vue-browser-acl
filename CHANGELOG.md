# CHANGELOG

0.12.0

- new: parent routes are now respected and their tests are run before the
  child/leaf routes. Supports both sync/async tests.

- breaking: changed method signature of meta.can router function. The third parameter is now the `can` function.
  When a function for `meta.can` you must return a promise that returns `true`
  if the user *can*.
