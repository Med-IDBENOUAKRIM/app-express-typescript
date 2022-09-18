export interface User {
  name: string;
  email: string;
  password: string;
  username: string;
  avatar?: string;
  newMessagePop: boolean;
  unreadMessage: boolean;
  unreadNotification: boolean;
  role: string;
  resetToken: string;
  expireToken: Date;
}
