# Gruntfile

A modular, easily configurable Gruntfile.  Graciously shared by [@cowboy](https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb).

##Why

I've always wanted to maintain a repo of commonly used Grunt configs, with the ability to easily toggle them on and off based on a project's needs. The scripts below are designed to help easily import a nice base into your working directory.

## Usage

Use `Gruntfile.js` to define your tasks, and edit the individual tasks as needed per-project.

`Gruntfile.js` will load all the top-level tasks in the `grunt` directory.  To construct a new workflow, just grab what you need from the `archive` directory and move it directly into the `grunt` directory.  

To share configuration between tasks, add variables to `grunt.initConfig` in `Gruntfile.js`, and call `grunt.config.get('variable')` in the task itself.

The current example demonstrates a working Express server with the port and server script defined by config variables.

## Importing into a new project

If you don't want to deal with submodules, here's a quick way to import this repo into an existing project, sans the `.git` folder:
```bash
svn export https://github.com/jonlong/gruntfile/trunk gruntfile
```

Alternatively, you can set up a bash function:
```bash
  ghexport() {
    URL=$1
    NAME=${URL##*/}
    svn export https://github.com/$1/trunk $NAME
  }
```

And call it like this:
```bash
ghexport jonlong/gruntfile
```

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
