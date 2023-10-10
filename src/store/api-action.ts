import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Products } from '../types/product';
import { loadAllProducts, loadAllPromos } from './action';
import { APIRoute } from '../const';
import { Promos } from '../types/promo';

export const fetchAllProductsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
 }>(
   'quests/fetchAllQuests',
   async (_arg, {dispatch, extra: api}) => {
     const {data} = await api.get<Products>(APIRoute.Cameras);
     dispatch(loadAllProducts(data));
   }
 );

export const fetchAllPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
 }>(
   'quests/fetchAllQuests',
   async (_arg, {dispatch, extra: api}) => {
     const {data} = await api.get<Promos>(APIRoute.Promo);
     dispatch(loadAllPromos(data));
   }
 );
