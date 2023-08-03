import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { CardsService } from '../cards.service';
import { Set } from '../interfaces';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  id : string = this.route.snapshot.paramMap.get('id') || "Base Set"
  set : Set | null = null;
  constructor(private cardsService : CardsService) {
    this.cardsService.getSet(this.id).then((set : Set) => {
      this.set = set;
    });
  }
  p: number = 1
}
