import { render } from '@testing-library/react';

import { NotesProvider } from '@/lib/notes/notes';

import HomePage from '@/pages';

/** Mock Seo's useRouter */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));

describe('Index Page', () => {
  it('renders index page', async () => {
    const { container } = render(
      <NotesProvider>
        <HomePage />
      </NotesProvider>
    );

    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});
