# The `deck` file in NoteTree

A deck is a package, and this is how you define the package metadata.

```
deck @termsurf/deck
  mark <0.0.1>
  head <A TreeCode Package Manager>
  term link-text
  term computation
  term philosophy
  term information
  term platform
  term white-label
  term compiler
  face <Lance Pollard>, site <lp@elk.fm>
  task ./task # the task loader
  read ./book # also a default
  lock apache-2
  sort tool
  link @termsurf/note, mark <0.x.x>
  link @termsurf/nest, mark <0.x.x>
  link @termsurf/crow, mark <0.x.x>
  load work
  load host
```

### `mark`

This is the "version" of the package.

### `task`

```
task ./task
```

### `boot`

You can have a file run on NoteTreetup. Just add this to your deck:

```
boot ./boot
```

This is good for doing dependency injection and such, for initializing
values, etc..
