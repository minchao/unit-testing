import { Container } from 'typedi';
import UserNotLoggedInException from '../../../src/di/exception/UserNotLoggedInException';
import TripDAO from '../../../src/di/trip/refactoring/03-remove-trip-dao/TripDAO';
import TripService from '../../../src/di/trip/refactoring/03-remove-trip-dao/TripService06';
import Trip from '../../../src/di/trip/Trip';
import { User } from '../../../src/di/user/refactoring/03-remove-trip-dao/User';
import { MockTripDAO } from './MockTripDAO';

describe('Trip Service', () => {

  const guest: User | null = null;
  const unusedUser: User | null = null;
  const registeredUser: User = new User();
  const otherUser: User = new User();

  it('should_Throw_Exception_When_User_Is_Not_LoggedIn', () => {
    const tripService: TripService = Container.get(TripService);

    expect(() => { tripService.getTripsByUser(unusedUser, guest); }).toThrowError(UserNotLoggedInException);
  });

  it('should_Not_Return_Trips_When_Logged_User_Are_Not_Friend', () => {
    const tripService: TripService = Container.get(TripService);

    const friend: User = new User();
    friend.addFriend(otherUser);
    friend.addTrip(new Trip());

    expect(tripService.getTripsByUser(friend, registeredUser).length).toEqual(0);
  });

  it('should_Return_Trips_When_Logged_User_Are_Friend (with DI tool)', () => {
    Container.reset();
    Container.set(TripDAO, new MockTripDAO());
    const tripService: TripService = Container.get(TripService);

    const friend: User = new User();
    friend.addFriend(otherUser);
    friend.addFriend(registeredUser);
    friend.addTrip(new Trip());
    friend.addTrip(new Trip());

    expect(tripService.getTripsByUser(friend, registeredUser).length).toEqual(2);
  });

  it('should_Return_Trips_When_Logged_User_Are_Friend (without DI tool)', () => {
    const tripService: TripService = new TripService(new MockTripDAO());

    const friend: User = new User();
    friend.addFriend(otherUser);
    friend.addFriend(registeredUser);
    friend.addTrip(new Trip());
    friend.addTrip(new Trip());

    expect(tripService.getTripsByUser(friend, registeredUser).length).toEqual(2);
  });
});
