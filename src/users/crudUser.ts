import { getManager } from 'typeorm';
import { User } from '../orm/entity/user';


export class CrudUser {
  static entityManager: any;
  constructor(){
    CrudUser.entityManager = getManager();
  };

  async addNewUser(username: string): Promise<any>{
    let user = await CrudUser.entityManager.create(User);
    user.username = username;
    user.isAdmin = true;
    user.joindate = new Date();
    return await CrudUser.entityManager.save(user);
  }

  async isAdmin(username: string): Promise<any>{
    let user = await CrudUser.entityManager.createQueryBuilder(User, "user")
                                  .where("username = :inName", { inName: username })
                                  .getOne();
    return user.isAdmin;
  }
}
