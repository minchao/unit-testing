import { User } from '../../../src/di/02-remove-user-session/user/User';

describe('User', () => {

  const unusedUser: User | null = null;
  const loggedUser: User = new User();
  const otherUser: User = new User();

  it('should_Not_Return_Trips_When_Logged_User_Are_Not_Friend', () => {
    const aUser: User = new User();

    aUser.addFriend(otherUser);
    aUser.addFriend(unusedUser);

    expect(aUser.isFriendsWith(loggedUser)).toBe(false);
  });

  it('should_Return_True_When_Logged_User_Are_Friend', () => {
    const aUser: User = new User();

    aUser.addFriend(otherUser);
    aUser.addFriend(loggedUser);

    expect(aUser.isFriendsWith(loggedUser)).toBe(true);
  });
});
