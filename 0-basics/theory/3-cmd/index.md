# Command Line Basics

The command line, also known as the terminal or shell, is a text-based interface for interacting with your computer's operating system. It allows you to execute commands and run scripts without using a graphical user interface (GUI).

To open the command line on a Windows computer, press the "Windows + R" keys, type "cmd" in the Run dialog box, and press Enter. On a Mac, open the Terminal app, which can be found in the Utilities folder within the Applications folder.

Once you have the command line open, you can start typing commands.

## Basic Commands

Here are some of the most commonly used commands for working with files and directories on the command line:

- `cd`: Change directory. Allows you to navigate to a different directory.
- `ls`: List the contents of the current directory.
- `mkdir`: Make directory. Creates a new directory.
- `rm`: Remove. Deletes a file or directory. Use with caution!
- `cp`: Copy. Copies a file from one location to another.
- `mv`: Move. Moves a file from one location to another.

## Git Commands

Git is a version control system that allows you to track changes to your codebase over time. Here are some of the most commonly used Git commands:

- `git init`: Initialize a new Git repository in the current directory.
- `git add`: Add changes to the staging area.
- `git commit`: Commit changes to the repository.
- `git push`: Push changes to a remote repository.
- `git pull`: Pull changes from a remote repository.
- `git clone`: Clone a remote repository to your local machine.

## Package Managers

Package managers are tools that help you manage dependencies in your software projects. Here are some of the most commonly used package managers:

- `npm`: Node Package Manager. Used for managing dependencies in Node.js projects.
- `yarn`: Another package manager for Node.js projects.
- `pip`: Python Package Index. Used for managing dependencies in Python projects.
- `poetry`: Another Python package manager that aims to provide a simpler and more modern approach to managing dependencies, while also providing features like version locking and project isolation.
- `pipenv`: A higher-level Python package manager that builds on top of pip and adds additional features like dependency resolution and virtual environments.

---

## npm

`npm` is a package manager for Node.js. It is used to manage dependencies and package distribution. Here's how to get started:

1. First, you need to install Node.js. You can download the latest version from the official website: https://nodejs.org/en/download/

2. Once you have Node.js installed, you can use `npm` to install packages. To install a package, open a command prompt or terminal window and type `npm install <package-name>`.

3. If you want to install a package globally (meaning it can be used by any project on your system), add the `-g` flag: `npm install -g <package-name>`.

4. To use a package in your project, you need to add it to your `package.json` file. This file is automatically created when you run `npm init` in your project directory. To add a package, type `npm install <package-name> --save`.

5. Once you've installed your packages, you can run scripts defined in your `package.json` file using the `npm run` command. For example, if you have a script called "start" in your `package.json` file, you can run it with `npm run start`.

Sure, here's a refactored version of the `pipenv` explanation using a `Pipfile` instead of `requirements.txt`:

## pipenv

`pipenv` is a package manager for Python that provides virtual environments, dependency management, and package installation. Here's how to get started:

1. First, you need to install Python. You can download the latest version from the official website: https://www.python.org/downloads/
2. Once you have Python installed, you can install `pipenv` by running the following command: `pip install pipenv`.
3. To create a new virtual environment, navigate to your project directory in the terminal and run `pipenv shell`. This will create a new virtual environment and activate it.
4. To install a package, run `pipenv install <package-name>`. This will install the package and add it to your virtual environment.
5. If you want to use an existing `Pipfile` to install your packages, you can run `pipenv install`. This will install all the packages listed in the `Pipfile`.
6. If you want to add a new package to your `Pipfile`, you can run `pipenv install <package-name> --dev` to install it as a development dependency or `pipenv install <package-name>` to install it as a regular dependency. This will add the package to your `Pipfile`.
7. To remove a package, run `pipenv uninstall <package-name>`. This will remove the package from your virtual environment and from your `Pipfile`.
8. To exit the virtual environment, type `exit`.

That's it! With `pipenv`, you can easily manage your project's dependencies and keep your development environment clean and organized using a `Pipfile`.

### Pipenv with vs code

If you are having troubles with VScode and pipenv make sure you are inside the right environemt:

1. Open the root folder of your project in VS Code.
2. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac) to open the Command Palette.
3. Type "Python: Select Interpreter" and press Enter.
4. A list of available Python interpreters will be displayed. Look for the virtual environment created by `pipenv`. It should be located in the `.venv` directory in your project folder.
5. Select the virtual environment and press Enter.
6. VS Code will now use the selected virtual environment for your project, and you can install and use packages specific to this virtual environment using the `pipenv` commands described above.

That's it! By selecting the correct virtual environment in VS Code, you can ensure that your project uses the correct dependencies and runs smoothly.
