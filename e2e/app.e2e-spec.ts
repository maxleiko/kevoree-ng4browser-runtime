import { Ng4WebEditorPage } from './app.po';

describe('ng4-web-editor App', () => {
  let page: Ng4WebEditorPage;

  beforeEach(() => {
    page = new Ng4WebEditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
