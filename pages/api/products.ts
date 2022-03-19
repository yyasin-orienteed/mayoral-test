import type { NextApiRequest, NextApiResponse } from "next";

interface ProductDto {
  id: number;
  name: string;
  originalPrice: number;
  price: Number;
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
  { id: 0, name: "Patterned skirt set baby girl", price: 29.59, originalPrice: 36.99, discount: 0.2, color: "red", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/patterned-skirt-set-baby-girl_id_22-01942-019-M-2.JPG?v=20211111145855" },
  { id: 1, name: "Leggings 3 piece set baby girl", price: 28.35, originalPrice: 31.50, discount: 0.1, color: "blue", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/leggings-3-piece-set-baby-girl_id_22-01721-014-M-1.JPG?v=20211020132552" },
  { id: 2, name: "Set with guingham shorts baby girl", price: 28.35, originalPrice: 31.50, discount: 0.2, color: "red", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/set-with-guingham-shorts-baby-girl_id_22-01247-081-M-4.JPG?v=20210915140707" },
  { id: 3, name: "Raffia floral hat baby girl", price: 25.20, originalPrice: 15.99, discount: 0.15, color: "blue", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/raffia-floral-hat-baby-girl_id_22-10203-057-M-2.JPG?v=20211111122205" },
  { id: 4, name: "Denim jacket baby girl", price: 25.20, originalPrice: 31.50, discount: 0.2, color: "red", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/denim-jacket-baby-girl_id_22-01494-089-M-1.JPG?v=20211020132552" },
  { id: 5, name: "Embroidered dress baby girl", price: 25.20, originalPrice: 33.99, discount: 0.2, color: "blue", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/embroidered-dress-baby-girl_id_22-01930-023-M-1.JPG?v=20211020132553" },
  { id: 6, name: "ECOFRIENDS knit cardigan baby girl", price: 25.20, originalPrice: 20.99, discount: 0.2, color: "red", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/ecofriends-knit-cardigan-baby-girl_id_22-01358-027-M-4.JPG?v=20220207081929" },
  { id: 7, name: "Knit dress baby girl", price: 25.20, originalPrice: 25.99, discount: 0.12, color: "blue", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/knit-dress-baby-girl_id_22-01934-037-M-4.JPG?v=20210909061934" },
  { id: 8, name: "Denim long trousers baby girl", price: 25.20, originalPrice: 33.50, discount: 0.2, color: "red", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/denim-long-trousers-baby-girl_id_22-00535-062-M-4.JPG?v=20210909061853" },
  { id: 9, name: "Lyocell Tencel™ playsuit baby girl", price: 25.20, originalPrice: 45.50, discount: 0.1, color: "blue", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/ecofriends-lyocell-tencel%E2%84%A2-playsuit-baby-girl_id_22-01884-019-M-1.JPG?v=20211020132553" },
  { id: 10, name: "Gingham short set baby girl", price: 25.20, originalPrice: 36.99, discount: 0.2, color: "red", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/gingham-short-set-baby-girl_id_22-01240-085-M-4.JPG?v=20210915140701" },
  { id: 11, name: "Gingham playsuit baby girl", price: 25.20,  originalPrice: 31.50, discount: 0.2, color: "blue", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/gingham-playsuit-baby-girl_id_22-01889-028-M-4.JPG?v=20210909061925" },
  { id: 12, name: "Short sleeve T-shirt baby girl", price: 25.20,  originalPrice: 20.50, discount: 0.2, color: "red", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/ecofriends-short-sleeve-t-shirt-baby-girl_id_22-01028-075-M-2.JPG?v=20211111145855" },
  { id: 13, name: "2 piece set patterned T-shirts baby girl", price: 25.20, originalPrice: 28.99, discount: 0.2, color: "blue", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/ecofriends-2-piece-set-patterned-t-shirts-baby-girl_id_22-01031-071-M-4.JPG?v=20210915140700" },
  { id: 14, name: "Trench coat baby girl", price: 23.20, originalPrice: 25.60, discount: 0.2, color: "red", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/trench-coat-baby-girl_id_22-01497-096-M-4.JPG?v=20210909061917" },
  { id: 15, name: "windbreaker jacket baby girl", price: 21.20, originalPrice: 33.99, discount: 0.2, color: "blue", img: "https://media.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/ecofriends-windbreaker-jacket-baby-girl_id_22-01498-083-M-4.JPG?v=20220207081923" },
];
