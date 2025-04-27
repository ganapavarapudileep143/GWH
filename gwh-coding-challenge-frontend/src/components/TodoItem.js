import React from 'react'
import { Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap'

const TodoItem = ({ todo }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'primary'
      case 'in_progress':
        return 'warning'
      case 'done':
        return 'success'
      default:
        return 'secondary'
    }
  }

  return (
    <Card className="mb-3">
      <CardBody>
        <CardTitle tag="h5">
          {todo.title}{' '}
          <Badge color={getStatusColor(todo.status)}>
            {todo.status.replace('_', ' ')}
          </Badge>
        </CardTitle>
        <CardText>{todo.description}</CardText>
        {todo.due_date && (
          <CardText>
            <small className="text-muted">Due: {todo.due_date}</small>
          </CardText>
        )}
      </CardBody>
    </Card>
  )
}

export default TodoItem
