import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScrollStateService {

  trendingScrollState = signal(0);


  // pagesSCrollState: Record<string, number> = {
  //   'page1': 1000,
  //   'page2': 0,
  //   'aboutPage': 1000,
  //   'page20': 0,
  // }


}
