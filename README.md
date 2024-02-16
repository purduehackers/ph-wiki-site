# Purdue Hackers Wiki

We now have our own wiki page! It is a project built with NextJS and MongoDB. A more detailed description on the tech stack can be found in this post ([link](https://ph-wiki.vercel.app/wiki/purdue-hackers-wiki) <- which is hosted in the wiki website how cool is that 👀)

## Running the app

1. Clone the monorepo ([ph-wiki](https://github.com/purduehackers/ph-wiki)) and make sure that each sub repo is up to date and that all repos' env variables are set up correctly.

```
# Demo in Ubuntu:
git clone git@github.com:purduehackers/ph-wiki.git
cd ph-wiki

# ensuring ph-wiki-site is up to date
cd ph-wiki-site
git pull
# set up env in ph-wiki-site
cd ..

# ensuring ph-wiki-post-loader is up to date
cd ph-wiki-post-loader
git pull
# set up env in ph-wiki-post-loader
cd ..

# ensuring ph-wiki-posts is up to date
cd ph-wiki-posts
git pull
cd ..
```

2. Download [MongoDB Community Edition](https://www.mongodb.com/docs/manual/administration/install-community/)
3. Optional: Download [MongoDB Campass](https://www.mongodb.com/try/download/compass). This is a Graphical User Interface (GUI) that will help you manage data in your local MongoDB database (where we will be storing all of our testing data)
4. Run MongoDB Community Edition ([Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition-as-a-windows-service), [MacOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition), [Ubuntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#run-mongodb-community-edition), [others](https://www.mongodb.com/docs/manual/administration/install-community/)...).

```
# Demo in Ubuntu:
sudo systemctl start mongod
```

5. In MongoDB Community Edition create a database named phwiki

```
# Demo in Ubuntu:
mongosh
use phwiki
```

6. Load the test data using [ph-wiki-post-loader](https://github.com/purduehackers/ph-wiki-post-loader).

```
# Demo in Ubuntu:
cd ph-wiki-post-loader
yarn run start
cd ..
```

7. Run the [ph-wiki-site](https://github.com/purduehackers/ph-wiki-site)

```
# Demo in Ubuntu:
cd ph-wiki-site
yarn run dev
cd ..
```

## Env

You will need the following variables to run this project locally. Please reach out to Willy (lien2@purdue.edu) if you are interested in contributing to this project.

```.env
MONGODB_URI=[replace with MongoDB URL]
DB_NAME=wiki
DEV_DB_NAME=phwiki
APP_URI='http://localhost:3000'
NODE_ENV=development
```
