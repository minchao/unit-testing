import 'reflect-metadata';
import { Service } from 'typedi';
import CollaboratorCallException from '../../exception/CollaboratorCallException';
import { User } from '../../user/refactoring/User01';
import Trip from '../Trip';

@Service()
export default class TripDAO {
  public static findTripsByUser(user: User): Trip[] {
    throw new CollaboratorCallException('TripDAO should not be invoked on an unit test.');
  }

  public findTripsByUser(user: User): Trip[] {
    return TripDAO.findTripsByUser(user);
  }
}
