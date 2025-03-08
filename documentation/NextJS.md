# Next JS
We are developing this app using the NextJS react framework. Whenever making an app with NextJS, there are some important considerations.

## Server-Side Rendering
NextJS supports a suite of server-side rendering tools. This allows pages to be loaded much quicker. It also the ability to hide sensitive data from the client's browser. This includes API-keys, environment variables, and much more. Here is a good rule of thumb when developing, to ensure that you are utilizing server-side components properly.
| **Component Type**                              | **Keep as Server Component?** |
|------------------------------------------------|------------------------------|
| **Fetching data (DB, APIs)**                   | ✅ Yes                       |
| **Authentication (sessions, tokens)**         | ✅ Yes                       |
| **Database queries (Prisma, MySQL, MongoDB)**  | ✅ Yes                       |
| **Environment variables (`process.env`)**      | ✅ Yes                       |
| **Heavy computations**                         | ✅ Yes                       |
| **Static page content**                        | ✅ Yes                       |
| **UI elements that require `useState` or `useEffect`** | ❌ No (Needs Client Component) |
| **Forms, buttons, modals, animations**        | ❌ No (Needs Client Component) |
There is a strong urge to make everything use regular react hooks like useState and useEffect. However, I must suggest away from that, because this can cause sensitive data to leak.