import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterInfoService } from '../../services/characterInfo.services';
import { Observable, Subscription, map } from 'rxjs';
import { Character } from '../../models/character-card.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit, OnDestroy{

  characterInfo$!: Observable<Character>
  private routeSub! : Subscription;
  
  constructor(private characterInfoService : CharacterInfoService,
              private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe( params => {
      console.log(params['id']);
      this.characterInfo$ = this.characterInfoService.getCharacterById(params['id']);
      console.log(this.characterInfo$)
    });  
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
  

}
