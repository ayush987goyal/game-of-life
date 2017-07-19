import { GameOfLifePage } from './app.po';

describe('game-of-life App', () => {
  let page: GameOfLifePage;

  beforeEach(() => {
    page = new GameOfLifePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
