import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const templatePath = path.join(dist, 'index.html');
const serverEntry = path.join(dist, 'server', 'entry-server.js');
const template = fs.readFileSync(templatePath, 'utf8');

const { render, prerenderPaths } = await import(pathToFileURL(serverEntry).href);

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, '&quot;');
}

for (const route of prerenderPaths) {
  const { html, title, description } = render(route);
  let page = template.replace('<html lang="en"', '<html lang="en-GB"');
  page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  const descriptionTag = `<meta name="description" content="${escapeAttr(description)}" />`;
  if (/<meta name="description" content="[\s\S]*?"\s*\/>/.test(page)) {
    page = page.replace(/<meta name="description" content="[\s\S]*?"\s*\/>/, descriptionTag);
  } else {
    throw new Error(`Description meta tag missing while prerendering ${route}`);
  }
  const rootTag = '<div id="root"></div>';
  if (!page.includes(rootTag)) throw new Error(`Root placeholder missing while prerendering ${route}`);
  page = page.replace(rootTag, `<div id="root">${html}</div>`);

  const relative = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
  const file = path.join(dist, relative);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
}

fs.rmSync(path.join(dist, 'server'), { recursive: true, force: true });
console.log(`Prerendered ${prerenderPaths.length} pages.`);
