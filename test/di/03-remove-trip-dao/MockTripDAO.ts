import TripDAO from '../../../src/di/trip/refactoring/03-remove-trip-dao/TripDAO';
import Trip from '../../../src/di/trip/Trip';
import { User } from '../../../src/di/user/refactoring/03-remove-trip-dao/User';

export class MockTripDAO extends TripDAO {

  public findTripsByUser(user: User): Trip[] {
    return user.getTrips();
  }

}
