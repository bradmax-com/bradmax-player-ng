import { Component, ElementRef, Inject, OnDestroy, OnInit } from '@angular/core';

import { EmbederService } from '../../core/service/embeder.service';
import { AbstractBradmaxPlayerComponent } from '../../core/component/abstract.component';
import { BRADMAX_PLAYER_DEBUG } from '../../core/model/token.model';


@Component({
	selector: 'bradmax-player-snake',
	template: `<i>bradmax player loading...</i>`,
	styles: [`:host {display: block;}`],
	providers: [EmbederService]
})
export class BradmaxPlayerSnakeComponent extends AbstractBradmaxPlayerComponent<EmbederService> implements OnInit, OnDestroy {

	constructor(
		public service: EmbederService,
		protected elementRef: ElementRef,
		@Inject(BRADMAX_PLAYER_DEBUG) protected debug: boolean
	) {
		super(service, elementRef, debug);
		service.debug = debug;
		service.name = 'snake';
	}

}
