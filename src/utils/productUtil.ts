export interface ProductJust{
    "amount":number,
    "currencyCode":string
}

export interface Product {
    "id": number,
    "handle": string,
    "title": string,
    "featuredImage": {
      "url": string,
      "altText":string
    },
    "priceRange": {
      "minVariantPrice": ProductJust,
      "maxVariantPrice": ProductJust
    }
  }

  export interface Cart{
    "id": number,
    "quantity": number,
    "productId": number
  }