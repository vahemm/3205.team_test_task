# 3205.team_test_task

It sounds like you have a project set up with specific instructions in the README.md file. Let's break down the steps you've outlined:

### Step 1: Add .env files
- You need to add `.env` files in both the root directory and the client directory. These files are likely used to store environment variables that your application needs. You might have a `env.example` file that shows what variables are needed.

### Step 2: Install npm modules in the client directory
- Navigate to the client directory using `cd client/`.
- Install the required npm modules using `npm i` or `npm install`. This command will install all the dependencies listed in the `package.json` file of the client directory.

### Step 3: Install npm modules in the root directory
- Navigate back to the root directory (if you are not already there).
- Install the npm modules required for the server or backend part of your application using `npm i` or `npm install`. This will install dependencies listed in the `package.json` file in the root directory.

### Step 4: Run the application
- To start your application, in root directory you'll use the command `npm run start:app`. This command presumably starts both the client and server parts of your application concurrently or in a way specified in your `package.json` scripts.

### Summary of Commands:
Here’s a concise version of the steps:

```bash
# Step 1: Add .env files
# Add .env files in both root and client directories based on env.example

# Step 2: Install npm modules in client directory
cd client/
npm i

# Step 3: Install npm modules in root directory
cd ..
npm i

# Step 4: Run the application
npm run start:app
```

### Notes:
- Make sure you have Node.js and npm installed globally on your machine before running these commands.
- The `npm run start:app` command will typically look for a script named `start:app` in your `package.json` file. Ensure this script is correctly configured to start both the client and server parts of your application as intended.

By following these steps, you should be able to set up and run application as described in README.md file.