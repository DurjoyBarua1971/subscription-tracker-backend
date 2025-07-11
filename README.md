# Subscription Tracker

## Route Documentation

### 1. `auth.routes.js`

#### POST `/api/v1/auth/sign-up`
- **Description:** Register a new user.
- **Body:** `{ name, email, password }`
- **Response:** User object and JWT token.

#### POST `/api/v1/auth/sign-in`
- **Description:** Authenticate user and return JWT token.
- **Body:** `{ email, password }`
- **Response:** User object and JWT token.

#### POST `/api/v1/auth/sign-out`
- **Description:** Sign out the user.
- **Response:** Success message.

---

### 2. `user.routes.js`
> All routes require authentication.

#### GET `/api/v1/users/`
- **Description:** Get all user profiles.
- **Response:** Array of user objects.

#### GET `/api/v1/users/:id`
- **Description:** Get a user profile by ID.
- **Response:** User object.

#### POST `/api/v1/users/`
- **Description:** Create a new user.
- **Body:** `{ name, email, password }`
- **Response:** Created user object.

#### PUT `/api/v1/users/:id`
- **Description:** Update user profile (only own profile).
- **Body:** Fields to update.
- **Response:** Updated user object.

#### DELETE `/api/v1/users/:id`
- **Description:** Delete user account (only own account).
- **Response:** Deleted user object.

---

### 3. `subscription.routes.js`
> All routes require authentication.

#### GET `/api/v1/subscriptions/`
- **Description:** Get all subscriptions for authenticated user.
- **Response:** Array of subscriptions.

#### GET `/api/v1/subscriptions/upcoming-renewals?days=7`
- **Description:** Get subscriptions with renewal dates in the next N days (default 7).
- **Response:** Array of subscriptions.

#### GET `/api/v1/subscriptions/:id`
- **Description:** Get a subscription by ID.
- **Response:** Subscription object.

#### POST `/api/v1/subscriptions/`
- **Description:** Create a new subscription.
- **Body:** Subscription fields.
- **Response:** Created subscription and workflow run ID.

#### PUT `/api/v1/subscriptions/:id`
- **Description:** Update a subscription.
- **Body:** Fields to update.
- **Response:** Updated subscription object.

#### DELETE `/api/v1/subscriptions/:id`
- **Description:** Delete a subscription.
- **Response:** Deleted subscription object.

#### GET `/api/v1/subscriptions/user/:id`
- **Description:** Get all subscriptions for a specific user (only own).
- **Response:** Array of subscriptions.

#### PUT `/api/v1/subscriptions/:id/cancel`
- **Description:** Cancel a subscription.
- **Response:** Updated subscription object.

---

### 4. `workflow.routes.js`

#### POST `/api/v1/workflows/subscription/reminder`
- **Description:** Trigger reminders for subscription renewal.
- **Body:** `{ subscriptionId }`
- **Response:** None (workflow logic).

---

## Feature List

- **User Authentication:** Sign up, sign in, sign out with JWT.
- **User Profile Management:** View, create, update, delete user profiles (self only).
- **Subscription Management:** Create, view, update, delete, and cancel subscriptions.
- **Upcoming Renewals:** View subscriptions with renewals in the next N days.
- **User Subscriptions:** View all subscriptions for a specific user (self only).
- **Automated Reminders:** Workflow for sending subscription renewal reminders.
- **Security:** Arcjet middleware for rate limiting and bot detection.
- **Error Handling:** Centralized error middleware for consistent error responses.
- **Environment Configuration:** Support for development and production environments via `.env` files.
- **Database Integration:** MongoDB with Mongoose for data persistence.
- **Request Logging:** (Morgan dependency included, can be enabled for logging requests).

---

### Referenced files

- `auth.routes.js`
- `user.routes.js`
- `subscription.routes.js`
- `workflow.routes.js`
