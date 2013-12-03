# Gruntfile

A modular, easily configurable Gruntfile.  Graciously shared by [@cowboy](https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb).

Use `.Gruntfile` to define your tasks, and edit the individual tasks as needed per-project.

## Usage

I've always wanted to maintain a repo of commonly used Grunt configs, with the ability to easily toggle them on and off based on a project's needs. The scripts below are designed to help easily import a nice base into your working directory.

A quick way to export this repo into an existing project, sans the `.git` folder:
`svn export https://github.com/jonlong/gruntfile/trunk gruntfile`

Alternatively, you can set up a bash function:
```bash
  ghexport() {
    URL=$1
    NAME=${URL##*/}
    svn export https://github.com/$1/trunk $NAME
  }
```
And call it like this:
`ghexport jonlong/gruntfile`

Finally, for an all-in-one gruntfile import-and-install:
```bash
  gruntimport() {

    # We need to list deps in package.json, so let's see if it exists first
    if [ ! -f package.json ]; then
      echo "package.json not found. Please add it to use gruntimport."
      return 1
    fi

    ghexport jonlong/gruntfile
    mv gruntfile/* .
    rm -r gruntfile

    npm install grunt --save-dev

    # Install all the modules and save them to the package.json
    # Assumes the filenames are Grunt module names
    for f in grunt/*
    do
      modulename=`basename $f .js`
      npm install $modulename --save-dev
    done
  }
```
## Note
Just remember to name your individual module files after their npm counterparts for smooth installin'
