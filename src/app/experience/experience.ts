import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      period: '2022 - Present',
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      achievements: [
        'Led development of enterprise Angular application serving 50K+ users',
        'Reduced application load time by 65% through performance optimization',
        'Mentored team of 5 junior developers, improving code quality by 40%',
        'Architected microservices solution handling 1M+ API requests daily',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      period: '2020 - 2022',
      title: 'Full-Stack Developer',
      company: 'Digital Innovations LLC',
      location: 'Remote',
      achievements: [
        'Developed 8+ production applications using Angular and Ionic',
        'Optimized database queries reducing response time by 50%',
        'Built mobile apps with 100K+ downloads and 4.5+ star ratings',
        'Implemented authentication systems serving 20K+ active users',
        'Reduced infrastructure costs by 35% through optimization'
      ],
      technologies: ['Angular', 'Ionic', 'Node.js', 'Firebase', 'MySQL', 'REST APIs']
    },
    {
      period: '2019 - 2020',
      title: 'Frontend Developer',
      company: 'StartupHub',
      location: 'Remote',
      achievements: [
        'Built responsive web applications using Angular and TypeScript',
        'Improved user experience scores by 45% through UI/UX enhancements',
        'Collaborated with design team to implement pixel-perfect interfaces',
        'Reduced bundle size by 40% through code optimization',
        'Delivered 5+ client projects on time and within budget'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'HTML/CSS', 'JavaScript']
    }
  ];
}
