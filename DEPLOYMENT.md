Deployment to Vercel

1. Prerequisites
   - Install Node.js (>=18 recommended) and npm
   - Have a Vercel account: https://vercel.com/

2. Quick deploy (recommended)
   - Push this repository to GitHub, GitLab, or Bitbucket
   - Import the repository in Vercel (https://vercel.com/import)
   - Vercel will auto-detect Next.js and use `npm run build` then `npm start`.

3. Manual deploy (CLI)
   - Install Vercel CLI: `npm i -g vercel`
   - From project root run: `vercel` and follow prompts

4. Environment / Settings
   - This project uses remote images from `skillicons.dev` and `github-readme-stats.vercel.app`. next.config.mjs includes remotePatterns for them.
   - If you add external APIs or secrets, configure them in Vercel dashboard as Environment Variables.

5. Common issues
   - If build fails on Vercel, check the build logs for ESLint or module errors. Locally run `npm run build` to reproduce errors.
   - If images don't load, ensure the remote host is reachable from Vercel and `next.config.mjs` contains the correct hostnames.

6. Commands
   - Install deps: `npm install`
   - Build: `npm run build`
   - Preview production build locally: `npm run build && npm start`

   7. Vercel tips
      - Set the Node.js version in Vercel to match your local environment (recommend Node 18+).
      - Enable build cache to speed up subsequent deployments.

