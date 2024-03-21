import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({index}) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
    <div className="relative top-2">
      <div >
      <img src={`/shirt${index}.jpg`} alt="Placeholder image" className="w-full h-3/4 object-cover p-2 "  style={{ aspectRatio: '2 / 3' }} />
      </div>
      
    </div>
    <div className="p-2">
      <h2 className="text-xl font-semibold mb-1">Heading</h2>
      <p className="text-gray-700 mb-2">Subheading</p>
      <p className="text-blue-600 text-lg">$Price</p>
    </div>
  </div>
  
  
  );
};

export default ProductCard;
