import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  imports: [CommonModule],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss',
})
export class CaseStudies {
  caseStudies = [
    {
      title: 'Microservices Architecture for FinTech Platform',
      challenge: 'Designing a scalable architecture to handle 100K+ daily transactions with zero downtime requirements.',
      architecture: [
        'Separated frontend (Angular) and backend services into independent microservices',
        'Implemented API Gateway pattern for centralized routing and authentication',
        'Used NgRx for state management with normalized data structures',
        'Deployed services using Docker containers on AWS ECS',
        'Implemented service mesh for inter-service communication'
      ],
      performance: [
        'Reduced API response time from 800ms to 200ms through caching and query optimization',
        'Implemented lazy loading and code splitting, reducing initial bundle size by 60%',
        'Used Redis for session management and frequently accessed data',
        'Optimized database queries with proper indexing, reducing query time by 70%',
        'Implemented CDN for static assets, improving global load times by 50%'
      ],
      security: [
        'JWT-based authentication with refresh token rotation',
        'Role-based access control (RBAC) with granular permissions',
        'HTTPS everywhere with HSTS headers',
        'Input validation and sanitization on all endpoints',
        'Regular security audits and penetration testing',
        'Compliance with PCI DSS standards for financial data'
      ],
      deployment: [
        'CI/CD pipeline using GitHub Actions',
        'Automated testing (unit, integration, e2e) before deployment',
        'Blue-green deployment strategy for zero-downtime updates',
        'Automated rollback on health check failures',
        'Monitoring with CloudWatch and custom dashboards',
        'Automated backups with point-in-time recovery'
      ],
      outcome: 'Achieved 99.9% uptime, handled 100K+ daily transactions, and reduced infrastructure costs by 30% while maintaining security compliance.'
    },
    {
      title: 'Mobile App Performance Optimization',
      challenge: 'Ionic app experiencing slow load times and poor user experience on low-end devices.',
      architecture: [
        'Refactored to use OnPush change detection strategy',
        'Implemented virtual scrolling for large lists',
        'Lazy-loaded modules and routes',
        'Optimized bundle size with tree-shaking and code splitting',
        'Used Capacitor plugins efficiently to reduce native overhead'
      ],
      performance: [
        'Reduced initial load time from 8s to 2.5s',
        'Implemented image lazy loading and compression',
        'Used IndexedDB for offline data caching',
        'Optimized API calls with request batching and debouncing',
        'Implemented service workers for offline functionality',
        'Reduced memory footprint by 40% through proper component lifecycle management'
      ],
      security: [
        'Secure storage using Capacitor SecureStorage plugin',
        'Certificate pinning for API communications',
        'Biometric authentication integration',
        'Encrypted local database for sensitive data',
        'Regular dependency updates and vulnerability scanning'
      ],
      deployment: [
        'Automated builds for iOS and Android using Fastlane',
        'Automated testing on real devices via Firebase Test Lab',
        'Staged rollouts (10% → 50% → 100%)',
        'Crash reporting with Firebase Crashlytics',
        'A/B testing for feature rollouts',
        'Automated app store submissions'
      ],
      outcome: 'Improved app store rating from 3.2 to 4.8, reduced crash rate by 90%, and increased user retention by 45%.'
    },
    {
      title: 'Database Optimization for E-commerce Platform',
      challenge: 'PostgreSQL database struggling with slow queries and high load during peak traffic.',
      architecture: [
        'Implemented read replicas for scaling read operations',
        'Separated write and read operations using connection pooling',
        'Designed normalized schema with proper relationships',
        'Implemented database sharding for user data',
        'Used materialized views for complex reporting queries'
      ],
      performance: [
        'Created strategic indexes reducing query time by 75%',
        'Optimized N+1 queries using eager loading',
        'Implemented query result caching with Redis',
        'Database connection pooling reduced connection overhead',
        'Partitioned large tables by date ranges',
        'Analyzed and optimized slow queries using EXPLAIN ANALYZE'
      ],
      security: [
        'Encrypted sensitive data at rest using PostgreSQL encryption',
        'Row-level security policies for multi-tenant data',
        'Regular security patches and updates',
        'Database access logging and monitoring',
        'Backup encryption and secure storage'
      ],
      deployment: [
        'Automated database migrations with version control',
        'Zero-downtime migration strategy using blue-green deployments',
        'Automated daily backups with 30-day retention',
        'Database monitoring with alerts for performance issues',
        'Automated failover to replica on primary failure'
      ],
      outcome: 'Reduced average query time from 500ms to 50ms, handled 10x traffic increase, and reduced database costs by 40% through optimization.'
    }
  ];
}
