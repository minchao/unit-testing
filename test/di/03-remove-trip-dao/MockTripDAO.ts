import TripDAO from '../../../src/di/03-remove-trip-dao/trip/TripDAO';
import Trip from '../../../src/di/03-remove-trip-dao/trip/Trip';
import { User } from '../../../src/di/03-remove-trip-dao/user/User';

export class MockTripDAO extends TripDAO {

  public findTripsByUser(user: User): Trip[] {
    return user.getTrips();
  }

}
