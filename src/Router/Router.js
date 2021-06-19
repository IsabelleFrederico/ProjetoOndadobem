import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AboutUs } from '../Pages/AboutUs/index'
import { Volunteer } from '../Pages/Volunteer/index'
import { Home } from '../Pages/Home'
import { Error } from '../Pages/Error/index'
import { Layout } from "../Components/Layout/Index";

export const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/'
                        children={<Home />} />
                    <Route exact path='/aboutUs'
                        children={<AboutUs />} />
                    <Route exact path='/volunteer'
                        children={<Volunteer />} />
                    <Route
                        children={<Error />} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Router