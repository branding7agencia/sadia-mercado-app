export interface Product {
  id: string;
  name: string;
  brand: 'Sadia' | 'Perdigão' | 'Qualy' | 'Bassi';
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  occasion?: string;
  weight: string;
  isPromo?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'frios', name: 'Frios', icon: '🧀', color: 'hsl(45, 100%, 51%)' },
  { id: 'congelados', name: 'Congelados', icon: '❄️', color: 'hsl(200, 80%, 50%)' },
  { id: 'empanados', name: 'Empanados', icon: '🍗', color: 'hsl(30, 90%, 50%)' },
  { id: 'in-natura', name: 'In Natura', icon: '🥩', color: 'hsl(356, 83%, 48%)' },
  { id: 'margarinas', name: 'Margarinas', icon: '🧈', color: 'hsl(50, 95%, 55%)' },
  { id: 'salsichas', name: 'Salsichas', icon: '🌭', color: 'hsl(15, 85%, 50%)' },
];

export const occasions = [
  { id: 'lanche', name: 'Para o Lanche', emoji: '🥪' },
  { id: 'cafe', name: 'Para o Café', emoji: '☕' },
  { id: 'churrasco', name: 'Para o Churrasco', emoji: '🔥' },
  { id: 'almoco', name: 'Para o Almoço', emoji: '🍽️' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Salsicha Tradicional',
    brand: 'Sadia',
    price: 11.19,
    image: 'https://brfsaprodutosprd.blob.core.windows.net/centralbrf/MKP_SAY_135447.webp',
    category: 'salsichas',
    occasion: 'lanche',
    weight: '500g',
    isPromo: true,
  },
  {
    id: '2',
    name: 'Pop Dog',
    brand: 'Sadia',
    price: 8.89,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000A862T&oid=00D410000012TJa',
    category: 'salsichas',
    occasion: 'lanche',
    weight: '250g',
  },
  {
    id: '3',
    name: 'Nuggets Crocante',
    brand: 'Sadia',
    price: 11.59,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000C63tx&oid=00D410000012TJa',
    category: 'empanados',
    occasion: 'lanche',
    weight: '300g',
    isPromo: true,
  },
  {
    id: '4',
    name: 'Nuggets c/ Queijo',
    brand: 'Sadia',
    price: 11.59,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000C63p7&oid=00D410000012TJa',
    category: 'empanados',
    occasion: 'lanche',
    weight: '300g',
  },
  {
    id: '5',
    name: 'Empanacho',
    brand: 'Sadia',
    price: 13.55,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000CDXLp&oid=00D410000012TJa',
    category: 'empanados',
    weight: '275g',
  },
  {
    id: '6',
    name: 'Pop Nuggets',
    brand: 'Sadia',
    price: 11.59,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U600000CGeFV&oid=00D410000012TJa',
    category: 'empanados',
    occasion: 'lanche',
    weight: '275g',
  },
  {
    id: '7',
    name: 'Salsicha Hot Dog',
    brand: 'Perdigão',
    price: 11.19,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U6000009BDuP&oid=00D410000012TJa',
    category: 'salsichas',
    occasion: 'lanche',
    weight: '500g',
  },
  {
    id: '8',
    name: 'Salsicha Viena',
    brand: 'Perdigão',
    price: 11.19,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U6000009BE0r&oid=00D410000012TJa',
    category: 'salsichas',
    weight: '500g',
  },
  {
    id: '9',
    name: 'Tirinhas de Frango',
    brand: 'Perdigão',
    price: 11.69,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U6000009GDNV&oid=00D410000012TJa',
    category: 'empanados',
    weight: '300g',
    isPromo: true,
  },
  {
    id: '10',
    name: 'Margarina com Sal',
    brand: 'Qualy',
    price: 9.49,
    originalPrice: 11.99,
    image: 'https://brfsaprodutosprd.blob.core.windows.net/centralbrf/MKP_MGL_126540.webp',
    category: 'margarinas',
    occasion: 'cafe',
    weight: '500g',
    isPromo: true,
  },
  {
    id: '11',
    name: 'Salsicha de Peru',
    brand: 'Sadia',
    price: 10.59,
    image: 'https://brfsaprodutosprd.blob.core.windows.net/centralbrf/MKP_SPSL_331597.webp',
    category: 'salsichas',
    weight: '500g',
  },
  {
    id: '12',
    name: 'Xtreme Chicken Bomb',
    brand: 'Sadia',
    price: 11.59,
    image: 'https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=015U6000007FMU1&oid=00D410000012TJa',
    category: 'empanados',
    weight: '275g',
  },
];

export const promoProducts = products.filter(p => p.isPromo);

// Clássicos Sadia - produtos icônicos da marca
export const classicProducts = products.filter(p => 
  p.brand === 'Sadia' && ['1', '3', '5', '11'].includes(p.id)
);

// Mais vendidos - produtos populares
export const bestSellerProducts = products.filter(p => 
  ['1', '3', '7', '10', '9'].includes(p.id)
);
