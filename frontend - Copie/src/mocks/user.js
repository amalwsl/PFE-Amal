import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
//import { mockImgAvatar } from '../utils/mockImages';


const users = [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    user: {
        username: faker.name.firstName()+' ' + faker.name.lastName(),
        avatar: ''
      },
    
    
    company: faker.company.companyName(),
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned']),
    role: sample([
      'CEO',
      'Hr Manager',
      'Exhibitions responsible',
      'Head of Communication',
      'PR responsible',
      'Project Manager',
      'Chairman',
      'President',
      'General Director',
      'other'
    ]),
    tag: sample(['aerospace', 'defense','space','robotics','AI','others']),
    type: sample(['exhibitor', 'pro.Visitor','O.Delegation'])
  
  
  }));

export default users;