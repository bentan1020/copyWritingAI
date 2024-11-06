## Copywriting AI

Business owners have problems writing high-converting sales copies/advertisement, this app is designed to fix that

<img width="1421" alt="Screenshot 2024-11-06 at 4 40 32 PM" src="https://github.com/user-attachments/assets/91fdcaec-eb61-4e24-bac7-d23ed3f4ae7c">
<img width="1413" alt="Screenshot 2024-11-06 at 4 39 56 PM" src="https://github.com/user-attachments/assets/e79e707e-311f-441b-84cd-66e270fe07d3">

### Features:
- [x] Sign in
- [x] Chatbot
- [x] Store messages

### Tech Stack
- React
- Express
- MongoDB
- CLerk
- Tailwind

### To start this project (frontend)

1. open terminal and run `cd client`
2. in .env.sample file, get rid of ".sample", and paste in the appopriate API keys
3. run `npm install && npm start`

### To start this project (backend)
1. open terminal and run `cd server`
2. in nodemon-sample.json file, get rid of "-sample", and paste in the appopriate API keys and credentials
3. run `npm install && npm start`

### Notes/Challenges:
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
