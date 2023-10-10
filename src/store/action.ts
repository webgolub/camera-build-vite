import { createAction } from '@reduxjs/toolkit';
import { Products } from '../types/product';
import { Promos } from '../types/promo';

export const loadAllProducts = createAction<Products>('product/loadAllProducts');
export const loadAllPromos = createAction<Promos>('promo/loadAllPromo');
