# illegalscreed.com

Personal site of Xu Zhang (张旭, GitHub [IllegalCreed](https://github.com/IllegalCreed)). English is the default. Chinese is at `/zh/`.

This is the one-page site for the custom domain. The notes and knowledge base stay on [illegalscreed.cn](https://illegalscreed.cn/) in [IllegalCreed/IllegalCreed.github.io](https://github.com/IllegalCreed/IllegalCreed.github.io).

The site is a static [Astro](https://astro.build/) build. GitHub Actions publishes `dist/` to GitHub Pages.

## Local development

Node.js 22 or newer.

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm run check:links
```

`check:links` reads the built HTML, checks that local files exist, and requests every external URL. `npm run check` runs the Astro type checker.

## GitHub Pages

The workflow is [`.github/workflows/pages.yml`](.github/workflows/pages.yml). It runs on every push to `main` and can also be started by hand.

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the “Deploy to GitHub Pages” workflow) and wait until the deploy job is green.
4. Still under **Settings → Pages**, set **Custom domain** to `illegalscreed.com` and save.

Add the custom domain on GitHub before changing DNS at the registrar. Pointing the domain at GitHub while no repository claims it leaves the name open to takeover.

`public/CNAME` contains `illegalscreed.com`, so the published site includes that file. With a GitHub Actions source, the domain that Pages serves is the one saved in **Settings → Pages**. Save it there as well.

After DNS answers with the records below, return to **Settings → Pages** and turn on **Enforce HTTPS**. The checkbox can take a while to appear (GitHub’s certificate is issued after the domain check succeeds). Leave it on once it is available.

The site is built for the domain root (`https://illegalscreed.com/`), not for `https://illegalcreed.github.io/homepage/`.

## DNS at GoDaddy

Domain: `illegalscreed.com`.

Open the domain’s DNS management and remove parking records first: any existing `A` or `AAAA` on `@`, any GoDaddy forwarding, and any `CNAME` on `www` that points somewhere else. Do not add a wildcard such as `*.illegalscreed.com`.

Then add all of these. In GoDaddy the apex host is `@`.

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `illegalcreed.github.io` |

The `www` record points at `illegalcreed.github.io`, with no repository name on the end. These addresses are the [GitHub Pages apex and www records](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

Because the custom domain saved in Pages is the apex, GitHub redirects `www.illegalscreed.com` to `https://illegalscreed.com/`.

TTL can stay at GoDaddy’s default. DNS can take some time to propagate. Check from a terminal:

```bash
dig illegalscreed.com +noall +answer -t A
dig illegalscreed.com +noall +answer -t AAAA
dig www.illegalscreed.com +nostats +nocomments +nocmd
```

The `A` and `AAAA` answers should be the eight addresses above. The `www` answer should be a `CNAME` to `illegalcreed.github.io`.

### 中文：GoDaddy 里要改的记录

1. 先在 GitHub 仓库 **Settings → Pages** 把 Source 设为 **GitHub Actions**，等部署成功，再把 Custom domain 填成 `illegalscreed.com` 并保存。
2. 再到 GoDaddy 的 DNS 管理，删掉 `@` 上原有的 A / AAAA、停放页记录，以及 `www` 上指向别处的 CNAME。不要开域名转发，也不要加 `*` 泛解析。
3. 按上面的表添加 4 条 A、4 条 AAAA，以及 `www` → `illegalcreed.github.io` 的 CNAME。
4. 解析生效后，回到 Pages 设置里打开 **Enforce HTTPS**。
