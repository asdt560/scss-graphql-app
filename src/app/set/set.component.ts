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
  constructor(private cardsService : CardsService) {}
  route : ActivatedRoute = inject(ActivatedRoute);
  name : string = this.route.snapshot.paramMap.get('name') || "Base Set"
  p: number = 1
  set : Set | null = null;
  ngOnInit() {
    this.cardsService.getSet(this.name).then((data : any) => {
      this.set = data;
    });
  }
}
