# To use this App (Read to the end)

This project was created as a test for a fullstack position

## Available Scripts

In Client folder you can run the application with:

### `npm start`

In Server folder you can start the server with:

### `npm start`

## Run in ports

Client:

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Server:

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# What is this app? 

The app is a simple 4 steps input form, once the user clicks on 'Next' a new form will appear until all steps are completed. 
On submit, a request is made to the server side to store the user information in a database, this app has been set to use with MongoDB (MongoAtlas)
Different pages are staged in the virtual DOM with React-Router-Dom, it consists of minimal Home page, Register page and People (list of registered users) page.

## Wizard Form

The app is set so once a step is completed, a new form asking for more info will appear. Users can go back and forth. 

## Accordion Form 

Should you wish to use it as an accordion form, uncomment the first `return` in *multiStepForm.jsx* and comment out the second `return`.
You will also need to uncomment the `{isActive && (` + `)}` on each of the *MultiStepN* forms and comment out the `<buttons>` as they will be no longer needed. 

# Missing ENV files 

On client side, missing ENV file only has a standard `REACT_APP_API='http://localhost:8000/api'` to run the app in dev mode. 

On Server Side, missing ENV file you will need to declare the following: PORT, DATABASE, CLIENT_URL=http://localhost:3000
As mentioned, the app works with Mongo, normally to connect a MongoAtlas DB will look something like this
`mongodb+srv://<username>:<password>@<clustername>.78jnb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

# If you are an employer that would like to try this app and do not work with MongoAtlas, feel free to reach me so I can temporarily give you access to the DB. 


## Images 


![Screenshot 2022-02-03 at 16-42-18 Finer Vision Test](https://user-images.githubusercontent.com/23733032/152425732-9d81089a-dd10-4629-92ea-cce2adb9e89d.png)
![Screenshot 2022-02-03 at 16-43-51 Finer Vision Test](https://user-images.githubusercontent.com/23733032/152425753-d6b45bf1-af3b-4c89-b38d-f6743e63906d.png)![Screenshot 2022-02-03 at 16-44-02 Finer Vision Test](https://user-images.githubusercontent.com/23733032/152425769-9cc39da1-b7d7-46ba-b89b-9aca6756855d.png)
![Screenshot 2022-02-03 at 16-44-15 Finer Vision Test](https://user-images.githubusercontent.com/23733032/152425776-960dba3b-36cc-4eec-8102-fa49d4729543.png)

