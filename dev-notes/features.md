MERN stack
-reactJS (frontend)
    bootstrap for CSS ?
-nodejs(backend)
-expressJS (server framework)
-mongoDB (database)

Features of e-wallet
    1. Be able to register to the app 
    2. Can add new funds to wallet
    3. Can transfer funds to another walllet
    4. Can recieve funds from another wallet
    5. Will have to somehow send notification to receiving wallet user. notifying them of incoming payment or request of payment
    6. QR code (what information does this QR code have?)

Node packages 
    -express
    -passport
    -mongoose
    -dotenv

Create a nodeJS server and connect to DB
    -dotenv file will contain
        DB = "ewallet"
        URI= "..."

    -


Step 1:
    Add new user account
    Add new wallet

    Register user
        {
         "user_id": "exampleID",
         "name": "John Doe",
         "email": "example@acc.com"    
        }

    Create wallet 
        {
         "wallet_id": "12345678",
         "user_id": "exampleID",
         "balance": "500.00"    
        }

Step 2: 
    Add funds 
    Add new bank card
        -name 
        -number
        -type(visa, master)

Step 3:
    Transaction
        -$ amount 
        -receiving wallet_id
        -note/description?
        -




    Login page 
        username
            -user_id (username)
        password

    Sign up page
          Register user
            -user_id
            -name
            -email
        
    Home page/Dashboard
        -QR code 
        -pay button
        -request payment button ?
        -account balance ? (hidden - click to view)

        -Link to transaction history page



