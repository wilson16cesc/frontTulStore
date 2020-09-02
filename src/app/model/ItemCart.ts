export class ItemCart {
    product_id?: number;
    cart_id?: number;
    name:string;
    quantity: number;
    
}
export const DEFAULT_ITEM_CART_OBJECT: ItemCart = {
    product_id: 0,
    cart_id: 0,
    name:'',
    quantity: 0,
};