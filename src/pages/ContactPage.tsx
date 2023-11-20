import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { getContactById } from 'src/store/contacts'
import { useAppSelector } from 'src/store/hooks'

export const ContactPage: React.FC = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const contact = useAppSelector((state) => getContactById(state, contactId))

  return (
    <Row xxl={3}>
      <Col className="mx-auto">
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
}
