import { Service } from 'typedi';
import UserNotLoggedInException from '../../exception/UserNotLoggedInException';
import { User } from '../../user/refactoring/User01';
import Trip from '../Trip';
import TripDAO from './TripDAO02';

@Service()
export default class TripService {

  private tripDao: TripDAO;

  public constructor(tripDao: TripDAO) {
    this.tripDao = tripDao;
  }

  public getTripsByUser(user: User, loggedUser: User | null): Trip[] {
    this.validateLoggedUser(loggedUser);

    return user.isFriendsWith(loggedUser)
      ? this.tripByUser(user)
      : [];
  }

  protected validateLoggedUser(loggedUser: User): void {
    if (loggedUser == null) {
      throw new UserNotLoggedInException();
    }
  }

  protected tripByUser(user: User): Trip[] {
    return this.tripDao.findTripsByUser(user);
  }
}
