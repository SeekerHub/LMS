module.exports = function authorize(allowedRoles) {
    return (req, res, next) => {
      try {
        // Assume `req.user` is populated by an earlier authentication middleware
        if (!req.user) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
  
        const userRole = req.user.role; // Extract role from the authenticated user
  
        if (!allowedRoles.includes(userRole)) {
          return res.status(403).json({ message: 'Forbidden: Insufficient Permissions' });
        }
  
        next(); // Proceed to the next middleware or route handler
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      }
    };
  };