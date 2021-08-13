import { uuid } from './utils'

export default {
  name: 'shop',
  list: [
    { 
      name: 'to do', 
      id: uuid(),
      tasks: [
        { id: uuid(), name: 'Задача 1', desc: 'Описание' }, 
        { id: uuid(), name: 'Задача 2', desc: 'Описание' }
      ] 
    }, 
    { 
      name: 'in progress',
      id: uuid(),
      tasks: [
        { id: uuid(), name: 'Задача 3', desc: 'Описание' }
      ] 
    },
    { 
      name: 'done', 
      id: uuid(),
      tasks: [] 
    }
  ]
}
