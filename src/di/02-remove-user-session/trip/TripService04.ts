import UserNotLoggedInException from '../exception/UserNotLoggedInException';
import { User } from '../user/User';
import UserSession from '../user/UserSession';
import Trip from './Trip';
import TripDAO from './TripDAO';

export default class TripService {
  // 把 loggedUser 變成由參數傳遞進來
  public getTripsByUser(user: User, loggedUser: User): Trip[] {
    if (loggedUser === null) {
      throw new UserNotLoggedInException();
    }

    // 這邊的程式碼，其實應該搬到 User 類別去
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

  // 這個 method 就完全用不到了
  protected getLoggedUser(): User | null {
    const loggedUser: User = UserSession.getLoggedUser();
    return loggedUser;
  }
}
