import { useState, useEffect, useCallback, memo, useMemo } from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Select,
  Input,
  VStack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import pic1 from "../assets/products/pic1.jpg";
import pic2 from "../assets/products/pic2.jpg";
import pic3 from "../assets/products/pic3.jpg";
import pic4 from "../assets/products/pic4.jpg";
import pic5 from "../assets/products/pic5.jpg";
import pic6 from "../assets/products/pic6.jpg";
import pic7 from "../assets/products/pic7.jpg";
import pic8 from "../assets/products/pic8.jpg";
import pic9 from "../assets/products/pic9.jpg";
import pic10 from "../assets/products/pic10.jpg";
import pic11 from "../assets/products/pic11.jpg";
import pic12 from "../assets/products/pic12.jpg";
import pic13 from "../assets/products/pic13.jpg";
import pic14 from "../assets/products/pic14.jpg";
import pic15 from "../assets/products/pic15.jpg";
import pic16 from "../assets/products/pic16.jpg";

// Sample products data
const products = [
  { id: 1, name: "Almonds", price: 499, category: "Nuts", image: pic1 },
  { id: 2, name: "Cashews", price: 599, category: "Nuts", image: pic2 },
  { id: 3, name: "Walnuts", price: 699, category: "Nuts", image: pic3 },
  { id: 4, name: "Pistachios", price: 799, category: "Nuts", image: pic4 },
  { id: 5, name: "Raisins", price: 399, category: "Dried Fruits", image: pic5 },
  { id: 6, name: "Dates", price: 499, category: "Dried Fruits", image: pic6 },
  { id: 7, name: "Figs", price: 599, category: "Dried Fruits", image: pic7 },
  { id: 8, name: "Apricots", price: 699, category: "Dried Fruits", image: pic8 },
  { id: 9, name: "Hazelnuts", price: 899, category: "Nuts", image: pic9 },
  { id: 10, name: "Pine Nuts", price: 999, category: "Nuts", image: pic10 },
  { id: 11, name: "Brazil Nuts", price: 799, category: "Nuts", image: pic11 },
  { id: 12, name: "Macadamia Nuts", price: 1299, category: "Nuts", image: pic12 },
  { id: 13, name: "Pecans", price: 1099, category: "Nuts", image: pic13 },
  { id: 14, name: "Cranberries", price: 499, category: "Dried Fruits", image: pic14 },
  { id: 15, name: "Prunes", price: 599, category: "Dried Fruits", image: pic15 },
  { id: 16, name: "Goji Berries", price: 899, category: "Dried Fruits", image: pic16 },
  { id: 17, name: "Blueberries", price: 699, category: "Dried Fruits", image: pic1 },
  { id: 18, name: "Cherries", price: 799, category: "Dried Fruits", image: pic2 },
  { id: 19, name: "Mango Slices", price: 499, category: "Dried Fruits", image: pic3 },
  { id: 20, name: "Pineapple Chunks", price: 599, category: "Dried Fruits", image: pic4 },
  { id: 21, name: "Coconut Flakes", price: 399, category: "Dried Fruits", image: pic5 },
  { id: 22, name: "Banana Chips", price: 299, category: "Dried Fruits", image: pic6 },
  { id: 23, name: "Papaya Chunks", price: 499, category: "Dried Fruits", image: pic7 },
  { id: 24, name: "Kiwi Slices", price: 699, category: "Dried Fruits", image: pic8 },
  { id: 25, name: "Peaches", price: 799, category: "Dried Fruits", image: pic9 },
  { id: 26, name: "Apples", price: 499, category: "Dried Fruits", image: pic10 },
  { id: 27, name: "Pears", price: 599, category: "Dried Fruits", image: pic11 },
  { id: 28, name: "Strawberries", price: 899, category: "Dried Fruits", image: pic12 },
  { id: 29, name: "Raspberries", price: 999, category: "Dried Fruits", image: pic13 },
  { id: 30, name: "Blackberries", price: 899, category: "Dried Fruits", image: pic14 },
  { id: 31, name: "Guava Slices", price: 499, category: "Dried Fruits", image: pic15 },
  { id: 32, name: "Jackfruit Chips", price: 699, category: "Dried Fruits", image: pic16 },
  { id: 33, name: "Dragon Fruit Slices", price: 1299, category: "Dried Fruits", image: pic1 },
  { id: 34, name: "Star Fruit Slices", price: 899, category: "Dried Fruits", image: pic2 },
  { id: 35, name: "Mulberries", price: 799, category: "Dried Fruits", image: pic3 },
  { id: 36, name: "Currants", price: 499, category: "Dried Fruits", image: pic4 },
  { id: 37, name: "Elderberries", price: 699, category: "Dried Fruits", image: pic5 },
  { id: 38, name: "Golden Raisins", price: 599, category: "Dried Fruits", image: pic6 },
  { id: 39, name: "Sultanas", price: 499, category: "Dried Fruits", image: pic7 },
  { id: 40, name: "Dried Apricots", price: 699, category: "Dried Fruits", image: pic8 },
  { id: 41, name: "Dried Figs", price: 799, category: "Dried Fruits", image: pic9 },
  { id: 42, name: "Dried Mango", price: 899, category: "Dried Fruits", image: pic10 },
  { id: 43, name: "Dried Papaya", price: 499, category: "Dried Fruits", image: pic11 },
  { id: 44, name: "Dried Pineapple", price: 599, category: "Dried Fruits", image: pic12 },
  { id: 45, name: "Dried Coconut", price: 399, category: "Dried Fruits", image: pic13 },
  { id: 46, name: "Dried Banana", price: 299, category: "Dried Fruits", image: pic14 },
  { id: 47, name: "Dried Guava", price: 499, category: "Dried Fruits", image: pic15 },
  { id: 48, name: "Dried Kiwi", price: 699, category: "Dried Fruits", image: pic16 },
  { id: 49, name: "Dried Peach", price: 799, category: "Dried Fruits", image: pic1 },
  { id: 50, name: "Dried Pear", price: 599, category: "Dried Fruits", image: pic2 },
];

const ProductCard = memo(
  ({ product, quantity, onIncrement, onDecrement, onAddToCart }) => {
    return (
      <VStack
        bg="white"
        p={4}
        borderRadius="lg"
        border="1px solid black"
        boxShadow="dark-lg"
        spacing={3}
        _hover={{ boxShadow: "lg", bg: "gray.50" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          boxSize="150px"
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontWeight="bold" color="green.500">
          {product.name}
        </Text>
        <Text fontSize="lg" color="green.500">
          ₹{product.price}
        </Text>
        {/* Quantity Controls */}
        <HStack spacing={2}>
          <Button size="sm" onClick={() => onDecrement(product.id)}>
            -
          </Button>
          <Text>{quantity}</Text>
          <Button size="sm" onClick={() => onIncrement(product.id)}>
            +
          </Button>
        </HStack>
        <Button
          bg="green.500"
          color="white"
          leftIcon={<FaShoppingCart />}
          onClick={() => onAddToCart(product, quantity)}
          _hover={{ bg: "green.600" }}
        >
          Add to Cart
        </Button>
      </VStack>
    );
  },
  (prevProps, nextProps) => prevProps.quantity === nextProps.quantity
);

const Product = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const toast = useToast();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const initialQuantities = {};
    products.forEach((product) => {
      initialQuantities[product.id] = 0;
    });
    setQuantities(initialQuantities);
  }, []);

  const handleIncrement = useCallback((id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }, []);

  const handleDecrement = useCallback((id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1),
    }));
  }, []);

  const addToCart = useCallback(
    (product, currentQty) => {
      const quantityToAdd = currentQty || 0;

      if (quantityToAdd === 0) {
        toast({
          title: "Quantity is zero",
          description: "Please select a quantity greater than zero.",
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        return;
      }

      setCart((prevCart) => {
        const existingIndex = prevCart.findIndex(
          (item) => item.id === product.id
        );
        let newCart;
        if (existingIndex >= 0) {
          newCart = prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantityToAdd }
              : item
          );
        } else {
          newCart = [...prevCart, { ...product, quantity: quantityToAdd }];
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        // Dispatch a custom event so Header can update its count
        window.dispatchEvent(new Event("cartUpdated"));
        return newCart;
      });

      toast({
        title: "Added to Cart!",
        description: `${product.name} (Qty: ${quantityToAdd}) has been added.`,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });

      setQuantities((prev) => ({ ...prev, [product.id]: 0 }));
    },
    [toast]
  );

  const removeFromCart = useCallback(
    (id) => {
      setCart((prevCart) => {
        const newCart = prevCart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        // Dispatch event after removal as well
        window.dispatchEvent(new Event("cartUpdated"));
        return newCart;
      });
      toast({
        title: "Removed from Cart!",
        description: "Product has been removed.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    },
    [toast]
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((product) => (filter ? product.category === filter : true))
      .sort((a, b) =>
        sort === "low-to-high"
          ? a.price - b.price
          : sort === "high-to-low"
          ? b.price - a.price
          : 0
      );
  }, [search, filter, sort]);

  return (
    <Box
      maxW="100vw"
      mx="auto"
      py={10}
      px={{ base: 4, md: 8, lg: 24 }}
      bg="white"
    >
      {/* Search and Filters */}
      <HStack spacing={4} mb={6} justify="center" flexWrap="wrap">
        <Input
          placeholder="Search Dry Fruits..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          maxW="300px"
          bg="white"
          color="black"
        />
        <Select
          placeholder="Filter by Category"
          onChange={(e) => setFilter(e.target.value)}
          maxW="200px"
          bg="white"
          color="black"
          sx={{
            "& option": {
              bg: "black",
              color: "white",
            },
          }}
        >
          <option value="Nuts">Nuts</option>
          <option value="Dried Fruits">Dried Fruits</option>
        </Select>
        <Select
          placeholder="Sort by Price"
          onChange={(e) => setSort(e.target.value)}
          maxW="200px"
          bg="white"
          color="black"
          sx={{
            "& option": {
              bg: "black",
              color: "white",
            },
          }}
        >
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </Select>
      </HStack>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6}
      >
        {filteredProducts.map((product) => {
          const currentQty = quantities[product.id] || 0;
          return (
            <ProductCard
              key={product.id}
              product={product}
              quantity={currentQty}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onAddToCart={addToCart}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Product;
