# EmailJS Setup Guide for Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without a backend server.

## Quick Setup Steps

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

### 2. Add Email Service
- Go to **Email Services** in dashboard
- Click **Add New Service**
- Choose your email provider (Gmail recommended)
- Follow the authentication steps
- Note your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
- Go to **Email Templates** in dashboard
- Click **Create New Template**
- Use these template variables:
  ```
  From: {{from_name}}
  Email: {{reply_to}}
  Message: {{message}}
  ```
- Example template:
  ```
  New message from your portfolio!
  
  From: {{from_name}}
  Email: {{reply_to}}
  
  Message:
  {{message}}
  ```
- Note your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
- Go to **Account** → **General**
- Find your **Public Key** (e.g., `abcd1234efgh5678`)

### 5. Configure Environment Variables
Edit `.env.local` file in your project root:

```env
NEXT_PUBLIC_SERVICE_ID=service_abc123
NEXT_PUBLIC_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_PUBLIC_KEY=abcd1234efgh5678
```

Replace the placeholder values with your actual credentials.

### 6. Restart Development Server
After updating `.env.local`, restart your dev server:

```powershell
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### 7. Test the Form
- Go to http://localhost:3000/contact
- Fill out and submit the form
- Check your email for the message

## Vercel Deployment

When deploying to Vercel, add these environment variables:

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add each variable:
   - `NEXT_PUBLIC_SERVICE_ID`
   - `NEXT_PUBLIC_TEMPLATE_ID`
   - `NEXT_PUBLIC_PUBLIC_KEY`
4. Redeploy your project

## Troubleshooting

### Form shows "EmailJS is not configured"
- Make sure `.env.local` exists in project root
- Check that all three variables are set
- Restart the dev server after changes

### Email not sending
- Verify credentials are correct in EmailJS dashboard
- Check browser console for error messages
- Ensure email service is connected in EmailJS
- Check EmailJS dashboard for quota limits (free plan: 200 emails/month)

### Template variables not working
- Make sure template uses exact variable names: `{{from_name}}`, `{{reply_to}}`, `{{message}}`
- Test the template in EmailJS dashboard first

## Free Tier Limits
- 200 emails per month
- 2 email services
- 1 email template

For higher limits, consider upgrading to a paid plan.
