import { createAction } from '@reduxjs/toolkit';
import { Products } from '../types/product';

export const loadAllProducts = createAction<Products>('product/loadAllProducts');
