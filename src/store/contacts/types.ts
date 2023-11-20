import { ContactDto } from 'src/types/dto/ContactDto'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export interface IContactFilters {
  contactName: string
  groupId: string
}

export interface IContactsStateSchema {
  allContacts: ContactDto[]
  favoriteContactsIds: FavoriteContactsDto
  groupContacts: GroupContactsDto[]
  filters: IContactFilters
}
