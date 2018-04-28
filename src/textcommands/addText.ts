import { getManager } from 'typeorm';
import { TextReplies } from '../orm/entity/textReplies';

export class AddText {
  static entityManager: any;
  constructor(){
    CrudUser.entityManager = getManager();
  };

  public addNewText(watchText: string, replyText: string): string{
    //If you set a text for !0 and it replies 0, I hate you
    if((!watchText && !replyText) || (watchText == 0 && !replyText) || (replyText == 0 && !watchText)){
      addText(watchText, replyText).then((results) => {
        console.log(results);
        return 1;
      }).catch((error) => {return error;})
    } else {
      return "Please be sure all fields are set (!setText {watchText} {replyText})";
    }
    return "Error adding new Text (Really you should not get this)";
  }

  async addText(watchText: string, replyText: string): Promise<any>{
    let text = await AddText.entityManager.create(TextReplies);
    text.watchText = watchText;
    text.replyText = replyText;
    return await AddText.entityManager.save(text);
  }
}
