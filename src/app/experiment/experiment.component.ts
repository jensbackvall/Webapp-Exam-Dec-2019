import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html'
})
export class ExperimentComponent {


  experiments = [
    {
      ref: 'experiment1',
      title: 'Teaching Each Other Lab',
      artist: 'B&W - Art and Support',
      year: '2018',
      interviewvideo: 'https://player.vimeo.com/video/36554757',
      infotext: 'How can we teach and learn performance in non-hierarchical ways?<br><br>The initiators of this project share the belief that each performer has to invent their own practices to adequately express what moves them. Because they consider everyone’s experiences to be of equal worth, each participant in the workshop should teach all others. For the Teaching Each Other Lab at Forsøgsstationen they wanted to examine if this approach from performance art can be successfully adapted to be used within a wider field of performative arts.<br><br>Credits:Dorte Burmester Wium, Jörn Burmester Wium, Jorge Tadeo Baldeón, Olof Olsson, Jesper la Cour Andersen, Lucas Pradino, David Sebastian Lopez Restrepo, Jakob la Cour, Øyvind Kirchhoff, Tove Vestmø, Christian Rossil, Carmen Csilla Medina.',
      showcasevideo: 'https://player.vimeo.com/video/36554757',
      report: 'https://drive.google.com/file/d/1G-C0ASjq94VoReLkxi-mM5HYIiHLumUS/view?usp=sharing',
      telephone: '(+45)53602157',
      contactmail: 'burmesterandwium@gmail.com',
      website: 'www.joernburmester.de'
    },
    {
      ref: 'experiment2',
      title: 'White is the New White',
      artist: 'White & Black',
      year: '1879',
      interviewvideo: 'https://player.vimeo.com/video/36554757',
      infotext: 'Black and white and white and black ',
      showcasevideo: 'https://player.vimeo.com/video/36554757',
      report: 'https://drive.google.com/file/d/1G-C0ASjq94VoReLkxi-mM5HYIiHLumUS/view?usp=sharing',
      telephone: '(+45)53602157',
      contactmail: 'burmesterandwium@gmail.com',
      website: 'www.joernburmester.de'
    }
  ]

}
