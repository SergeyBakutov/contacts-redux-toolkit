import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'

import { IContactFilters, IContactsStateSchema } from './types'

const initialState: IContactsStateSchema = {
  allContacts: DATA_CONTACT,
  favoriteContactsIds: [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ],
  groupContacts: DATA_GROUP_CONTACT,
  filters: {
    contactName: '',
    groupId: '',
  },
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IContactFilters>) => {
      state.filters = action.payload
    },
  },
})

export const { reducer: contactsReducer, actions: contactsActions } =
  contactsSlice
