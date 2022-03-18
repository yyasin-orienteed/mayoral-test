import type { NextApiRequest, NextApiResponse } from "next";

interface ProductDto {
  id: number;
  name: string;
  originalPrice: number;
  discount?: number;
  color: string;
  img: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { search },
  } = req;
  let result: ProductDto[] =
    typeof search === "string" ? arr.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())) : arr;
  console.log(typeof search === "string", search);

  res.status(200).json(result);
}
var arr: ProductDto[] = [
  { id: 0, name: "Polo ser John ", originalPrice: 150, discount: 0.2, color: "red", img: "/images/jaket.jpg" },
  { id: 1, name: "Polo ser Yos", originalPrice: 200, discount: 0.1, color: "blue", img: "/images/jaket.jpg" },
  { id: 2, name: "Polo ser Jacket", originalPrice: 150, color: "red", img: "/images/jaket.jpg" },
  { id: 3, name: "Polo ser Cap", originalPrice: 100, discount: 0.15, color: "blue", img: "/images/jaket.jpg" },
  { id: 4, name: "Polo ser Jacket", originalPrice: 200, color: "red", img: "/images/jaket.jpg" },
  { id: 5, name: "Polo ser Cap", originalPrice: 200, color: "blue", img: "/images/jaket.jpg" },
  { id: 6, name: "Polo ser testt", originalPrice: 100, discount: 0.2, color: "red", img: "/images/jaket.jpg" },
  { id: 7, name: "Polo ser testt23", originalPrice: 100, discount: 0.12, color: "blue", img: "/images/jaket.jpg" },
  { id: 8, name: "Polo ser  Doe ds", originalPrice: 180, color: "red", img: "/images/jaket.jpg" },
  { id: 9, name: "Polo ser Mohammed", originalPrice: 200, discount: 0.1, color: "blue", img: "/images/jaket.jpg" },
  { id: 10, name: "Polo ser Mohammed", originalPrice: 150, discount: 0.2, color: "red", img: "/images/jaket.jpg" },
  { id: 11, name: "Polo ser Mohammed", originalPrice: 180, color: "blue", img: "/images/jaket.jpg" },
  { id: 12, name: "Polo ser Cap Doe", originalPrice: 150, discount: 0.2, color: "red", img: "/images/jaket.jpg" },
  { id: 13, name: "Polo ser Jacket", originalPrice: 150, discount: 0.2, color: "blue", img: "/images/jaket.jpg" },
  { id: 14, name: "Polo ser Jacket", originalPrice: 170, discount: 0.2, color: "red", img: "/images/jaket.jpg" },
  { id: 15, name: "Polo ser Jacket", originalPrice: 150, discount: 0.2, color: "blue", img: "/images/jaket.jpg" },
];
