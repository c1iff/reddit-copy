import { RedditCopyPage } from './app.po';

describe('reddit-copy App', function() {
  let page: RedditCopyPage;

  beforeEach(() => {
    page = new RedditCopyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
