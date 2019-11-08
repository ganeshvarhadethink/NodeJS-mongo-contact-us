# NodeJS-mongo-contact-us
A sample node js app to store contact form details in MongoDB using Redis

#Pre-requisites
#Install Redis on local machine
>> apt install redis-server


# Installation steps
npm install

# To run the project
npm run build

# Task 1
shell script is added in the specified path, and will be available for any environment.
On 'npm run build' call the shell script is executed.

# Task 2

The POST API to store the contact details on contactUs action.
1] The store API data is added in Redis queue and stored to DB.
2] Validations for the input fileds is done using validator npm package.
3] The proper directory structure is followed (as mentioned in task sheet)
4] MongoDB is connected using mongoose.

API endpoint=> localhost:8000/UserAuth/createContact


# Task 3

The GET API to retrieve the stored details

API endpoint=> localhost:8000/UserAuth/contact-us





