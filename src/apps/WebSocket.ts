import fm_request from '../db/models/fm_request';
import http from 'http';
import { Server } from 'socket.io';
import { getRepository } from 'typeorm';

export let diferidos:any[];


export default async (httpServer: http.Server): Promise<void> => {
	console.log('ini socket');

	diferidos = await getRepository(fm_request).find({id_status_request:4})
	
	//InitDB();


	const wss = new Server(httpServer,{cors:{origin:'*',methods:['GET','POST']}});

	let client1:any[] = [];
	let client2:any[] = [];

	
	

	wss.on('connection', (ws) => {
		console.log('coneccio socket');
		
		ws.on('client1',(item)=>{
			console.log('coneccio client1');

			console.log(client1);
			
			client1.push(item)
			
			ws.emit('client2',{msg:'hhh'} )
		})

		ws.on('client2',(item)=>{
			console.log('coneccio client2');

			console.log(client2);

			client2.push(item)

			ws.emit('client1', {msg:'hhh'})
		})

		ws.on('list_diferidos', (data)=>{

			console.log('data',data);
			

			ws.emit('list_diferidos',{data,diferidos})
		});

		ws.emit('list_diferidos',{diferidos})

		ws.on('on', (msg:any)=>{
			console.log('on',msg);

			return {msg:'hola'}
		})
	});
};
