import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 95, years: '5+' },
        { name: 'Ionic', level: 90, years: '4+' },
        { name: 'TypeScript', level: 95, years: '5+' },
        { name: 'RxJS', level: 90, years: '4+' },
        { name: 'NgRx', level: 85, years: '3+' },
        { name: 'HTML5/CSS3', level: 95, years: '5+' },
        { name: 'JavaScript (ES6+)', level: 95, years: '5+' },
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', level: 85, years: '4+' },
        { name: 'REST APIs', level: 95, years: '5+' },
        { name: 'GraphQL', level: 75, years: '2+' },
        { name: 'Authentication', level: 90, years: '4+' },
        { name: 'JWT/OAuth', level: 90, years: '4+' },
        { name: 'Microservices', level: 80, years: '3+' },
      ]
    },
    {
      title: 'Database & Performance',
      skills: [
        { name: 'SQL', level: 90, years: '5+' },
        { name: 'PostgreSQL', level: 85, years: '4+' },
        { name: 'MySQL', level: 85, years: '4+' },
        { name: 'Query Optimization', level: 90, years: '4+' },
        { name: 'Database Design', level: 90, years: '4+' },
        { name: 'Performance Tuning', level: 90, years: '4+' },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Firebase', level: 85, years: '3+' },
        { name: 'CI/CD', level: 80, years: '3+' },
        { name: 'Git', level: 95, years: '5+' },
        { name: 'Docker', level: 75, years: '2+' },
        { name: 'AWS', level: 70, years: '2+' },
        { name: 'Testing (Jasmine/Karma)', level: 85, years: '4+' },
      ]
    }
  ];
}
