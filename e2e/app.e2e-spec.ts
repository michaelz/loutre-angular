import { LoutreAngularPage } from './app.po';

describe('loutre-angular App', () => {
  let page: LoutreAngularPage;

  beforeEach(() => {
    page = new LoutreAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
