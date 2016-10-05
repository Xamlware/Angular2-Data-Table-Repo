import { Adt2Page } from './app.po';

describe('adt2 App', function() {
  let page: Adt2Page;

  beforeEach(() => {
    page = new Adt2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
