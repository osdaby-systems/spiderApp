import { Component } from '@angular/core';

import { JuegoPage } from '../juego/juego';
import { TestPage } from '../test/test';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = JuegoPage;
  tab3Root = TestPage;

  constructor() {

  }
}
