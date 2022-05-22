import Router from 'next/router'
import HomeLayout from '~/components/layouts/HomeLayout'

function Redirect(){
  Router.push('/comingsoon')
}
export default function Home() {
    setTimeout(Redirect,3000)
  return (
   <HomeLayout>
    
   </HomeLayout>
  )
}
