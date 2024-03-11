import { Component, ViewChild, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cancionesAgregadas: any[] = [];
  @ViewChild(IonContent) content!: IonContent;
 

  constructor(private route: ActivatedRoute) {}
 
  ngOnInit() {
    this.cancionesAgregadas = history.state.cancionesAgregadas;
    console.log('Canciones recibidas en Tab2:', this.cancionesAgregadas);
  }

  onCancionAgregada(cancion: any) {
    this.cancionesAgregadas.push(cancion);
    console.log('Canción agregada a la lista:', cancion);
  }

  eliminar(cancion: any) {
    // Encuentra el índice de la canción en la lista
    
      // Elimina la canción del array
      this.cancionesAgregadas.splice(cancion, 1);
    
  }
  actualizar(){
    window.location.reload();
  }

  scrollToBottom() {
    if (this.content) {
      this.content.scrollToBottom(500);
    }
  }

  scrollToTop() {
    if (this.content) {
      this.content.scrollToTop(500);
    }
  }

  

}
