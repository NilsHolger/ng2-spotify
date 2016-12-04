import { Ng2SpotifyPage } from './app.po';

describe('ng2-spotify App', function() {
  let page: Ng2SpotifyPage;

  beforeEach(() => {
    page = new Ng2SpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
