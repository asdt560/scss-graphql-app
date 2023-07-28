import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent {
  constructor(private cardsService : CardsService) {}
  route : ActivatedRoute = inject(ActivatedRoute);
  name : string = this.route.snapshot.paramMap.get('name') || "Base Set"
  cards : any[] = [];
  ngOnInit() {
    this.cardsService.getSet(this.name).then((data : any) => {
      this.cards = data;
      console.log(this.cards)
    });
  }
}
