module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  admin: process.env.NODE_ENV === 'production' ? process.env.ADMIN : 'admin',
  mailer: {
    server_user: process.env.SERVER_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
    receiver_user: process.env.RECEIVER_USER
  }
};

