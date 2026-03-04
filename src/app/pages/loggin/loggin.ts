import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loggin.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Loggin implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  fb = inject(FormBuilder)
  hasError= signal(false)
  isPosting= signal(false)

  loggingForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],

  });

  onSubmit(){
    if(this.loggingForm.invalid){
      this.hasError.set(true)
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }
    const{ email='', password =''}= this.loggingForm.value;
    console.log({email, password});
  }



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
