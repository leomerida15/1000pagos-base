// app's
import app from './apps';
import WebSocket from './apps/WebSocket';
import { createConnection, getRepository } from 'typeorm';
import contents from './db/contents';
import log from './hooks/logs/index';
// init server

const httpServer = app.listen(app.get('port'), () => {
	console.log('                                                                  ()_()');
	console.log(`app corriendo en el puerto http://localhost:${app.get('port')} leoM             (o.o)`);
	console.log('                                                                  (|_|)*');
});

//database

createConnection()
	.then(async () => {
		await contents();
		log.text.OK('DB OK');

		WebSocket(httpServer);
	})
	.catch((err) => console.log('DB ERR', err));
