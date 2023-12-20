import React, { createContext, useReducer, useContext } from 'react';

// Create a context
const ProductContext = createContext();

// Create a reducer function to handle state changes
const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.productId);
    default:
      return state;
  }
};

// Create a provider component to wrap your app with
export const ProductProvider = ({ children }) => {
  const [selectedProducts, dispatch] = useReducer(productReducer, []);

  // Wrap the children components with the context provider
  return (
    <ProductContext.Provider value={{ selectedProducts, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// Create a hook to use the context in components
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
