import { Response, NextFunction, Request } from 'express';
import { Doc } from 'hooks/docs';
import { getRepository } from 'typeorm';
import fm_photo from '../../db/models/fm_photo';

export const upFileRecaudos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { filename }: Express.Multer.File = req.file;
		const { legend, user } = req.body;
		const path = await Doc.Move(filename, user);
		const link = Doc.Route(filename, user);

		const data = getRepository(fm_photo).create({ name: filename, path, link });
		const info = await getRepository(fm_photo).save(data);

		res.status(200).json({ message: 'archivo subidor', info });
	} catch (err) {
		next(err);
	}
};

// subir varias imagenes
export const upFilesRecaudos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { legend, user } = req.body;

		const files: any = req.files;

		const stop: Promise<fm_photo>[] = files.map(async (file: Express.Multer.File): Promise<fm_photo> => {
			const path = await Doc.Move(file.filename, user);
			const link = Doc.Route(file.filename, user);

			return getRepository(fm_photo).create({ name: file.filename, path, link });
		});

		const data: fm_photo[] = await Promise.all(stop);

		const info = await getRepository(fm_photo).save(data);

		res.status(200).json({ message: 'archivos subidor', info });
	} catch (err) {
		next(err);
	}
};
