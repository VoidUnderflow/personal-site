# VoidUnderflow

My blog / portfolio.

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
