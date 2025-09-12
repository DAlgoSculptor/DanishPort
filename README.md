# Danish Nawaz Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Getting Started

### Development

```bash
npm install
npm run dev
```

### Building for Production

```bash
npm run build
```

## Docker Deployment

This project includes Docker support for easy deployment. The Docker setup uses a multi-stage build with Node.js 20 for building and Nginx for serving the static files.

### Using Docker

1. Build the Docker image:
```bash
docker build -t danishnawaz-portfolio .
```

2. Run the container:
```bash
docker run -p 80:80 danishnawaz-portfolio
```

The application will be available at http://localhost

### Using Docker Compose

1. Build and run with docker-compose:
```bash
docker compose up --build
```

Note: Use `docker compose` (without hyphen) for Docker Compose V2 or newer.

2. The application will be available at http://localhost

### Stopping the Container

If using docker-compose:
```bash
docker compose down
```

If using docker run:
```bash
docker stop <container-id>
```

## Vercel Deployment (Free Tier)

This project is optimized for deployment on Vercel's free tier.

### Prerequisites

1. Create an account at [vercel.com](https://vercel.com)
2. Install Vercel CLI (optional but recommended):
```bash
npm install -g vercel
```

### Deployment Options

#### Option 1: Deploy via Vercel CLI (Recommended)

1. Clone the repository:
```bash
git clone <your-repository-url>
cd danishnawaz
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? (Select your personal account)
   - Link to existing project? `N`
   - What's your project's name? (Press Enter for default)
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

5. After deployment, Vercel will provide you with a live URL.

#### Option 2: Deploy via Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Configure project settings:
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click "Deploy"

### Environment Variables (if needed)

If you have environment variables, you can add them in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables (e.g., `VITE_CONTACT_EMAIL`)

### Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Navigate to "Settings" > "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### Live Demo

Your portfolio is now live on Vercel! Visit [your-vercel-url] to see it in action.

### Redeployment

Vercel automatically redeploys when you push to your connected Git repository.

For manual redeployment via CLI:
```bash
vercel --prod
```

## Project Structure

- `src/` - Source code
- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `src/constants/` - Static data
- `src/contexts/` - React contexts
- `src/lib/` - Utility functions

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- GSAP