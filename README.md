*This is the step by step on how to initialize and deploy the firebase hosting for the test branch of syllabye-static.*

*The hosting on firebase is not fully functional and we were able to get it to deploy, but it currently does not deploy and parts of the website would need to be adjusted to work with firebase instead of azure when it is being set up to replace azure.*

## Firebase Hosting
This refers to the "hosting" tab in the firebase console to deploy a website through firebase as we would on azure.

## Step 1 - Install Firebase Tools
In terminal, cd to the static site folder and type *npm install -g firebase-tools* <br>
This will download all the necessary tools on your local device to ensure you can use the firebase commands.

## Step 2 - Initialize Firebase (If not already initialized or needs to be reset)
In the same spot of terminal, type *firebase init hosting* <br>
This will start the process of setting up the firebase hosting for the static repository that should be done in the test branch until it is ready for official use.

## Step 3 - What to Select When Initializing
"What do you want to use as your public directory?" <br>
The default option is (public) and this refers to the folder named public as this is where all the website files (index.html, index.js, etc.) should be listed as that is where firebase will look when deploying. <br>

"Configure as a single-app?" <br>
This should be set to "no" as it is a multiple page website. <br>

"Set up automatic builds and deploys with Github?" <br>
This should be yes. It may ask that index.html already exists and if you want to overwrite it. Make sure to say no as it will wipe the index.html file. <br>

**At this point, it may ask about logins for github and firebase in which you should login to your account and it should connect.** <br>

"For which Github repository would you like to set up a Github workflow?" <br>
The repsitory that needs to be entered is *TheKrabbyPatties/syllabye-static*. If you are having trouble with this step due to something about permissions, you may need to double check you have admin permissions when it comes to the github and firebase. <br>

"Set up workflow to run a build script before every deploy?" <br>
This should be Yes. <br>

"What script should be run before every deploy?" <br>
This can be the default response given *npm ci && npm run build*. <br>

"Set up automatic deployment to your site's live channel when a PR is merged?" <br>
This should be Yes. <br>

"What is the name of the GitHub branch associated with your site's live channel?" <br>
This should be set to the test branch for the time being as it is not yet ready to replace the azure hosting. <br>

## Step 4 - Deployment
As of right now, the deployment has not been set up to be automatic when pushing new changes to the test branch. To deploy the site from your local device, type *firebase deploy* and it should deploy any changes you have on your system. <br>

If you have any questions about this, feel free to reach out to me at kevinadanowski@lewisu.edu
