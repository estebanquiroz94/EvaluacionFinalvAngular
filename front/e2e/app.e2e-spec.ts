import { EvaluacionFinalvAngularPage } from './app.po';

describe('evaluacion-finalv-angular App', function() {
  let page: EvaluacionFinalvAngularPage;

  beforeEach(() => {
    page = new EvaluacionFinalvAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
