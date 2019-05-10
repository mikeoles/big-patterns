import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import Exercise from 'src/app/exercise.model';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, OnChanges {

  @Input() exerciseLogVolumes: Map<Exercise, number>;
  patternsVolume: Map<string, number>;
  stanceVolume: Map<string, number>;
  planeVolume: Map<string, number>;
  loadVolume: Map<string, number>;
  velocityVolume: Map<string, number>;
  durationVolume: Map<string, number>;

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['exerciseLogVolumes'] && this.exerciseLogVolumes) {
      const newPatternsVolume = new Map<string, number>();
      const newStanceVolume = new Map<string, number>();
      const newPlaneVolume = new Map<string, number>();
      const newLoadVolume = new Map<string, number>();
      const newVelocityVolume = new Map<string, number>();
      const newDurationVolume = new Map<string, number>();
      this.exerciseLogVolumes.forEach((volume: number, exercise: Exercise) => {

        if (newPatternsVolume.has(exercise.pattern)) {
          newPatternsVolume.set(exercise.pattern, volume + newPatternsVolume.get(exercise.pattern));
        } else {
          newPatternsVolume.set(exercise.pattern, volume);
        }

        if (newStanceVolume.has(exercise.stance)) {
          newStanceVolume.set(exercise.stance, volume + newStanceVolume.get(exercise.stance));
        } else {
          newStanceVolume.set(exercise.stance, volume);
        }

        if (newPlaneVolume.has(exercise.plane)) {
          newPlaneVolume.set(exercise.plane, volume + newPlaneVolume.get(exercise.plane));
        } else {
          newPlaneVolume.set(exercise.plane, volume);
        }

        if (newLoadVolume.has(exercise.load)) {
          newLoadVolume.set(exercise.load, volume + newLoadVolume.get(exercise.load));
        } else {
          newLoadVolume.set(exercise.load, volume);
        }

        if (newVelocityVolume.has(exercise.velocity)) {
          newVelocityVolume.set(exercise.velocity, volume + newVelocityVolume.get(exercise.velocity));
        } else {
          newVelocityVolume.set(exercise.velocity, volume);
        }

        if (newDurationVolume.has(exercise.duration)) {
          newDurationVolume.set(exercise.duration, volume + newDurationVolume.get(exercise.duration));
        } else {
          newDurationVolume.set(exercise.duration, volume);
        }
      });

      this.patternsVolume = newPatternsVolume;
      this.stanceVolume = newStanceVolume;
      this.planeVolume = newPlaneVolume;
      this.loadVolume = newLoadVolume;
      this.velocityVolume = newVelocityVolume;
      this.durationVolume = newDurationVolume;
    }
  }

}
