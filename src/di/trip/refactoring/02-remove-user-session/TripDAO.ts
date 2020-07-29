import CollaboratorCallException from '../../../exception/CollaboratorCallException';
import { User } from '../../../user/refactoring/02-remove-user-session/User';
import Trip from '../../Trip';

export default class TripDAO {
  public static findTripsByUser(user: User): Trip[] {
    throw new CollaboratorCallException('TripDAO should not be invoked on an unit test.');
  }
}
