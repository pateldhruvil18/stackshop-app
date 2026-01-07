import { createRouter, Link } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {
      queryClient : new QueryClient(),
    },

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload : 'intent', //preload on intent all links
    defaultNotFoundComponent : () => {
    return(
      <div>
         <p>Not Found page</p>
         <Link to ='/' className='px-4 py-2 bg-slate-900 border text-white rounded-2xl mt-2'>Go home</Link>
      </div>
    )
  }
  })

  return router
}
