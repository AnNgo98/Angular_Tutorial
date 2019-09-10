import { TourOfHeroesAppPage } from './app.po';

describe('tour-of-heroes-app App', function() {
  let page: TourOfHeroesAppPage;

  beforeEach(() => {
    page = new TourOfHeroesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
