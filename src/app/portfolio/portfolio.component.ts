import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images: string[] = [
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png'
  ];
  
  selectedImage: string | null = null;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('layer')) {
      this.selectedImage = target.previousElementSibling?.getAttribute('src') ?? null;
      document.querySelector('.model')?.classList.remove('d-none');
    } else if (target.classList.contains('model')) {
      this.selectedImage = null;
      document.querySelector('.model')?.classList.add('d-none');
    }
  }
}
