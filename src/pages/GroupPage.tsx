import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { getContactsGroup, getGroupById } from 'src/store/contacts'
import { useAppSelector } from 'src/store/hooks'

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>()
  const group = useAppSelector((state) => getGroupById(state, groupId))
  const groupContacts = useAppSelector((state) =>
    getContactsGroup(state, groupId)
  )

  return (
    <Row className="g-4">
      {group ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={group} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {groupContacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
})
