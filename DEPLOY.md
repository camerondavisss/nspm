# Deployment Guide

This guide will help you deploy the Nova Solutions Property Management website.

## Quick Deploy (Recommended)

### Deploy to Netlify

1. **Via Git:**
   ```bash
   # Push your code to GitHub/GitLab/Bitbucket
   git push origin main

   # Then in Netlify:
   - New site from Git
   - Choose your repository
   - Build settings: none needed (static site)
   - Deploy
   ```

2. **Via Drag & Drop:**
   - Go to https://app.netlify.com/drop
   - Drag the entire project folder
   - Your site is live!

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts - done!

### Deploy to GitHub Pages

1. Go to your repository settings
2. Navigate to Pages section
3. Select branch: `main` or `claude/nova-solutions-website-rebuild-...`
4. Select folder: `/ (root)`
5. Save

Your site will be available at: `https://yourusername.github.io/nspm`

## Custom Domain Setup

### Netlify Custom Domain

1. Go to Site settings → Domain management
2. Add custom domain: `novasolutionspropertymanagement.com`
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Let's Encrypt)

### DNS Configuration Example

Add these records to your DNS provider:

```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-site.netlify.app
```

## Pre-Deployment Checklist

- [ ] Update contact information in all HTML files
- [ ] Replace placeholder gradients with real images
- [ ] Update social media links
- [ ] Configure contact form backend (if using)
- [ ] Add Google Analytics tracking code
- [ ] Test on multiple devices and browsers
- [ ] Run accessibility audit
- [ ] Optimize images (compress, convert to WebP)
- [ ] Update sitemap.xml with actual domain
- [ ] Update robots.txt with actual domain
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Check SEO meta tags

## Performance Optimization

### Image Optimization

1. Compress images:
   ```bash
   # Using imagemagick
   mogrify -resize 1920x1920\> -quality 85 images/*.jpg
   ```

2. Convert to WebP:
   ```bash
   # Using cwebp
   for img in images/*.jpg; do
     cwebp -q 85 "$img" -o "${img%.jpg}.webp"
   done
   ```

### Enable Compression

Most hosting platforms enable gzip/brotli automatically. If using custom hosting, configure your server:

**Nginx:**
```nginx
gzip on;
gzip_types text/css application/javascript image/svg+xml;
```

**Apache (.htaccess):**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

## SSL/HTTPS Setup

Most modern hosting platforms provide free SSL certificates:

- **Netlify**: Automatic with Let's Encrypt
- **Vercel**: Automatic
- **GitHub Pages**: Automatic for github.io domains

For custom hosting, use [Certbot](https://certbot.eff.org/) for free SSL.

## Contact Form Backend

The site includes a frontend contact form. To make it functional, integrate with:

### Option 1: Netlify Forms (Easiest)

Add `netlify` attribute to form:
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 2: Formspree

1. Sign up at https://formspree.io
2. Create a form
3. Update form action:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### Option 3: Custom Backend

Set up a serverless function or API endpoint to handle form submissions.

## Analytics Setup

### Google Analytics

1. Create GA4 property at https://analytics.google.com
2. Get tracking ID
3. Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Monitoring

### Set up monitoring for:

- Uptime monitoring (UptimeRobot, Pingdom)
- Performance monitoring (Google PageSpeed Insights)
- Error tracking (Sentry, LogRocket)
- Analytics (Google Analytics, Plausible)

## Backup Strategy

- Enable automatic backups on hosting platform
- Keep repository up to date
- Periodically export database (if using CMS later)
- Document any custom configurations

## Support

For deployment issues:
- Email: info@novasolutionspm.ca
- Check hosting platform documentation
- Review browser console for errors

## Post-Deployment

After deployment:

1. Submit sitemap to Google Search Console
2. Set up Google My Business
3. Verify all social media links
4. Test contact form submissions
5. Monitor site performance
6. Set up email notifications for form submissions
7. Create social media posts announcing launch
8. Update business cards and marketing materials

## Troubleshooting

### Site not loading
- Check DNS propagation (can take 24-48 hours)
- Verify SSL certificate is active
- Clear browser cache

### Images not displaying
- Check file paths are correct
- Ensure images directory is uploaded
- Verify MIME types configured correctly

### Contact form not working
- Check form action/endpoint
- Verify backend service is configured
- Check browser console for errors

## Security

- Enable HTTPS only (redirect HTTP to HTTPS)
- Keep dependencies updated
- Use Content Security Policy headers
- Enable HSTS headers
- Regular security audits
