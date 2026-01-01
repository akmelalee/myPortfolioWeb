import { Component, OnInit, OnDestroy, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LogoComponent } from './logo.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, RouterOutlet, LogoComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit, OnDestroy {
  isDarkMode = signal(false);
  isMobileMenuOpen = signal(false);
  showScrollTop = signal(false);
  currentYear = new Date().getFullYear();
  private scrollListener?: () => void;

  constructor() {
    // Check for saved theme preference or default to light
    effect(() => {
      const theme = this.isDarkMode() ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  ngOnInit() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode.set(true);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }

    // Add scroll listener to show/hide scroll-to-top button
    this.scrollListener = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.showScrollTop.set(scrollPosition > 300);
    };
    
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngOnDestroy() {
    // Remove scroll listener
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  toggleTheme() {
    this.isDarkMode.update(mode => !mode);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(open => !open);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMobileMenu();
  }

  scrollToTopFromButton() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
