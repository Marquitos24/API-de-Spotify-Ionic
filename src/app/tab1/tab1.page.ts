import { Component, EventEmitter, Output  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cancion: string = '';
  canciones: any[] = [];
  public cancionesAgregadas: any[] = []; // Lista de canciones agregadas// Lista de canciones agregadas


  constructor(private http: HttpClient, private alertController: AlertController, private router: Router) {}


  async handleSearch() {
    if (this.cancion.trim() === '') {
      const alert = await this.alertController.create({
        header: 'ALERTA',
        message: 'Debes añadir una cancion.',
        buttons: ['ACEPTAR'],
      });
      await alert.present();
      return;
    }

    try {
      const url =
        `https://spotify23.p.rapidapi.com/search/?q=${this.cancion}&type=multi&offset=1&limit=20&numberOfTopResults=5`;
        

      const options = {
        headers: new HttpHeaders({
          'X-RapidAPI-Key': '36c7f28caamshc2954bde752386fp124ea5jsncc77a83225a9',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        }),
      };

      
      
      const res: any = await this.http.get(url, options).toPromise();
      this.canciones = res.tracks.items;
    } catch (error) {
      console.log(`ups... error: ${error}`);
    }
  }

  // Esta función se llamará cuando hagas clic en el botón "Añadir a la lista"
  // Método para agregar una canción a la lista
  async anadirCanciones(cancion: any) {
    if (this.cancionesAgregadas.push(cancion)){
      console.log('Canción agregada a la lista:', cancion.data.name, cancion);
      this.router.navigate(['/tabs/tab2'], { state: { cancionesAgregadas: this.cancionesAgregadas } });

    }
    // No necesitas añadir canciones aquí, ya que lo haces en el Tab2Page
  }
}
