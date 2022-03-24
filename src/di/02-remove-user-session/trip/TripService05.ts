import UserNotLoggedInException from '../exception/UserNotLoggedInException';
import { User } from '../user/User';
import Trip from './Trip';
import TripDAO from './TripDAO';

export default class TripService {
  public getTripsByUser(user: User, loggedUser: User): Trip[] {
    if (loggedUser === null) {
      throw new UserNotLoggedInException();
    }

    // 原本行為被搬到 User 類別去了
    return user.isFriendsWith(loggedUser)
      ? this.tripByUser(user)
      : [];
  }

  protected tripByUser(user: User): Trip[] {
    return TripDAO.findTripsByUser(user);
  }

  // 刪掉用不到的 getLoggedUser() 方法
}
