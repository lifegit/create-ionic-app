import React from "react";
import {HashRouter,BrowserRouter, Redirect, Route} from "react-router-dom";
import Loadable from 'react-loadable'

export interface Options{
  path: string;
  layout?: string;
  redirect?: string
  component?: string;
  routes?: Array<Options>;

  title?: any;
  icon?: any;
  activeIcon?: any;
}

const Loading = ()=> <div>Loading...</div>

const renderRouter = (data: Options[], type: string)=>{
  const router = render(data,[])
  return type === 'hash' ? <HashRouter>{router}</HashRouter> : <BrowserRouter>{router}</BrowserRouter>
}

const render = (data:Options[], fatherRouters: Array<Options>) => {
  let routerList: any[] = []
  data.map((item:Options) => {
    if (item?.redirect){
      return (
        <Route exact key={item.path} path={item.path}>
          <Redirect to={item.redirect} />
        </Route>
      )
    }

    if (Array.isArray(item?.routes)) {
      const items:Options[] = !item.layout ? item.routes : item.routes.map(it => ({...it,layout: item.layout}))
      return render(items, item.routes)
    }

    return renderRouterPage(item, fatherRouters)
  }).map(item => routerList = routerList.concat( Array.isArray(item) ? [...item]: item ) )

  return routerList
}

const renderRouterPage = (data:Options, fatherRouters?: Array<Options>)=>{
  const AsyncComponent = Loadable({
    delay: 1000,
    loading: Loading,
    loader: () => import(`../../pages/${data.component}/index`),
    render(loaded, props) {
      const Component = loaded.default;
      return data.layout ?  renderRouterLayout(data.layout, <Component {...props}/>, fatherRouters) : <Component {...props}/>
     }
   });

  return <Route exact key={data.path} path={data.path} component={AsyncComponent} />
}

const renderRouterLayout = (name: string, children:React.ReactNode, fatherRouters?: Array<Options>)=>{
  const AsyncLayout = Loadable({
    delay: 1000,
    loading: Loading,
    loader: () => import(`../../layouts/${name}`),
    render(loaded, props) {
      const Layout = loaded.default;
      return <Layout routers={fatherRouters}>{children}</Layout>
    }
  });

  return <AsyncLayout />
}


export default renderRouter