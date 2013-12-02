#Gruntfile

A modular, easily configurable Gruntfile.  Graciously shared by [@cowboy](https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb).

Use `.Gruntfile` to define your tasks, and edit the individual tasks as needed per-project.

A quick way to export this repo into an existing project, sans the `.git` folder:
`svn export https://github.com/jonlong/gruntfile/trunk gruntfile`

Alternatively, you can use a bash function like this:
```bash
  ghexport() {
    URL=$1
    NAME=${URL##*/}
    svn export https://github.com/$1/trunk $NAME
  }
```
And call it like this:
`ghexport jonlong/gruntfile`