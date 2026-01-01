import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    {
      title: 'Angular Architecture',
      icon: '🏗️',
      description: 'Design and implement scalable Angular architectures that grow with your business. From small applications to enterprise-level systems.',
      features: [
        'Component architecture and module design',
        'State management with NgRx or RxJS',
        'Lazy loading and code splitting strategies',
        'Performance optimization',
        'Best practices and coding standards'
      ],
      deliverables: [
        'Architecture documentation',
        'Code review and refactoring',
        'Team training and mentoring',
        'Performance audit reports'
      ]
    },
    {
      title: 'Ionic App Development',
      icon: '📱',
      description: 'Build cross-platform mobile applications using Ionic and Capacitor. One codebase for iOS, Android, and web.',
      features: [
        'Native device feature integration',
        'Offline-first architecture',
        'Push notifications setup',
        'App store optimization',
        'Performance optimization for mobile'
      ],
      deliverables: [
        'Production-ready mobile apps',
        'App store deployment',
        'Documentation and maintenance guides',
        'Ongoing support and updates'
      ]
    },
    {
      title: 'Performance Optimization',
      icon: '⚡',
      description: 'Identify bottlenecks and optimize your application for speed, efficiency, and better user experience.',
      features: [
        'Performance audit and analysis',
        'Database query optimization',
        'Frontend bundle optimization',
        'Caching strategies',
        'CDN and asset optimization'
      ],
      deliverables: [
        'Performance audit report',
        'Optimization implementation',
        'Before/after metrics',
        'Monitoring setup'
      ]
    },
    {
      title: 'Code Review & Consulting',
      icon: '🔍',
      description: 'Expert code reviews, architecture consulting, and technical guidance to improve your codebase quality.',
      features: [
        'Comprehensive code reviews',
        'Architecture recommendations',
        'Security assessment',
        'Best practices implementation',
        'Technical debt reduction'
      ],
      deliverables: [
        'Detailed review reports',
        'Actionable recommendations',
        'Refactoring plans',
        'Team training sessions'
      ]
    }
  ];
}
