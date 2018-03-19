import { ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BradmaxPlayerComponentServiceModel } from '../model/component.service.model';

export abstract class AbstractBradmaxPlayerComponent<S extends BradmaxPlayerComponentServiceModel> implements OnInit, OnDestroy {

	@Input() config: bradmax.player.Configuration | null = null;

	@Output() playing = new EventEmitter<bradmax.player.EventData>();
	@Output() currentTimeChange = new EventEmitter<bradmax.player.EventData>();
	@Output() complete = new EventEmitter<bradmax.player.EventData>();

	constructor(
		public service: S,
		protected elementRef: ElementRef,
		protected debug: boolean,
	) {
		if (this.debug)
			console.debug(AbstractBradmaxPlayerComponent.name + '.new()');
		try { this.service.setup(this.elementRef.nativeElement); } catch (e) { throw e; }
	}

	ngOnInit() {
		if (this.debug)
			console.debug(AbstractBradmaxPlayerComponent.name + '.ngOnInit(', this.config, ')');

		if (this.config == null || typeof this.config === undefined)
			throw new Error(AbstractBradmaxPlayerComponent.name + '.ngOnInit.config == ' + this.config);

		this.service.onPlaying.subscribe((e: bradmax.player.EventData) => this.playing.emit(e));
		this.service.onCurrentTimeChange.subscribe((e: bradmax.player.EventData) => this.currentTimeChange.emit(e));
		this.service.onComplete.subscribe((e: bradmax.player.EventData) => this.complete.emit(e));

		try { this.service.create(this.config); } catch (e) { throw e; }
	}

	ngOnDestroy() {
		if (this.debug)
			console.debug(AbstractBradmaxPlayerComponent.name + '.ngOnDestroy()');
		try { this.service.destroy(); } catch (e) { throw e; }
	}

}
