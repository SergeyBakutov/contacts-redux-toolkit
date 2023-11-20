import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'

import { ContactCard } from 'src/components/ContactCard'
import { getFavoriteContacts } from 'src/store/contacts'
import { useAppSelector } from 'src/store/hooks'

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector(getFavoriteContacts)

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
