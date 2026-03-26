# 📷 Time Capsule

A full-stack web app that lets you seal a memory and have it mailed back to you — somewhere between today and 3 years from now.

---

## What it does

You upload a photo, write a caption, and enter your email. The app compiles everything into a polaroid-style image, saves it, and emails it back to you on a randomly chosen future date. You won't know when it's coming.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Image Capture | html2canvas |
| Backend | Node.js, Express |
| Database | MongoDB Atlas, Mongoose |
| Email | Nodemailer |
| Scheduler | node-cron |

---

## How it works

**Frontend**
- User uploads a photo, adds a caption and a date
- `html2canvas` compiles the polaroid preview into a single image
- The image is converted to a base64 string and sent to the backend along with the user's email

**Backend**
- Express receives the image and email via a POST request to `/submit`
- A random send date is generated between now and 3 years from now
- The data is saved to MongoDB Atlas using Mongoose

**Scheduler**
- A `node-cron` job runs every hour in the background
- It queries the database for any capsules whose send date has passed
- For each match, Nodemailer sends the image back to the user's email as an attachment
- The document is then deleted from the database to prevent duplicate sends

---

## File Structure

```
Time Capsule/
├── package.json
├── .env
├── backend/
│   ├── server.js        ← Express server and /submit route
│   ├── db.js            ← MongoDB connection
│   ├── capsule.js       ← Mongoose schema and model
│   └── scheduler.js     ← Cron job and email logic
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## Key Engineering Decisions

**Base64 for image storage** — The polaroid image is stored as a base64 string directly in MongoDB, keeping the architecture simple without needing a separate file storage service like S3.

**Polling over webhooks** — A cron job checks the database every hour rather than scheduling individual jobs per capsule. Simple, reliable, and easy to reason about at this scale.

**Single server architecture** — Express serves both the static frontend and the API, eliminating CORS issues and keeping deployment straightforward.

---





Built by Aabhyudayik
