import { createReducer } from '@reduxjs/toolkit';
import { Products } from '../types/product';
import { loadAllProducts } from './action';
import { fetchAllProductsAction } from './api-action';

type initialState = {
  allProducts: Products;
  AllProductsDataLoadingStatus: boolean;
};

const initialState: initialState = {
  allProducts: [],
  AllProductsDataLoadingStatus: true
};

export const reducer = createReducer (initialState, (builder) => {
  builder
    .addCase(loadAllProducts, (state, action) => {
      state.allProducts = action.payload;
    })
    .addCase(fetchAllProductsAction.pending, (state) => {
      state.AllProductsDataLoadingStatus = true;
    })
    .addCase(fetchAllProductsAction.fulfilled, (state) => {
      state.AllProductsDataLoadingStatus = false;
    });
});
