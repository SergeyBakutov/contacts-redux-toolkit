import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'

import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import {
  contactsActions,
  getFilterContacts,
  getGroupContacts,
} from 'src/store/contacts'

import { useAppDispatch, useAppSelector } from 'src/store/hooks'

export const ContactListPage = memo(() => {
  const groupContacts = useAppSelector(getGroupContacts)
  const filterContacts = useAppSelector(getFilterContacts)
  const dispatch = useAppDispatch()

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    dispatch(
      contactsActions.setFilters({
        contactName: fv.name ?? '',
        groupId: fv.groupId ?? '',
      })
    )
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupContacts}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filterContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
