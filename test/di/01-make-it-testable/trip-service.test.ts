import UserNotLoggedInException from '../../../src/di/01-make-it-testable/exception/UserNotLoggedInException';
import TripService from '../../../src/di/01-make-it-testable/trip/TripService02';
import { User } from '../../../src/di/01-make-it-testable/user/User';
import Trip from '../../../src/di/01-make-it-testable/trip/Trip';

describe('Trip Service', () => {
  xit('first attempt', () => {
    const tripService: TripService = new TripService();

    expect(() => { tripService.getTripsByUser(null); }).toThrowError(UserNotLoggedInException);
  });

  xit('should_Throw_Exception_When_User_Is_Not_LoggedIn', () => {
    // fill the missing code
  });

  xit('should_Not_Return_Trips_When_Logged_User_Are_Not_Friend', () => {
    // fill the missing code
  });

  xit('should_Return_Trips_When_Logged_User_Are_Friend', () => {
    // fill the missing code
  });
});
