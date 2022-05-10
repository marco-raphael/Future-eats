import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import CartPage from '../pages/CartPage/CartPage'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import EditProfilePage from '../pages/EditionPages/EditProfilePage/EditProfilePage'
import AdressPage from '../pages/AdressPage/AdressPage'
import EditAdressPage from '../pages/EditionPages/EditAdressPage/EditAdressPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/home"}>
                    <HomePage />
                </Route>

                <Route exact path={"/"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/signUp"}>
                    <SignUpPage />
                </Route>

                <Route exact path={"/cart"}>
                    <CartPage />
                </Route>

                <Route exact path={"/restaurant/:id"}>
                    <RestaurantPage />
                </Route>

                <Route exact path={"/profile"}>
                    <ProfilePage />
                </Route>

                <Route exact path={"/profile/edit"}>
                    <EditProfilePage />
                </Route>

                <Route exact path={"/adress"}>
                    <AdressPage />
                </Route>

                <Route exact path={"/adress/edit"}>
                    <EditAdressPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router