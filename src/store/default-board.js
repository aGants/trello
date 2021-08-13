import { uuid } from './utils'

export default {
  name: 'shop',
  list: [
    { 
      name: 'to do', 
      edit: false,
      tasks: [
        { id: uuid(), name: 'Задача 1', desc: 'Описание' }, 
        { id: uuid(), name: 'Задача 2', desc: 'Описание' }
      ] 
    }, 
    { 
      name: 'in progress',
      edit: false,
      tasks: [
        { id: uuid(), name: 'Задача 3', desc: 'Описание' }
      ] 
    },
    { 
      name: 'done', 
      edit: false,
      tasks: [] 
    }
  ]
}
