import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const adidasi = [
      { id: 11, name: 'Furylite JR' },
      { id: 12, name: 'Reebok Classic' },
      { id: 13, name: 'Asics Gel Kayano' },
      {id:14, name:'Nike Cortez'},
      {id:15, name:'Adidas 350'}
    ];
    return {adidasi};
  }
}