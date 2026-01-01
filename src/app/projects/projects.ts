import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Enterprise FinTech Platform',
      problem: 'A financial services company needed a scalable platform to handle 100K+ daily transactions with real-time data synchronization and strict security compliance.',
      solution: 'Architected a microservices-based Angular application with NgRx state management, implementing real-time WebSocket connections, JWT authentication, and comprehensive audit logging. Optimized database queries reducing API response time by 60%.',
      techStack: ['Angular 15', 'NgRx', 'Node.js', 'PostgreSQL', 'WebSockets', 'Docker', 'AWS'],
      results: [
        '60% reduction in API response time',
        '99.9% uptime achieved',
        'Handles 100K+ daily transactions',
        'Zero security incidents',
        '$2M+ in processed transactions monthly'
      ],
      category: 'Enterprise'
    },
    {
      title: 'Healthcare Telemedicine Mobile App',
      problem: 'A healthcare startup needed a cross-platform mobile app for video consultations, appointment scheduling, and prescription management that could scale to 50K+ users.',
      solution: 'Built an Ionic + Capacitor application with Angular, implementing video calling via WebRTC, push notifications, offline-first architecture, and HIPAA-compliant data encryption. Integrated with multiple third-party APIs for payment and pharmacy services.',
      techStack: ['Ionic 6', 'Angular', 'Capacitor', 'Firebase', 'WebRTC', 'RxJS', 'TypeScript'],
      results: [
        '50K+ active users in 6 months',
        '4.8/5 app store rating',
        '95% user satisfaction score',
        '40% faster load times vs competitors',
        '$500K+ in revenue generated'
      ],
      category: 'Mobile'
    },
    {
      title: 'E-commerce Performance Optimization',
      problem: 'An e-commerce platform was experiencing slow page loads (5+ seconds) and high bounce rates, losing potential revenue.',
      solution: 'Conducted comprehensive performance audit and implemented lazy loading, code splitting, image optimization, CDN integration, and database query optimization. Refactored critical paths using Angular OnPush change detection strategy.',
      techStack: ['Angular 14', 'RxJS', 'Node.js', 'MySQL', 'Redis', 'CDN', 'Webpack'],
      results: [
        '70% reduction in page load time (5s → 1.5s)',
        '45% decrease in bounce rate',
        '30% increase in conversion rate',
        '50% reduction in server costs',
        '$1.2M additional revenue in first year'
      ],
      category: 'Performance'
    },
    {
      title: 'Real Estate Management SaaS',
      problem: 'A real estate company needed a comprehensive platform for property management, tenant tracking, and financial reporting for 1000+ properties.',
      solution: 'Developed a full-stack Angular application with role-based access control, automated reporting, document management, and integration with payment gateways. Implemented advanced filtering and search capabilities with optimized database indexing.',
      techStack: ['Angular 16', 'TypeScript', 'Node.js', 'PostgreSQL', 'Firebase Storage', 'Stripe API', 'Chart.js'],
      results: [
        '1000+ properties managed',
        '80% reduction in manual reporting time',
        '95% tenant satisfaction',
        'Real-time financial dashboards',
        '50% increase in operational efficiency'
      ],
      category: 'SaaS'
    },
    {
      title: 'Educational Learning Platform',
      problem: 'An EdTech startup needed a scalable platform for online courses, live classes, and student progress tracking supporting 20K+ concurrent users.',
      solution: 'Built a responsive Angular application with real-time collaboration features, video streaming integration, progress tracking, and gamification. Implemented caching strategies and optimized for mobile devices.',
      techStack: ['Angular 15', 'Ionic', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'Vimeo API'],
      results: [
        '20K+ concurrent users supported',
        '90% course completion rate',
        '4.9/5 instructor rating',
        '99.8% uptime',
        '200K+ students enrolled'
      ],
      category: 'Education'
    },
    {
      title: 'Supply Chain Management System',
      problem: 'A logistics company required a system to track shipments, manage inventory, and optimize routes across multiple warehouses with real-time updates.',
      solution: 'Developed an Angular dashboard with real-time tracking, automated route optimization algorithms, inventory management, and comprehensive analytics. Integrated with GPS tracking APIs and implemented WebSocket connections for live updates.',
      techStack: ['Angular 14', 'NgRx', 'Node.js', 'PostgreSQL', 'WebSockets', 'Google Maps API', 'Redis'],
      results: [
        '35% reduction in delivery time',
        '25% decrease in fuel costs',
        'Real-time tracking for 5000+ shipments',
        '99% inventory accuracy',
        '$800K annual cost savings'
      ],
      category: 'Logistics'
    }
  ];
}
