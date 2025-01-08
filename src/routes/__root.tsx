
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="m-5 flex flex-1 gap-10 space-x-10 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold m-5 p-4 text-blue-',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/about"
          activeProps={{
            className: 'font-bold',
          }}
        >
          About
        </Link>{""}
        <Link
          to="/leaderboard"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Leaderboard
        </Link>{""}
        <Link
          to="/newPoll"
          activeProps={{
            className: 'font-bold',
          }}
        >
          NewPoll
        </Link>
        <Link
          to="/login"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Login
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}

