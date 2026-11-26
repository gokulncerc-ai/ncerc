# ncerc-admin

Admin portal for the NCERC website (news & events).

```
ncerc-admin/
├── backend/    Express + TypeScript + MongoDB REST API   (this step)
└── frontend/   Next.js admin web portal                  (next step)
```

## Run the backend

```bash
docker compose up -d                 # optional: local MongoDB
cd backend
cp .env.example .env                 # then edit values (JWT_ACCESS_SECRET especially)
npm install
npm run seed:super-admin             # creates the first super admin from SEED_SUPER_ADMIN_* in .env
npm run dev                          # http://localhost:5000  (health: /health)
```

## Who can do what (edit `backend/src/constants/permissions.ts`)

| Action                               | Super admin | Admin         |
|--------------------------------------|:-----------:|:-------------:|
| Add / approve / suspend / remove admins | yes      | no            |
| Create news / events                 | yes         | yes           |
| View all events in the admin list    | yes         | yes           |
| Edit / publish / delete an event     | any         | only their own|
| See createdBy / updatedBy            | yes         | no            |

## API summary

- `/api/auth` – signup, login, logout, refresh, forgot-password, reset-password/:token, google, facebook, me (GET/PATCH), me/password
- `/api/admins` – super admin only: list, create, `:id/approve`, `:id/suspend`, delete
- `/api/events` – list (type, status, when, search, mine, page, limit), create, `:id`, update, `:id/status`, delete
- `/api/uploads/image` – multipart field `image`
- `/api/dashboard/stats`
- `/api/public/events` and `/api/public/events/:slug` – no login, published only (used by ncerc-next)

Auth model: short-lived access token (JSON, send as `Authorization: Bearer`) + rotating refresh token in an httpOnly cookie (`ncerc_rt`, path `/api/auth`).
