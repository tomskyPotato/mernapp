const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://user2:1234@ds125938.mlab.com:25938/reactjs',
  mongoURLlocal: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
};

export default config;
