# WebApp boilerplate with React JS and Flask API

Build web applications using React.js for the front end and python/flask for your backend API.

- Documentation can be found here: https://start.4geeksacademy.com/starters/react-flask
## Getting started

### Pre-requisites

#### Docker & Docker compose

In order to be able to start using this tempalte you need to docker installed.

We will use **docker** and **docker compons**e in order to be able to have a local instance of a db (the one provided is a postgreSQL config).

Here you have the links to the oficial documentation:

- [Docker on mac](https://docs.docker.com/desktop/install/mac-install/)
- [Docker on windos](https://docs.docker.com/desktop/install/windows-install/)
- [Docker on linux](https://docs.docker.com/desktop/install/linux-install/)
- [Docker compose](https://docs.docker.com/compose/install/), this should be included with docker desktop.


#### Python & pipenv

You need to have at least _python 3.8_ and pipenv installed.

To install ptyhon follow:
- [Mac](https://docs.python-guide.org/starting/install3/osx/)
- [Windows](https://www.python.org/downloads/)
  
Then install pipenv:
- [Windows](https://www.pythontutorial.net/python-basics/install-pipenv-windows/)

**Mac:**

```sh
python3 -m pip install pip --upgrade
python3 -m pip install pipenv
## Verify using
pipenv
```

### Installation process

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env` (the ones provided should be enough, you don't need to modify anything).
3. Start the environment: `$ pipenv shell`
4. DB already initiated
   1. Launch docker: `$pipenv run launch_docker`
   2. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
   3. Run the migrations: `$ pipenv run upgrade`
   4. Run the application: `$ pipenv run start`
5. DB not started
   1. Init the db: `$ pipenv run init`
   2. Make the migrations: `$ pipenv run migrate` 
   3. Run the migrations: `$ pipenv run upgrade`
   4. Run the application: `$ pipenv run start`

Once you are done you can stop the docker container using:

```sh
docker compose down
```

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

To update with all yours tables you can edit the file app.py and go to the line 80 to insert the code to populate others tables

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).
