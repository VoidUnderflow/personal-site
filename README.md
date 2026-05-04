# VoidUnderflow

My blog / portfolio.

## References

1. Site icons taken from [svgicons.com](https://svgicons.com/).

## Comments and Giscus

Originally, posts had comments. I used [Giscus](https://giscus.app) for that, which embeds a GitHub discussion as an iframe. I spent quite a bit of time creating a theme for it and making sure it works, but ultimately decided against it, for two reasons:

### Styling it locally is a PITA due to Chrome's LNA

Chrome 142 introduced [Local Network Access](https://github.com/WICG/local-network-access/blob/main/explainer.md) restrictions, which block public origins (in our case, `giscus.app`) from fetching resources on loopback addresses (`localhost`) without explicit user permission. Giscus fetches our custom theme CSS from our URL, which is fine in production, but broken in local development (not getting any user permission prompt either).

Firefox might(?) eventually implement this in the future as well.

There's no fix from my side I think. It would be cool if a request wasn't necessary to style Giscus, but there doesn't seem to be a lot of interest in the project.

### Permissions didn't quite feel right

See this [discussion](https://github.com/orgs/giscus/discussions/950).

If I understand it correctly, if you authorise Giscus to post on your behalf, it can do so on a Discussions thread of any project that enables it. Not the biggest risk in the world, and not sure if it can even happen in practice. Personally, I wouldn't agree to that so I won't ask someone else to.

In the end, I decided to automatically create a discussion thread with a GitHub action whenever a new post is pushed to main, and then point to that under the post.
