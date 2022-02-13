SF-NC-News

Online Hosting
Link to online hosted version of app: https://sf-first-project.netlify.app/articles

Project Summary
This project was implemented in order to create a front end product that is responsive and developed with a "mobile first" attitude. It is an online application that includes a responsive design, user interactivity and queriable resources.
It was created using react with a react base setup supplied by react app, axios for back end connectivity and react router dom for routeing.

Copying the repo
Please follow the instructions below in order to clone your own copy of the repository:

Click on the FORK button in the top right hand corner of the page, then select your username, this should create a copy of the repository in your online github storage.
Next on your OWN online version of the repo, click on the CODE button highlighted in GREEN, copy the URL provided. (It should look something like this https://github.com/<your username here>/f-nc-news)
You should now be able to to CLONE the repo using your CLI, type the following in order to do so: git clone https://github.com/<your username here>/nc_news_online.git -There will be a message like this if successful:
Cloning into 'be-nc-games'...
remote: Enumerating objects: 642, done.
remote: Counting objects: 100% (123/123), done.
remote: Compressing objects: 100% (31/31), done.
remote: Total 642 (delta 99), reused 91 (delta 90), pack-reused 519
Receiving objects: 100% (642/642), 296.55 KiB | 4.01 MiB/s, done.
Resolving deltas: 100% (310/310), done.
Ensure npm is initialised using the command npm init -y

You will then need to install the following dependencies using npm install <dependecy name>:

react
create-react-app
axios

In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

NOTE: Minimum required versions of Node.js = v17.1.0, axios = ^0.24.0,
react = 17.0.2, react-router-dom = ^6.2.1
