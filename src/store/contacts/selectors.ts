import { createSelector } from '@reduxjs/toolkit'

import { IStateSchema } from '../store'
import { ContactDto } from 'scripts/src/dto/ContactDto'

const getContactsState = (state: IStateSchema) => state.contacts
export const getAllContacts = createSelector(
  getContactsState,
  (contacts) => contacts.allContacts
)
const getFavoriteContactsIds = createSelector(
  getContactsState,
  (contacts) => contacts.favoriteContactsIds
)
export const getGroupContacts = createSelector(
  getContactsState,
  (contacts) => contacts.groupContacts
)
const getFilters = createSelector(
  getContactsState,
  (contacts) => contacts.filters
)

export const getContactById = createSelector(
  getAllContacts,
  (state: IStateSchema, contactId: string | undefined) => contactId,
  (allContacts, contactId) =>
    contactId ? allContacts.find(({ id }) => id === contactId) : undefined
)
export const getGroupById = createSelector(
  getGroupContacts,
  (state: IStateSchema, groupId: string | undefined) => groupId,
  (groupContacts, groupId) =>
    groupId ? groupContacts.find(({ id }) => id === groupId) : undefined
)

export const getFavoriteContacts = createSelector(
  getAllContacts,
  getFavoriteContactsIds,
  (allContacts, favoriteContactsIds) =>
    allContacts.filter(({ id }) => favoriteContactsIds.includes(id))
)
export const getContactsGroup = createSelector(
  getAllContacts,
  getGroupById,
  (allContacts, group) =>
    group ? allContacts.filter(({ id }) => group.contactIds.includes(id)) : []
)

export const getFilterContacts = createSelector(
  getAllContacts,
  getGroupContacts,
  getFilters,
  (allContacts, groupContacts, filters) => {
    let findContacts: ContactDto[] = allContacts

    const fvName = filters.contactName.toLowerCase()
    findContacts = findContacts.filter(
      ({ name }) => name.toLowerCase().indexOf(fvName) > -1
    )

    const group = groupContacts.find(({ id }) => id === filters.groupId)

    if (group) {
      findContacts = findContacts.filter(({ id }) =>
        group.contactIds.includes(id)
      )
    }

    return findContacts
  }
)
