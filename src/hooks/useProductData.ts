import axios, {AxiosPromise} from "axios";
import {environment} from "../environment.ts";
import {Product} from "../data/model/Product.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

const findAllProductsData = async (): AxiosPromise<Product[]> => {
  const res = axios.get(`${environment.API_URL}/product`);
  return res;
}

const saveProductData = async (product: Product) => {
  const res = axios.post(`${environment.API_URL}/product`, product);
  return res;
}

const findProductById = async (id: number): AxiosPromise<Product> => {
  const res = axios.get(`${environment.API_URL}/product/${id}`);
  return res;
}

export function FindProductById(id: number) {
  const query = useQuery({
    queryFn: () => findProductById(id),
    queryKey: ['product-by-id'],
    retry: 2
  })
  return {...query, data: query.data?.data}
}


export function FindAllProducts() {
  const query = useQuery({
    queryFn: findAllProductsData,
    queryKey: ['products'],
    retry: 2
  })
  return {
    ...query,
    data: query.data?.data
  }
}

export function SaveProduct() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: saveProductData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['products']});
    }
  })
  return mutate;
}