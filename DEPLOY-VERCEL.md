# 🚀 Vercel Deployment - NeuroFin

## Optie 1: Vercel CLI (Aanbevolen)

```bash
# Installeer Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy vanuit frontend directory
cd frontend
vercel

# Volg de prompts:
# 1. Set up and deploy: Y
# 2. Which scope: stagedvisuals
# 3. Link to existing project: N
# 4. Project name: neurofin
# 5. Directory: ./
# 6. Build Command: npm run build
# 7. Output Directory: .next
# 8. Development Command: npm run dev
```

## Optie 2: GitHub Integration

1. Push code naar GitHub
2. Ga naar [vercel.com](https://vercel.com)
3. Import project vanuit GitHub
4. Selecteer `stagedvisuals/neurofin`
5. Configureer:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
6. Deploy!

## Optie 3: Direct vanuit CLI

```bash
cd frontend
npx vercel --prod
```

## Environment Variables

Maak deze environment variables aan in Vercel dashboard:

```
NEXT_PUBLIC_SITE_URL=https://neurofin.vercel.app
NEXT_PUBLIC_GA_TRACKING_ID=UA-XXXXX-Y (optioneel)
```

## Custom Domain (Optioneel)

1. Ga naar Vercel Dashboard → Project → Settings → Domains
2. Voeg custom domain toe: `neurofin.ai`
3. Configureer DNS records bij je domain provider

## Monitoring

- **Vercel Analytics:** Automatisch ingeschakeld
- **Web Vitals:** Real-user performance metrics
- **Function Logs:** Serverless function monitoring
- **Edge Network:** Global CDN performance

## Build Settings

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs",
  "nodeVersion": "18.x"
}
```

## Live URL

Na deploy: **https://neurofin.vercel.app**

## Troubleshooting

### Build Fails
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Local build test
npm run build
```

### Memory Issues
- Vercel geeft 1024MB RAM standaard
- Voor heavy builds: Upgrade naar Pro plan (2048MB)

### Deployment Timeout
- Standaard timeout: 60 seconden
- Voor grote builds: Contact Vercel support

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js on Vercel:** https://nextjs.org/docs/deployment
- **GitHub Issues:** https://github.com/stagedvisuals/neurofin/issues

---

**NeuroFin is Vercel-ready!** 🚀