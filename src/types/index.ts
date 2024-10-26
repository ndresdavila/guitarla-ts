// convertir props a typescript
export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  };

// Utility types: Pick & Omit
//export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
//    // con & {} agrega nuevos atributos al type
//    quantity: number
//}

export type CartItem = Guitar & {
    quantity: number
}