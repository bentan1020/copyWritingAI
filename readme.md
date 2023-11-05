## Copywriting AI
<br>
Business owners have problems writing high-converting sales copies/advertisement, this app is designed to fix that
<br>
Features:
- [x] Sign in
- [x] Chatbot
- [x] Store messages
<br>
### To start this project (frontend)
<br>
1. open terminal and run `cd client`
2. in .env.sample file, get rid of ".sample", and paste in the appopriate API keys
3. run `npm install && npm start`
<br>
### To start this project (backend)
1. open terminal and run `cd server`
2. in nodemon-sample.json file, get rid of "-sample", and paste in the appopriate API keys and credentials
3. run `npm install && npm start`
<br>
Notes/Challenges:
- webhooks - from clerk authentication to ngrok
    - ngrok serves as a communicator between localhost and the web, svik is to make sure it's valid and not malicious data being send in
    - context:
        - clerk stores user information upon sign in, need a way to get those data
    - upon new user created, clerk webhook gets trigger
    - this sends information to ngrok's custom domain
    - lsof -i :8080 to see what is using 8080
    - kill -9 71014 to kill id using 8080
    - use webhook BEFORE express.json() and urlencoded
    - see this commit and below for more detail
    - clerk: https://clerk.com/docs/users/sync-data?utm_source=www.google.com&utm_medium=referral&utm_campaign=none
    - ngrok: https://ngrok.com/docs/integrations/clerk/webhooks/