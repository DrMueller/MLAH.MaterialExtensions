import { Individual } from '../models';

export class IndividualRepositoryService {
  public loadAll(): Individual[] {
    return [
      <Individual>{
        emailAddress: 'test@gmx.ch',
        firstName: 'John',
        id: 123,
        lastName: 'Wayne'
      },
      <Individual>{
        emailAddress: 'drmueller@live.de',
        firstName: 'Matthias',
        id: 321,
        lastName: 'Müller'
      },
      <Individual>{
        emailAddress: 'fakeemail@gmx.ch',
        firstName: 'Joe',
        id: 444,
        lastName: 'Doe'
      },
    ];
  }
}
