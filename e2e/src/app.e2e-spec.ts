import { AppPage } from './app.po';

describe('Credit-Rules-UI App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Credit-Rules-UI!');
  });
});
