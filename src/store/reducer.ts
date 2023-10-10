import { createReducer } from '@reduxjs/toolkit';
import { Products } from '../types/product';
import { loadAllProducts, loadAllPromos } from './action';
import { fetchAllProductsAction } from './api-action';
import { Promos } from '../types/promo';

type initialState = {
  allProducts: Products;
  allPromos: Promos;
  AllProductsDataLoadingStatus: boolean;
};

const initialState: initialState = {
  allProducts: [],
  allPromos: [],
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
    })
    .addCase(loadAllPromos, (state, action) => {
      state.allPromos = action.payload;
    });
});
