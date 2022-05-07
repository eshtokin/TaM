import { Group } from './../types';
import {createAction } from "@reduxjs/toolkit";


export const createGroupAction = createAction<{name: string}>('CREATE_GROUP')
export const addGroupAction = createAction<Group>('ADD_GROUP')