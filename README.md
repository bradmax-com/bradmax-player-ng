___
![Bradmax][bradmaxLogo]![Angular][angularLogo]
___
This contains [bradmax player][bradmax] Angular 5 modules.
___
## Npm submodules:
| name | npm package | language | module | description |
|:---:|:---|:---:|:---:|:---|
| `gorilla` | [@bradmax/player-ng/gorilla][npm-player-ng] | *ts/js* | *es5/es2015/umd* | **Angular** module with [bradmax player][bradmax] **gorilla** skin. |
|  `mole`   | [@bradmax/player-ng/mole][npm-player-ng]    | *ts/js* | *es5/es2015/umd* | **Angular** module with [bradmax player][bradmax] **mole** skin.    |
|  `snake`  | [@bradmax/player-ng/snake][npm-player-ng]   | *ts/js* | *es5/es2015/umd* | **Angular** module with [bradmax player][bradmax] **snake** skin.   |
|  `zebra`  | [@bradmax/player-ng/zebra][npm-player-ng]   | *ts/js* | *es5/es2015/umd* | **Angular** module with [bradmax player][bradmax] **zebra** skin.   |
___
## Example:
- [bradmax-com/bradmax-player-ng-example](https://github.com/bradmax-com/bradmax-player-ng-example) : angular cli application.
___
## Usage:
### 1. Include bradmax player ng in your app module:
```
import { BradmaxPlayerGorillaModule } from '@bradmax/player-ng/gorilla';
import { BradmaxPlayerMoleModule } from '@bradmax/player-ng/mole';
import { BradmaxPlayerSnakeModule } from '@bradmax/player-ng/snake';
import { BradmaxPlayerZebraModule } from '@bradmax/player-ng/zebra';

@NgModule({
 imports: [
  BradmaxPlayerGorillaModule.forRoot(),
  BradmaxPlayerMoleModule.forRoot(),
  BradmaxPlayerSnakeModule.forRoot(),
  BradmaxPlayerZebraModule.forRoot()
 ]
})
export class AppModule { }
```
### 2. Include bradmax player ng component in app:
```
<!-- skin gorilla -->
<bradmax-player-gorilla [config]="CONFIG"></bradmax-player-gorilla>

<!-- skin mole -->
<bradmax-player-mole [config]="CONFIG"></bradmax-player-mole>

<!-- skin snake -->
<bradmax-player-snake [config]="CONFIG"></bradmax-player-snake>

<!-- skin zebra -->
<bradmax-player-zebra [config]="CONFIG"></bradmax-player-zebra>
```
*`CONFIG` is reference to valid [bradmax player configuration][bradmax-doc-config] json object*
___
#### License MIT 
___
More info @ [bradmax.com][bradmax]

[bradmax]: https://bradmax.com
[bradmax-doc-config]: https://bradmax.com/static/player-doc/configuration.html
[npm-player-ag]: https://npmjs.com/package/bradmax-player-ag
[npm-player-ng]: https://npmjs.com/package/bradmax-player-ng
[npm-player-rxjs]: https://npmjs.com/package/bradmax-player-rxjs
[npm-player]: https://npmjs.com/package/bradmax-player
[git-player-ag]: https://github.com/bradmax-com/bradmax-player-ag
[git-player-ag-example]: https://github.com/bradmax-com/bradmax-player-ag-example
[git-player-ng]: https://github.com/bradmax-com/bradmax-player-ng
[git-player-ng-example]: https://github.com/bradmax-com/bradmax-player-ng-example
[git-player-rxjs]: https://github.com/bradmax-com/bradmax-player-rxjs
[git-player-rxjs-example]: https://github.com/bradmax-com/bradmax-player-rxjs-example
[git-player-js]: https://github.com/bradmax-com/bradmax-player-js

[bradmaxLogo]: https://raw.githubusercontent.com/bradmax-com/bradmax-player-ng/master/assets/md/bradmax.svg?sanitize=true
[angularLogo]: https://raw.githubusercontent.com/bradmax-com/bradmax-player-ng/master/assets/md/ng.svg?sanitize=true
