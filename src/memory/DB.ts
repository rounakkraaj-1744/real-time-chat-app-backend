import { Store, Chat, UserID} from "../store/Store";

let globalChatID = 0

export interface Room{
    rid: string
    chats: Chat[]
}

export class DB implements Store{
    private store: Map<String, Room>;
    constructor (){
        this.store = new Map<String, Room>()
    }

    createRoom (rid: string){
        this.store.set(rid, {rid, chats: []})
    }

    addChat (uid: UserID, rid: string, name: string, message: string){
        const room = this.store.get(rid);
        if (!room)
            return []
        room.chats.push({
            chatID: (globalChatID++).toString(), uid, name, message, upvotes: []
        })
    }

    getChat (rid: string, limit: number, offset: number){
        const room = this.store.get(rid);
        if (!room)
            return []
        return room.chats.reverse ().slice (0, offset).slice (-1 * limit);
    }

    upvoteChat (uid: UserID, rid: string, name: string, message: string){
        const room = this.store.get(rid);
        if (!room)
            return []

        const chat = room.chats.find((id)=> id === chatID)

        if (chat){
            chat.upvotes.push(uid)
        }
    }
}