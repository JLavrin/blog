# Blog

### Prerequisites
- Node.js 20.x

### Development

Copy .env.example to .env
```bash
cp .env.example .env
```

Fill env variables with your own values
```dotenv
NEXT_DATOCMS_API_TOKEN=<DATOCMS_API_TOKEN>

HUBSPOT_API_TOKEN=<HUBSPOT_API_TOKEN>
HUBSPOT_API_URL=<HUBSPOT_API_URL>
HUBSPOT_LEAD_FORM_ID=<HUBSPOT_LEAD_FORM_ID>
HUBSPOT_PORTAL_ID=<HUBSPOT_PORTAL_ID>
```

Install dependencies
```bash
yarn
# or
npm install
```

Run development server
```bash
yarn dev
# or
npm run dev
```

Run in turbo mode
```bash
yarn dev --turbo
# or
npm run dev -- --turbo
```

Test production build
```bash
yarn build && yarn start
# or
npm run build && npm start
```

### Deployment
Deployment is fully automated with Vercel and Datocms. Just push to master and the deployment will be triggered.



