import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experiment } from '../experiment/experiment.model';
import { Subscription } from 'rxjs';
import { ExperimentsService } from '../experiment/experiments.service';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html'
  // styleUrls: ['./section-about.component.css']
})
export class SectionAboutComponent implements OnInit, OnDestroy {

  introtext =
    {
      introtitle: 'Into the unknown',
      introtext: 'Forsøgsstationen har siden 2009 huset og kurateret en lang række kunstnere og deres forsøg. Alle genrer har været repræsenteret inden for den scenekunstneriske palet, men også nye genrer er opstået som et udtryk for den fantastiske opfindsomhed der præger disse unikke, markante og modige forsøg. Vidensdeling er et centralt begreb på Forsøgsstationen og betyder, at forsøgsresultater konsekvent deles gennem visninger, rapporter, platforme og seminarer. Det ønsker vi at udvide yderligere med dette site. Into the unknown er en åben source, hvor fagfolk og andre interesserede kan få en let adgang til eksempler på forsøgsarbejde i ord og praksis. Hvert forsøg præsenteres gennem interview og film for at give både en intellektuel og sanselig adgang til forsøgsarbejdet. Det er Forsøgsstationens ambition på sigt, at udvide dette site med eksempler på nye forsøg. Velkommen Into the unknown!'
    }

    experiments: Experiment[] = [];
    private experimentsSub: Subscription;
    constructor(public experimentsService: ExperimentsService) {}

    ngOnInit() {
      this.experimentsService.getExperiments();
      this.experimentsService.getExperimentsUpdateListener()
        .subscribe((experiments: Experiment[]) => {
          experiments.sort((expA, expB) => (expA.year > expB.year) ? -1 : 1);
          console.log(experiments);
          this.experiments = experiments;
        });
    }

    ngOnDestroy() {
      if (this.experimentsSub) {
        this.experimentsSub.unsubscribe();
      }
    }


}
