export class Product {
    id?: number;
    name: string;
    sku: string;
    description: string;
    pivot:any[];
}
export const DEFAULT_PRODUCT_OBJECT: Product = {
    name: '',
    sku: '',
    description: '',
    pivot: [],
};