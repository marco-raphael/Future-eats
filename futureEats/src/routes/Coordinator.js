




export const goToHome = (history) => {
    history.push("/home")
}

export const goToLogin = (history) => {
    history.push("/")
}

export const goToSignUp = (history) => {
    history.push("/signUp")
}

export const goToCart = (history) => {
    history.push("/cart")
}

export const goToRestaurant = (history) => {
    history.push("/restaurant/:id")
}

export const goToProfile = (history) => {
    history.push("/profile")
}

export const goToEditProfile = (history) => {
    history.push("/profile/edit")
}

export const goToAdress = (history) => {
    history.push("/adress")
}

export const goToEditAdress = (history) => {
    history.push("/adress/edit")
}