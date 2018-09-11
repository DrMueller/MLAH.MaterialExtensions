import { Individual } from '../models';

export class IndividualRepositoryService {
  public loadAll(): Individual[] {
    return [
      <Individual>{
        emailAddress: 'test@gmx.ch',
        firstName: 'John',
        id: 'a123',
        lastName: 'Wayne'
      },
      <Individual>{
        emailAddress: 'drmueller@live.de',
        firstName: 'Matthias',
        id: 'a321',
        lastName: 'Müller'
      },
      <Individual>{
        emailAddress: 'fakeemail@gmx.ch',
        firstName: 'Joe',
        id: 'a444',
        lastName: 'Doe'
      },
    ];
  }
}
