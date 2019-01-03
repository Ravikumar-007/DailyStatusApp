export interface Onregister {
    _id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}
export interface OnLogin {
    
    userName: string;
    password: string;
}
export interface OnDailyStatus {
    
    DateTime: string;
    Amount: number;
    TransactionType:string;
    Remarks:string;
}