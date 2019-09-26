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
      interviewvideo: 'https://player.vimeo.com/video/362631036',
      infotext: 'How can we teach and learn performance in non-hierarchical ways? The initiators of this project share the belief that each performer has to invent their own practices to adequately express what moves them. Because they consider everyone’s experiences to be of equal worth, each participant in the workshop should teach all others. For the Teaching Each Other Lab at Forsøgsstationen they wanted to examine if this approach from performance art can be successfully adapted to be used within a wider field of performative arts.',
      credits: 'Dorte Burmester Wium, Jörn Burmester Wium, Jorge Tadeo Baldeón, Olof Olsson, Jesper la Cour Andersen, Lucas Pradino, David Sebastian Lopez Restrepo, Jakob la Cour, Øyvind Kirchhoff, Tove Vestmø, Christian Rossil, Carmen Csilla Medina.',
      showcasevideo: 'https://player.vimeo.com/video/362631036',
      report: 'https://drive.google.com/file/d/1G-C0ASjq94VoReLkxi-mM5HYIiHLumUS/view?usp=sharing',
      telephone: '(+45)53602157',
      contactmail: 'burmesterandwium@gmail.com',
      website: 'www.joernburmester.de'
    },
    {
      ref: 'experiment2',
      title: 'TOTAL!DANS!',
      artist: 'Ellen K og Co.',
      year: '2013/2019',
      interviewvideo: 'https://player.vimeo.com/video/36554757',
      infotext: 'Spørgsmål ???????????????????????????? Hvad sker der, hvis en gruppe børn i alderen 7.-10 år er frie til at bevæge sig i rummet hvor to dansere og en musiker arbejder sammen? Hvordan skabes der tillid og kontakt? Hvordan inviterer kunstnerne børnene til at træde helt ind i værket og opleve det med alle sanser og hele kroppen i bevægelse? Hvordan viser der sig koreografisk struktur, en dramaturgi, gennem samspillet mellem kunstnere - dans og musik, og en børnegruppe?',
      credits: 'Ellen Kilsgaard, Gert Østergård, Henriette Groth, Anne Nybo, Birgitte Lundtoft, Anamet Magven, Anu Rajala- Erkut, Rosa Meyer, Marie Lykkemark.',
      showcasevideo: 'https://player.vimeo.com/video/36554757',
      report: 'https://totaldans.files.wordpress.com/2017/02/uddybende-materiale-om-totaldans.pdf',
      telephone: '(+45)60170119',
      contactmail: 'ellenkilsgaard@gmail.com',
      website: 'www.totaldans.com'
    }
  ]

}
