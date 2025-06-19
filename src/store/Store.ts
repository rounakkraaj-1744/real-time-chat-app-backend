export type UserID = string;

export interface Chat{
    chatID: string
    name: string
    uid: UserID
    message: string
    upvotes: UserID[] // the chat with the highest upvote will move to the top and manage downvotes as well
}

export abstract class Store{
    constructor (){
        
    }

    createRoom (rid: string){
    
    }

    addChat (uid: UserID, room: string, name: string, message: string){

    }

    getChat (room: string, limit: number, offset: number){

    }

    upvoteChat (uid: UserID, rid: string, name: string, message: string){

    }
}