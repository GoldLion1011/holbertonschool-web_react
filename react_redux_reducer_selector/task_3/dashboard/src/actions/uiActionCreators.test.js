import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('uiActionCreators', () => {
  it('should return an object type UIActions.LOGIN and user when calling login', () => {
    const result = login('  ', '  ');
    expect(result).toEqual({ type: 'LOGIN', user: { email: '  ', password: '  ' } });
  }
  );
  it('should return an object type UIActions.LOGOUT when calling logout', () => {
    const result = logout();
    expect(result).toEqual({ type: 'LOGOUT' });
  }
  );
  it('should return an object type UIActions.DISPLAY_NOTIFICATION_DRAWER when calling displayNotificationDrawer', () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({ type: 'DISPLAY_NOTIFICATION_DRAWER' });
  }
  );
  it('should return an object type UIActions.HIDE_NOTIFICATION_DRAWER when calling hideNotificationDrawer', () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({ type: 'HIDE_NOTIFICATION_DRAWER' });
  }
  );
});
