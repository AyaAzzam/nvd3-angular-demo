import { Nvd3AngularDemoPage } from './app.po';

describe('nvd3-angular-demo App', function() {
  let page: Nvd3AngularDemoPage;

  beforeEach(() => {
    page = new Nvd3AngularDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
