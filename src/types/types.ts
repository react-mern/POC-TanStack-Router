interface Category {
  id: string;
  image: string;
  name: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
}

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
}
