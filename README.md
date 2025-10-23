## Twin Credits

A digital platform with a referral and credit system, enabling users to earn rewards, manage credits, and access digital products seamlessly.

## 🚀 Features

- **User Authentication**: JWT-based authentication with refresh tokens
- **Referral Management**: Unique referral links for each user, tracking referrer–referred relationships and referral status
- **Credit System**: Award credits to both referrer and referred user on the first purchase, preventing double-crediting
- **Purchase Simulation**: “Buy Product” functionality to trigger first-purchase credit rewards
- **Protected User Dashboard**: Displays total referred users, converted users, total credits earned, and unique referral link with copy option
- **Data Integrity**: Safe handling of concurrent users, consistent persistence, and prevention of duplicate credit rewards
- **Product Management**: View digital products with full details
- **Structured Code**: Used resubae components and utils to make a better scalable next app

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.x or higher
- **npm**: Version 8.x or higher (comes with Node.js)
- **Git**: For version control

## 🛠️ Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd twin-credits-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_CLIENT_URL=
```

### 5. Start the Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm run build
npm start
```

The application will be available at `http://localhost:3000`

## 🌐 Live Deployment

### Production API Access

**Base URL**: https://twin-credits-client.vercel.app

### Vercel Deployment Notes

- **Automatic Deployments**: Connect your GitHub repository to Vercel for automatic deployments
- **Environment Variables**: Set all required environment variables in Vercel dashboard
- **Build Command**: `npm run build`

### Required Environment Variables for Vercel

Make sure to add these in your Vercel project settings:

```env
NEXT_PUBLIC_BASE_URL=https://twin-credits-server.vercel.app/api
NEXT_PUBLIC_CLIENT_URL=https://twin-credits-client.vercel.app/register

```
