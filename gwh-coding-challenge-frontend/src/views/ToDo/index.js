import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos, createTodo } from '../../redux/actions/todoActions'
import TodoItem from '../../components/TodoItem'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const TodoListView = () => {
  const dispatch = useDispatch()
  const { todos, loading, error } = useSelector((state) => state.todos)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      due_date: '',
      status: 'new',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(createTodo(values))
      resetForm()
      toggle()
    },
  })

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="container mt-4">
      <h2>Todo List</h2>
      {loading && <p>Loading todos...</p>}
      {error && <p className="text-danger">{error}</p>}
      <Button color="primary" onClick={toggle} className="mb-3">
        Add Todo
      </Button>
      <div>
        {todos && todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Todo</ModalHeader>
        <Form onSubmit={formik.handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
                invalid={formik.touched.title && Boolean(formik.errors.title)}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-danger">{formik.errors.title}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                name="description"
                type="textarea"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </FormGroup>
            <FormGroup>
              <Label for="due_date">Due Date</Label>
              <Input
                id="due_date"
                name="due_date"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.due_date}
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                onChange={formik.handleChange}
                value={formik.values.status}
              >
                <option value="new">New</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Submit
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
}

export default TodoListView
