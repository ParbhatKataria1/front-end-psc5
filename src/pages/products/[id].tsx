import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";

import NextSEO from "../../components/NextSEO";
import ProductDetails from "../../components/ProductDetails";
import { fetchProductData, fetchProductDataItem } from "@/redux/app/app.api";
import { Product } from "../../utils/productUtil";
import { GetStaticPaths, GetStaticProps } from "next";

interface ProductType{
  props:{
    product:Product
  }
}
const Prodcut = ({product}:any) => {
  console.log(product)
  return (
    <>
      <NextSEO
        title="homepage"
        description="Home page for my webpage"
        ogImage="/og-image.png"
        url={new URL("http://localhost:3000/")}
      />
      <Box
        w="calc(11/12)%"
        mt="16"
        maxW="5xl"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        <Link href="/">
          <Text
            display="flex"
            alignItems="center"
            gap={2}
            textColor="gray.400"
            transition="text-color"
            transitionDuration="200s"
            _hover={{
              textColor: "gray.800",
            }}
          >
            <MdKeyboardBackspace />
            Back to shop
          </Text>
        </Link>
      </Box>
      <ProductDetails product={product} />
    </>
  );
};

export default Prodcut;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchProductData();

  return {
    paths: data.map((product: Product) => ({ params: { id: String(product.id) } })),
    fallback: false,
  };
};

export const getStaticProps:GetStaticProps = async (context:any)=>{
  let {params:{id}} = context;
  let product = await fetchProductDataItem(id);
  return {
    props: {
      product
    }
  }
}
