import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
      [attr.width]="size" 
      [attr.height]="size" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="logo-svg"
      [class.logo-light]="!isDark"
      [class.logo-dark]="isDark"
    >
      <!-- Geometric Architecture Frame -->
      <rect x="6" y="6" width="28" height="28" rx="3" 
            [attr.stroke]="isDark ? 'rgba(189, 69, 32, 0.15)' : 'rgba(189, 69, 32, 0.1)'" 
            stroke-width="1" 
            fill="none"/>
      
      <!-- Code Brackets - Left -->
      <path d="M14 10 L14 30 M14 10 Q12 10 12 12 L12 28 Q12 30 14 30" 
            [attr.stroke]="'#bd4520'" 
            stroke-width="2.5" 
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"/>
      
      <!-- Code Brackets - Right -->
      <path d="M26 10 L26 30 M26 10 Q28 10 28 12 L28 28 Q28 30 26 30" 
            [attr.stroke]="'#bd4520'" 
            stroke-width="2.5" 
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"/>
      
      <!-- Architectural Module Lines -->
      <line x1="17" y1="15" x2="23" y2="15" 
            [attr.stroke]="isDark ? 'rgba(189, 69, 32, 0.5)' : 'rgba(189, 69, 32, 0.4)'" 
            stroke-width="1.5" 
            stroke-linecap="round"/>
      <line x1="17" y1="20" x2="23" y2="20" 
            [attr.stroke]="isDark ? 'rgba(189, 69, 32, 0.5)' : 'rgba(189, 69, 32, 0.4)'" 
            stroke-width="1.5" 
            stroke-linecap="round"/>
      <line x1="17" y1="25" x2="23" y2="25" 
            [attr.stroke]="isDark ? 'rgba(189, 69, 32, 0.5)' : 'rgba(189, 69, 32, 0.4)'" 
            stroke-width="1.5" 
            stroke-linecap="round"/>
      
      <!-- Subtle Circuit Nodes -->
      <circle cx="16" cy="17.5" r="1" 
              [attr.fill]="'#bd4520'" 
              opacity="0.7"/>
      <circle cx="24" cy="22.5" r="1" 
              [attr.fill]="'#bd4520'" 
              opacity="0.7"/>
      
      <!-- Connection Line -->
      <line x1="16" y1="17.5" x2="24" y2="22.5" 
            [attr.stroke]="isDark ? 'rgba(189, 69, 32, 0.3)' : 'rgba(189, 69, 32, 0.25)'" 
            stroke-width="1" 
            stroke-dasharray="2,2"
            stroke-linecap="round"/>
    </svg>
  `,
  styles: [`
    .logo-svg {
      display: block;
      transition: all 0.3s ease;
    }
    
    .logo-svg:hover {
      transform: scale(1.05);
    }
    
    .logo-dark path,
    .logo-dark line,
    .logo-dark circle {
      transition: stroke 0.3s ease, fill 0.3s ease;
    }
    
    .logo-light path,
    .logo-light line,
    .logo-light circle {
      transition: stroke 0.3s ease, fill 0.3s ease;
    }
  `]
})
export class LogoComponent {
  @Input() size: number = 32;
  @Input() isDark: boolean = false;
}

