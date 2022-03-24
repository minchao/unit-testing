import UserNotLoggedInException from '../../../src/di/02-remove-user-session/exception/UserNotLoggedInException';
import Trip from '../../../src/di/02-remove-user-session/trip/Trip';
import TripService from '../../../src/di/02-remove-user-session/trip/TripService05';
import { User } from '../../../src/di/02-remove-user-session/user/User';

describe('Trip Service', () => {

  const guest: User | null = null;
  const unusedUser: User | null = null;
  const registeredUser: User = new User();
  const otherUser: User = new User();

  it('should_Throw_Exception_When_User_Is_Not_LoggedIn', () => {
    const tripService: TripService = new TestableTripService();

    expect(() => { tripService.getTripsByUser(unusedUser, guest); }).toThrowError(UserNotLoggedInException);
  });

  it('should_Not_Return_Trips_When_Logged_User_Are_Not_Friend', () => {
    const tripService: TripService = new TestableTripService();

    const aUser: User = new User();
    aUser.addFriend(otherUser);
    aUser.addTrip(new Trip());

    expect(tripService.getTripsByUser(aUser, registeredUser).length).toEqual(0);
  });

  it('should_Return_Trips_When_Logged_User_Are_Friend', () => {
    const tripService: TripService = new TestableTripService();

    const aUser: User = new User();
    aUser.addFriend(otherUser);
    aUser.addFriend(registeredUser);
    aUser.addTrip(new Trip());
    aUser.addTrip(new Trip());

    expect(tripService.getTripsByUser(aUser, registeredUser).length).toEqual(2);
  });

  class TestableTripService extends TripService {

    // 其實用不到了
    protected getLoggedUser(): User {
      return guest;
    }

    protected tripByUser(user: User): Trip[] {
      return user.getTrips();
    }
  }
});
