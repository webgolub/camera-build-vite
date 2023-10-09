import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Products } from '../types/product';
import { loadAllProducts } from './action';
import { APIRoute } from '../const';

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
