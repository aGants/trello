import { uuid } from './utils'

export default {
  name: 'store',
  list: [
    { 
      name: 'to do', 
      edit: false,
      tasks: [
        { id: uuid(), name: 'Задача 1', desc: 'Описание', edit: false }, 
        { id: uuid(), name: 'Задача 2', desc: 'Описание', edit: false }
      ] 
    }, 
    { 
      name: 'in progress',
      edit: false,
      tasks: [
        { id: uuid(), name: 'Задача 3', desc: 'Описание', edit: false }
      ] 
    },
    { 
      name: 'done', 
      edit: false,
      tasks: [] 
    }
  ]
}
