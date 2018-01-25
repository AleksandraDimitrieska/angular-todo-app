export interface Task{
    title:string;
    body:string;
    category:string;
    urgency:string;
    importancy:string;
    isFinished:boolean;
    id:number;
    user_id:number;
    created_at: Date;
    updated_at: Date;
}