import { Ang2LayoutPage } from './app.po';

describe('ang2-layout App', () => {
  let page: Ang2LayoutPage;

  beforeEach(() => {
    page = new Ang2LayoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
