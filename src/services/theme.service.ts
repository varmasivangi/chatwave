import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'theme-a';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Only access document in browser
    if (this.isBrowser) {
      document.body.classList.add(this.currentTheme);
    }
  }

  setTheme(themeClass: string) {
    if (!this.isBrowser) return; // skip on server

    const body = document.body;
    if (this.currentTheme) {
      body.classList.remove(this.currentTheme);
    }
    body.classList.add(themeClass);
    this.currentTheme = themeClass;
  }
}
