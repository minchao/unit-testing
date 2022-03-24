import UserNotLoggedInException from '../exception/UserNotLoggedInException';
import { User } from '../user/User';
import UserSession from '../user/UserSession';
import Trip from './Trip';
import TripDAO from './TripDAO';

export default class TripService {
  public getTripsByUser(user: User): Trip[] {
    let tripList: Trip[] = [];
    // 這裡有個類似全域變數的 UserSession
    const loggedUser: User = UserSession.getLoggedUser();
    let isFriend = false;

    if (loggedUser != null) {
      for (const friend of user.getFriends()) {
        if (friend === loggedUser) {
          isFriend = true;
          break;
        }
      }

      if (isFriend) {
        // 這裡有個 DAO，實際上可能是接 DB 或呼叫 API
        tripList = TripDAO.findTripsByUser(user);
      }

      return tripList;
    } else {
      throw new UserNotLoggedInException();
    }
  }
}
