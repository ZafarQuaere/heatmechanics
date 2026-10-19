import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import App from './App';
import { getPageMeta, prerenderPaths } from './content/site';

export { prerenderPaths };

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </StrictMode>,
  );
  return { html, ...getPageMeta(url) };
}
