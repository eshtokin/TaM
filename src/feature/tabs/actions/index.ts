import { createAction } from '@reduxjs/toolkit';
import { Tab } from 'src/core/types';

export const loadCurrentTabsAction = createAction('LOAD_CURRENT_TABS')
export const setCurrentTabsAction = createAction<Tab[]>('SET_CURRENT_TABS')