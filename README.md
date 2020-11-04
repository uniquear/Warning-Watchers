# Warning-Watchers
# CPI310-group-project
#FOR THE USE OF THE GROUP MEMBERS ONLY
https://docs.google.com/document/d/1etDs4tIElUIzxwet0LrGoH6E9ybtG_5rL3gchDinm8I/edit?usp=sharing


# TL;DR

Start on `master`
```
git checkout master
git pull
```
checkout a new branch
```
git checkout -b myCoolNewBranch
```
Make some cool new stuff in the project, and then push it
```
git add -A
git commit -m "I did a thing!"
git push
```
then create a pull request on GitHub, wait for someone on the team to review it, and merge!

## How Do I Use Git?
**Here's a git cheat sheet! More explanation below**
```
git fetch                       // gets info from the main repository, you can use it to check for changes
git status                      // check the status of your current changes, see if you're up to date
git pull                        // update your local repo with the latest on the main repo (will not overwrite your work!)
git checkout -b myNewBranch     // creates a new branch and checks it out simultaneously!
git add -A                      // add all changes to the stage
git add filename.etc            // add a specific file only, to the stage
git commit -m "my message"      // simultaneously commit and add a commit message
git push                        // pushes your commit to the main repo
git checkout master             // switch back to the master branch 
**If you get stuck** and you just want to delete it all and start over you can use `git reset --hard` and that will revert you to the last commit and delete **all** of your changes since the last commit **without any confirmation** so use it wisely. Seriously, be careful with this command! (but don't worry, anthing commited is safe)


## Step 1: Cloning the repo!
It's pretty simple! Just create a folder somewhere in your user directory (or wherever you want to keep the project) and then in the terminal, navigate to that folder. Once you're in the folder that you want to clone to repo into, type the following command
```
git clone https://github.com/uniquear/CPI310-group-project.git
```
You will the be prompted to enter your GitHub username and password 

**A quick note about navigation using terminal commands**
Unfamiliar with terminal? Let's say you have the folder `C:\Users\MyName\cpi310project` and you want to put the project there. 
In your terminal, the command `cd` or "change directory" is how you move from folder to folder. 

If you're in the `Users` directory and you want to move into a folder `C:\Users\MyName\cpi310project`, type:
```
cd MyName           // it would be your user name
cd cpi310project
```
If you need to move back out of a folder, use
```
cd ../
```
If you need to see all the stuff in the current folder, type
```
ls
```
## Push That Code! 
So, you've been chuggin' away and now it's time to save your work? Great! 
There are three commands you need. `add` `commit` and `push`

Add everything you've been working on to the "stage"
```
git add -A
```
If you do `git status` at this point, you should see all your changes in green!

```
git commit -m "A message about my changes (limit 40 chars)"
```
and before you push, run `git pull` first to pull down any changes that may have happened before you do the next step:
```
git push       //pushes your changes to the GitHub repo
```

Now your changes are saved! But, you're still on your branch. You can walk away now and come back later to add more stuff, OR you can `merge` your changes to the `master` by creating a `pull request`! You need to do this step when you're done with your sprint task.

## Merging Your Code

So, now you're done with some work and you're ready to merge it in with the `master`? You need to go to the project's GitHub page!

Click on `branches` and then click `New Pull Request`
This will create a page where we can all see what changes were made and if there are any conflicts. 
