import { Container } from 'typedi';
import UserNotLoggedInException from '../../../src/di/03-remove-trip-dao/exception/UserNotLoggedInException';
import TripDAO from '../../../src/di/03-remove-trip-dao/trip/TripDAO';
import TripService from '../../../src/di/03-remove-trip-dao/trip/TripService06';
import Trip from '../../../src/di/03-remove-trip-dao/trip/Trip';
import { User } from '../../../src/di/03-remove-trip-dao/user/User';
import { MockTripDAO } from './MockTripDAO';

describe('Trip Service', () => {

  const guest: User | null = null;
  const unusedUser: User | null = null;
  const registeredUser: User = new User();
  const otherUser: User = new User();

  it('should_Throw_Exception_When_User_Is_Not_LoggedIn', () => {
    const tripService: TripService = new TripService(new MockTripDAO());

    expect(() => { tripService.getTripsByUser(unusedUser, guest); }).toThrowError(UserNotLoggedInException);
  });

  it('should_Not_Return_Trips_When_Logged_User_Are_Not_Friend', () => {
    const tripService: TripService = new TripService(new MockTripDAO());

    const aUser: User = new User();
    aUser.addFriend(otherUser);
    aUser.addTrip(new Trip());

    expect(tripService.getTripsByUser(aUser, registeredUser).length).toEqual(0);
  });

  it('should_Return_Trips_When_Logged_User_Are_Friend', () => {
    const tripService: TripService = new TripService(new MockTripDAO());

    const aUser: User = new User();
    aUser.addFriend(otherUser);
    aUser.addFriend(registeredUser);
    aUser.addTrip(new Trip());
    aUser.addTrip(new Trip());

    expect(tripService.getTripsByUser(aUser, registeredUser).length).toEqual(2);
  });

  it('should_Return_Trips_When_Logged_User_Are_Friend (with DI tool)', () => {
    Container.reset();
    Container.set(TripDAO, new MockTripDAO());
    const tripService: TripService = Container.get(TripService);

    const aUser: User = new User();
    aUser.addFriend(otherUser);
    aUser.addFriend(registeredUser);
    aUser.addTrip(new Trip());
    aUser.addTrip(new Trip());

    expect(tripService.getTripsByUser(aUser, registeredUser).length).toEqual(2);
  });
});
