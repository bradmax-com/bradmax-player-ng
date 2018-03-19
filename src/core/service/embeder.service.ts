import { EventEmitter, Injectable } from '@angular/core';

import { BRADMAX_PLAYER_VERSION } from '@bradmax/player/version';

import { BradmaxPlayerComponentServiceModel } from '../model/component.service.model';

export let EmbederServiceCounter = -1;

@Injectable()
export class EmbederService implements BradmaxPlayerComponentServiceModel {

	debug = false;
	isInitialized = false;
	name: bradmax.player.SkinName | null = null;
	version = BRADMAX_PLAYER_VERSION;

	nativeElement: Element | null = null;
	player: bradmax.player.Player | null = null;
	api: bradmax.player.PlayerJavascriptApi | null = null;

	onPlaying = new EventEmitter<bradmax.player.EventData>();
	onCurrentTimeChange = new EventEmitter<bradmax.player.EventData>();
	onComplete = new EventEmitter<bradmax.player.EventData>();

	protected globalConfig: bradmax.player.Configuration | null = null;

	constructor() {
		EmbederServiceCounter++;

		if (this.debug)
			console.debug(EmbederService.name + '.new(counter:' + EmbederServiceCounter + ')');

		this.isInitialized = false;
	}

	setup(element: Element) {
		this.nativeElement = element;

		if (this.debug)
			console.log(EmbederService.name + '.setup(', this.nativeElement, ')');
	}

	create(config: bradmax.player.Configuration) {
		this.clean();

		if (this.debug)
			console.log(EmbederService.name + '.create()');

		this.build(config);
		this.isInitialized = true;
	}

	clean(): void {
		if (this.debug)
			console.log(EmbederService.name + '.clean()');

		this.isInitialized = false;
		this.deattachApiListeners();

		if (this.player != null)
			bradmax.player.destroy(this.player);

		if (this.nativeElement != null)
			while (this.nativeElement.firstChild != null)
				this.nativeElement.removeChild(this.nativeElement.firstChild);

		this.api = null;
		this.player = null;
	}

	destroy() {
		if (this.debug)
			console.log(EmbederService.name + '.destroy()');

		this.clean();

		this.nativeElement = null;
	}

	get playerId() {
		if (this.name == null || this.version == null)
			return undefined;

		return this.name + '_' + this.version;
	}


	protected build(config: bradmax.player.Configuration | null) {
		if (this.debug)
			console.log(EmbederService.name + '.build()');

		if (config == null && this.globalConfig == null)
			throw new Error(EmbederService.name + '.build() -> player has no configuration !');

		if (this.nativeElement == null)
			throw new Error(EmbederService.name + '.build() -> player nativeElement == null !');

		try {
			this.player = bradmax.player.create(this.nativeElement, config == null ? this.globalConfig : config, this.playerId);
		} catch (e) { throw e; }

		try {
			this.api = this.player.modules.JavascriptApi;
		} catch (e) { throw e; }

		this.attachApiListeners();
	}

	protected attachApiListeners() {
		if (this.api != null) {
			this.api.add('VideoEvent.currentTimeChange', this.handleCurrentTimeChange);
			this.api.add('VideoEvent.playing', this.handlePlaying);
			this.api.add('VideoEvent.complete', this.handleComplete);
		}
	}

	protected deattachApiListeners() {
		if (this.api != null) {
			this.api.remove('VideoEvent.currentTimeChange', this.handleCurrentTimeChange);
			this.api.remove('VideoEvent.playing', this.handlePlaying);
			this.api.remove('VideoEvent.complete', this.handleComplete);
		}
	}

	private handleCurrentTimeChange = (e: bradmax.player.Event) => {
		if (this.debug)
			console.log(EmbederService.name + '.handleCurrentTimeChange(', e, ')');

		this.onCurrentTimeChange.emit(e.data);
	}

	private handlePlaying = (e: bradmax.player.Event) => {
		if (this.debug)
			console.log(EmbederService.name + '.handlePlaying(', e, ')');

		this.onPlaying.emit(e.data);
	}

	private handleComplete = (e: bradmax.player.Event) => {
		if (this.debug)
			console.log(EmbederService.name + '.handleComplete(', e, ')');

		this.onComplete.emit(e.data);
	}


}
