// app's
import app from './apps';
import WebSocket, { diferidos } from './apps/WebSocket';
import { createConnection, getRepository } from 'typeorm';
import contents from './db/contents';
import log from './hooks/logs/index';
import fm_request from 'db/models/fm_request';
// init server


//database

createConnection()
	.then(async () => {
		await contents();
		log.text.OK('DB OK');

		const httpServer = app.listen(app.get('port'), () => {
			console.log('                                                                  ()_()');
			console.log(`app corriendo en el puerto http://localhost:${app.get('port')} leoM             (o.o)`);
			console.log('                                                                  (|_|)*');
		});

		
		WebSocket(httpServer);
	})
	.catch((err) => console.log('DB ERR', err));


