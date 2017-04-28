import { ClevelandstartupsPage } from './app.po';

describe('clevelandstartups App', () => {
  let page: ClevelandstartupsPage;

  beforeEach(() => {
    page = new ClevelandstartupsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
