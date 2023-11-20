import { configureStore } from '@reduxjs/toolkit'

import { IContactsStateSchema, contactsReducer } from './contacts'

export interface IStateSchema {
  contacts: IContactsStateSchema
}

export const store = configureStore<IStateSchema>({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
