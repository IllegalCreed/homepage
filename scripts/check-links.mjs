import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const internalOnly = process.argv.includes('--internal');
const siteOrigin = 'https://illegalscreed.com';

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(full);
      if (entry.name.endsWith('.html')) return [full];
      return [];
    }),
  );
  return files.flat();
}

function pageUrl(file) {
  const rel = path.relative(dist, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

const files = await htmlFiles(dist);
const hrefs = new Map();

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const found = html.match(/(?:href|src)="([^"]+)"/g) ?? [];
  for (const raw of found) {
    const value = raw.slice(raw.indexOf('"') + 1, -1);
    if (!value || value.startsWith('#') || value.startsWith('mailto:') || value.startsWith('data:')) continue;
    const list = hrefs.get(value) ?? [];
    list.push(pageUrl(file));
    hrefs.set(value, list);
  }
}

const failures = [];

for (const [url, from] of hrefs) {
  const localUrl = url.startsWith(siteOrigin) ? url.slice(siteOrigin.length) || '/' : url;
  if (localUrl.startsWith('/')) {
    const clean = localUrl.split('#')[0].split('?')[0];
    const rel = clean.replace(/^\/+/, '');
    const candidates = clean.endsWith('/')
      ? [path.join(dist, rel, 'index.html')]
      : [path.join(dist, rel)];
    let ok = false;
    for (const candidate of candidates) {
      try {
        await access(candidate);
        ok = true;
        break;
      } catch {
        ok = false;
      }
    }
    if (!ok) failures.push(`missing ${url} (from ${from.join(', ')})`);
    continue;
  }

  if (internalOnly || !url.startsWith('http')) continue;

  try {
    const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (response.status >= 400) {
      const get = await fetch(url, { method: 'GET', redirect: 'follow' });
      if (get.status >= 400) failures.push(`${get.status} ${url}`);
    }
  } catch (error) {
    failures.push(`error ${url} (${error instanceof Error ? error.message : error})`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Checked ${hrefs.size} links across ${files.length} pages.`);
