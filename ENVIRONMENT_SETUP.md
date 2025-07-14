# Environment Setup Guide

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.lhome.co.in/api

# NextAuth Configuration (if using authentication)
NEXTAUTH_SECRET=6dbba3112e4f37d3a42a289b0b61d07d198a47cd5ecaa15106c35dbebfe908ff
AUTH_USERNAME=admin
AUTH_PASSWORD=admin123

# Environment
NODE_ENV=production
PORT=5000
```

## Key Changes Made

1. **Fixed Asset Prefix**: Changed from `https://www.lhome.co.in/com/` to `https://lhome.co.in/com/`
2. **Added CORS Headers**: Server now includes proper CORS headers
3. **Consistent API URL**: All services now use `NEXT_PUBLIC_API_URL` environment variable
4. **Fallback API URL**: Default fallback to `https://api.lhome.co.in/api`

## Nginx Configuration

Make sure your Nginx configuration properly handles the `/com/` path and forwards requests to your Node.js server.

Example Nginx configuration:
```nginx
location /com/ {
    proxy_pass http://localhost:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

## After Making Changes

1. Create the `.env.local` file with the correct environment variables
2. Rebuild your application: `npm run build`
3. Restart your server: `npm start`
4. Clear your browser cache and try accessing the site again 