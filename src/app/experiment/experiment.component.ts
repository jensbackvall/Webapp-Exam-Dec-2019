import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { SafePipe } from '../safe.pipe';

import { Experiment } from './experiment.model';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html'
})
export class ExperimentComponent {

  // For later experiments: Experiment

  experiments = [
    {
      ref: 'experiment1',
      title: 'Teaching Each Other Lab',
      imageurl: "url('assets/img/experiment1.jpg')" ,
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
      title: 'Random Performance Game',
      imageurl: "url('assets/img/Random-kost.jpg')",
      artist: 'Livingstones Kabinet',
      year: '2015',
      interviewvideo: 'https://player.vimeo.com/video/362634777',
      infotext: 'Kan man udvikle et hands-on spil, der kan bruges som et strukturerings- og inspirationsværktøj i en scenekunstnerisk skabelsesproces? Livingstones Kabinet har tidligere arbejdet med tilfældighedsprincipper. Dette har vakt en interesse for at gå videre i arbejdet med ’randomisering’ i den scenekunstneriske udvikling. Med RPG prøvede vi, at udvikle et værktøj, der er specifikt gearet til scenekunst og som kan bruges til både at skabe struktur, indhold og form.',
      credits: 'Pete Livingstone, Nina Kareis Livingstone, Svend E Kristensen, Petter Wadsten, Henrik Silver, Amia Miang, Kristine Sørensen Ougaard.',
      showcasevideo: 'https://player.vimeo.com/video/362634777',
      report: 'http://www.livingstoneskabinet.com/images/pdf/Teater1artikel.pdf',
      telephone: 'ikke tilgængeligt',
      contactmail: 'pete@livingstoneskabinet.com',
      website: 'www.livingstoneskabinet.com'
    },
    {
      ref: 'experiment3',
      title: 'TOTAL!DANS!',
      imageurl: "url('assets/img/experiment2.png')",
      artist: 'Ellen K og Co.',
      year: '2013/2019',
      interviewvideo: 'https://player.vimeo.com/video/362634777',
      infotext: 'Hvad sker der, hvis en gruppe børn i alderen 7-10 år er frie til at bevæge sig i rummet hvor to dansere og en musiker arbejder sammen? Hvordan skabes der tillid og kontakt og hvordan inviteres børnene til at deltage med hele kroppen i bevægelse? Hvordan viser der sig koreografisk struktur gennem samspillet mellem kunstnere - dans og musik, og en børnegruppe?',
      credits: 'Ellen Kilsgaard, Gert Østergård, Henriette Groth, Anne Nybo, Birgitte Lundtoft, Anamet Magven, Anu Rajala- Erkut, Rosa Meyer, Marie Lykkemark.',
      showcasevideo: 'https://player.vimeo.com/video/362634777',
      report: 'https://totaldans.files.wordpress.com/2017/02/uddybende-materiale-om-totaldans.pdf',
      telephone: '(+45)60170119',
      contactmail: 'ellenkilsgaard@gmail.com',
      website: 'www.totaldans.com'
    }
  ]

}
