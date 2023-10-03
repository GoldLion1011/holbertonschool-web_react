import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { NotificationTypeFilters } from "./notificationActionTypes";

describe("notificationActionTypes", () => {
  it("MARK_AS_READ should return an action", () => {
    const action = {
      type: MARK_AS_READ,
      index: 1,
    };
    expect(action).toEqual({
      type: MARK_AS_READ,
      index: 1,
    });
  }
  );
  it("setNotificationFilter should return an action", () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };
    expect(action).toEqual({
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    });
  }
  );
}
);
