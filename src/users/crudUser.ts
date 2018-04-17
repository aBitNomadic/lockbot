import { getManager } from 'typeorm';
import { User } from '../orm/entity/user';


export class CrudUser {
  constructor(){};

  async addNewUser(username: string): Promise<any>{
    const entityManager = getManager();
    let user = await entityManager.create(User);
    user.username = username;
    user.isAdmin = true;
    user.joindate = new Date();
    return await entityManager.save(user);
  }


}
