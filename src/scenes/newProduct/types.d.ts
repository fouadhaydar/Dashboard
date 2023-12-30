interface Product {
  title: string;
  description: string;
  discount: number;
  imageUrl: string;
  manufacturer: string;
  manufacturerId: number;
  categoryId: number;
  category: string;
  specification: string;
  barCode: string;
  productVariantsVMs: ProductVariation[];
}

interface ProductVariation {
  // id: string;
  qty: number;
  sku: string;
  price: number;
  optionsValues: {
    [key: string]: string;
    // color : #fff
    // ram / storage : 8 / 256 GB
  };
}
