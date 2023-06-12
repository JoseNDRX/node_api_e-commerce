const isAdmin = (req, res, next) => {
  const { username, rolId } = req.user;
  if (rolId !== 3) {
    return next({
      status: 401,
      name: "No admin",
      message: `Sorry ${username} only admins can access here`,
    });
  }
  next();
};

const hasRoles = (...roles) => {
  return (req, res, next) => {
    const { rolId } = req.user;
    if (!roles.includes(rolId)) {
      next({
        status: 401,
        name: "Role required",
        message: `User have not required role`,
      });
    }
    next();
  };
};

module.exports = {
  isAdmin,
  hasRoles
};