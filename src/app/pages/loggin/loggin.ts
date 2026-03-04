import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [],
  templateUrl: './loggin.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Loggin implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);


  ngOnInit(): void {
    this.title.setTitle('Loggin Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Este es mi Loggin Page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Loggin Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Pagina de incio de sesion',
    });
  }
}
