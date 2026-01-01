import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit() {
    if (this.isSubmitting) return;

    // Basic validation
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitError = true;
      setTimeout(() => this.submitError = false, 3000);
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.formData = { name: '', email: '', company: '', message: '', projectType: '' };
      
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1000);
  }
}
