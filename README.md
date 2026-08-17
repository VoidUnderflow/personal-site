# VoidUnderflow

My blog / portfolio.

## Deployment

I'm aiming to not pay anything except for the domain. The current plan is:

- Have a main and dev branch on GitHub, perform some checks / tests when merging to main;
- Automatically deployed on Vercel when main is updated;
- External images + resume hosted in a Cloudflare R2 bucket; can only be accessed from the voidunderflow.com domain;
- ~~Have a GitHub Action cron-job-like thing (if possible) to query Cloudflare bucket every x minutes and make it private if half the limits are reached;~~ In practice, this would have meant creating an API token with bucket edit capabilities then making it available for the GitHub action. This would make my bucket less secure, so I'll just count on the Cloudflare limit alerts I've set and make the bucket private manually.

Will need to keep these non-Git-committed images backed up in my GDrive / Mega, and then copy them in when building the website locally (since I won't be able to access the bucket from localhost).

### Adding a post or project with images (runbook)

It's pretty manual, but I'm fine with it for now:

- Create a temp folder with a posts/projects subfolder;
- Before merging to main, upload the images to the R2 bucket;
- After merging to main, place the images in the Backup folder, and upload to Mega & external storage;

### Relevant limits (2026)

#### Vercel hobby

- Active CPU: 4hrs;
- Image optimisation source images: 1000;
- 100 deployments / day (won't ever hit it);

Make sure nothing is on SSR.
Could turn off image optimisation, as it seems to eat up some CPU(?).
Might just make the website fully static.

#### Cloudflare R2

- storage: 10GB/month;
- class A ops (uploads, settings?): 1M / month;
- class B ops (reads, downloads): 10M / month;
- egress: free; (main draw of this - if they change it, dip; Vercel Blobs had less generous limits)

#### GitHub Actions

They seem to still be free for public repos (for now).

## Credits

Third-party assets are listed in [CREDITS.md](CREDITS.md).

## References

1. Site icons taken from [svgicons.com](https://svgicons.com/).

## Comments and Giscus

Originally, posts had comments. I used [Giscus](https://giscus.app) for that, which embeds a GitHub discussion as an iframe. I spent quite a bit of time creating a theme for it and making sure it works, but ultimately decided against it, for two reasons:

### Styling it locally is a PITA due to Chrome's LNA

Chrome 142 introduced [Local Network Access](https://github.com/WICG/local-network-access/blob/main/explainer.md) restrictions, which block public origins (in our case, `giscus.app`) from fetching resources on loopback addresses (`localhost`) without explicit user permission. Giscus fetches our custom theme CSS from our URL, which is fine in production, but broken in local development (not getting any user permission prompt either).

Firefox might(?) eventually implement this in the future as well.

There's no fix from my side I think. It would be cool if a request wasn't necessary to style Giscus, but there doesn't seem to be a lot of interest in the project.

### Still confused by GitHub's permissions model

See this [discussion](https://github.com/orgs/giscus/discussions/950).

If I authorise Giscus to post on my behalf using the embed on my website, can it do so on the Discussions of any project that enables it, or only on mine? The link above seems to support the former, which is a bit too permissive for my taste.

In the end, I decided to automatically create a discussion thread with a GitHub action whenever a new post is pushed to main, and then point to that under the post. This has taken too much time given that it's very likely that no one will ever comment here. I did learn a few things though, so that's a positive.
