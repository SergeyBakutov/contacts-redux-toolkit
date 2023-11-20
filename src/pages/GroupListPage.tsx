import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'

import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { getGroupContacts } from 'src/store/contacts'
import { useAppSelector } from 'src/store/hooks'

export const GroupListPage = memo(() => {
  const groupContacts = useAppSelector(getGroupContacts)

  return (
    <Row xxl={4}>
      {groupContacts.map((group) => (
        <Col key={group.id}>
          <GroupContactsCard groupContacts={group} withLink />
        </Col>
      ))}
    </Row>
  )
})
