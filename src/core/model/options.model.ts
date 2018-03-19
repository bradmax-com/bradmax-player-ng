
export interface BradmaxPlayerOptions {
	playerConfig?: bradmax.player.Configuration;
	debug?: boolean;
}

export interface BradmaxPlayerLoaderOptions extends BradmaxPlayerOptions {
	sourcePath: string;
}
