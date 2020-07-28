import UserNotLoggedInException from '../../exception/UserNotLoggedInException';
import { User } from '../../user/User';
import UserSession from '../../user/UserSession';
import Trip from '../Trip';
import TripDAO from '../TripDAO';

export default class TripService {
  public getTripsByUser(user: User, loggedUser: User | null): Trip[] {
    if (loggedUser == null) {
      throw new UserNotLoggedInException();
    }

    let isFriend = false;
    for (const friend of user.getFriends()) {
      if (friend === loggedUser) {
        isFriend = true;
        break;
      }
    }

    let tripList: Trip[] = [];
    if (isFriend) {
      tripList = this.tripByUser(user);
    }

    return tripList;
  }

  protected tripByUser(user: User): Trip[] {
    return TripDAO.findTripsByUser(user);
  }

  protected getLoggedUser(): User | null {
    const loggedUser: User = UserSession.getLoggedUser();
    return loggedUser;
  }
}
