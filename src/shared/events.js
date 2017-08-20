/**
 * Created by Will Busby on 17/08/2017.
 * Description:
 */

import {EventEmitter} from 'fbemitter';

let emitter = void 0;

export default function() {
	if (!emitter) {
		emitter = new EventEmitter();
	}

	return emitter;
}