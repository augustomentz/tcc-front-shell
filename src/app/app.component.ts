import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Type, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  NgComponentOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cart = signal<Type<any>>(null);

  async ngOnInit() {
      const result: any = await loadRemoteModule({
        remoteEntry : environment.mfe.carrinho,
        remoteName : 'tcc-front-carrinho',
        exposedModule : './Component'
      })

      this.cart.set(result.AppComponent)
    }
}
