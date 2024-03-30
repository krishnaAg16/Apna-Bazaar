import { handleAuth } from '@auth0/nextjs-auth0';
// import dynamic from 'next/dynamic'
 
// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })
<suppressHydrationWarning/>
export const GET = handleAuth();