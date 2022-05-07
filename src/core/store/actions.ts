import { Group, CreateGroupPayload } from './../types';
import {createAction } from "@reduxjs/toolkit";


export const createGroupAction = createAction<CreateGroupPayload>('CREATE_GROUP')
export const addGroupAction = createAction<Group>('ADD_GROUP')