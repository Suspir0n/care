import { Request } from 'express';
import variables from '../setting/config';
import * as path from 'path';

export class StorageController {

  async getFile(req: Request) {
    const filePath = `${variables.folderStorage}/${req.params.filename}`;
    return { file: path.resolve(filePath) };
  }

}