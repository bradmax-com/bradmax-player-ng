import '@bradmax/player/mole';

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BradmaxPlayerMoleComponent } from './mole.component';
import { BRADMAX_PLAYER_DEBUG, BRADMAX_PLAYER_CONFIGURATION } from '../../core/model/token.model';
import { BradmaxPlayerOptions } from '../../core/model/options.model';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		BradmaxPlayerMoleComponent
	],
	entryComponents: [BradmaxPlayerMoleComponent],
	exports: [
		BradmaxPlayerMoleComponent
	]
})
export class BradmaxPlayerMoleModule {

	/**
	 * Use in AppModule: new instance of SumService.
	 */
	public static forRoot(options?: BradmaxPlayerOptions): ModuleWithProviders {
		return {
			ngModule: BradmaxPlayerMoleModule,
			providers: [
				{ provide: BRADMAX_PLAYER_DEBUG, useValue: options ? options.debug : false },
				{ provide: BRADMAX_PLAYER_CONFIGURATION, useValue: options ? options.playerConfig : null }
			]
		};
	}

	/**
	 * Use in features modules with lazy loading: new instance of SumService.
	 */
	public static forChild(options?: BradmaxPlayerOptions): ModuleWithProviders {
		return {
			ngModule: BradmaxPlayerMoleModule,
			providers: [
				{ provide: BRADMAX_PLAYER_DEBUG, useValue: options ? options.debug : false },
				{ provide: BRADMAX_PLAYER_CONFIGURATION, useValue: options ? options.playerConfig : null }
			]
		};
	}

}
