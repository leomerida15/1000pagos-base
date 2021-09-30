// app's
import app from './apps';
import WebSocket from './apps/WebSocket';
// init server

const httpServer = app.listen(app.get('port'), () => {
	console.log('                                                                  ()_()');
	console.log(`app corriendo en el puerto http://localhost:${app.get('port')} leoM             (o.o)`);
	console.log('                                                                  (|_|)*');
});

WebSocket(httpServer);
