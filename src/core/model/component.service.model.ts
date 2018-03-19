import { EventEmitter } from '@angular/core';

export interface BradmaxPlayerComponentServiceModel {
	name: bradmax.player.SkinName | null;
	version: string;
	onPlaying: EventEmitter<bradmax.player.EventData>;
	onCurrentTimeChange: EventEmitter<bradmax.player.EventData>;
	onComplete: EventEmitter<bradmax.player.EventData>;
	setup(element: HTMLElement): void;
	create(config: bradmax.player.Configuration): void;
	destroy(): void;
}
