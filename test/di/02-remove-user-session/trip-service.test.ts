import UserNotLoggedInException from '../../../src/di/exception/UserNotLoggedInException';
import Trip from '../../../src/di/trip/Trip';
import TripService from '../../../src/di/trip/refactoring/02-remove-user-session/TripService05';
import { User } from '../../../src/di/user/refactoring/02-remove-user-session/User';

describe('Trip Service', () => {

  const guest: User | null = null;
  const registeredUser: User = new User();
  const otherUser: User = new User();

  it('should_Throw_Exception_When_User_Is_Not_LoggedIn', () => {
    const tripService: TripService = new TestableTripService();

    expect(() => { tripService.getTripsByUser(null, guest); }).toThrowError(UserNotLoggedInException);
  });

  it('should_Not_Return_Trips_When_Logged_User_Are_Not_Friend', () => {
    const tripService: TripService = new TestableTripService();

    const friend: User = new User();
    friend.addFriend(otherUser);
    friend.addTrip(new Trip());

    expect(tripService.getTripsByUser(friend, registeredUser).length).toEqual(0);
  });

  it('should_Return_Trips_When_Logged_User_Are_Friend', () => {
    const tripService: TripService = new TestableTripService();

    const friend: User = new User();
    friend.addFriend(otherUser);
    friend.addFriend(registeredUser);
    friend.addTrip(new Trip());
    friend.addTrip(new Trip());

    expect(tripService.getTripsByUser(friend, registeredUser).length).toEqual(2);
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
