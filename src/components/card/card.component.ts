import { Component, Input } from '@angular/core';
import {ItemInterface} from '../../interfaces/data-interfaces';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  title = 'card';

  @Input()
  itemData: ItemInterface | undefined;

  @Input()
  small: Boolean = false;
}
