class User {
    constructor(
        firstName,
        lastName,
        age,
        score,
        calories,
        protein,
        carbohydrate,
        lipid
    ) {
        this._firstName = firstName
        this._lastName = lastName
        this._age = age
        this._score = score
        this._calories = calories
        this._protein = protein
        this._carbohydrate = carbohydrate
        this._lipid = lipid
    }

    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }
    get age() {
        return this._age
    }
    get score() {
        return this._score
    }
    get calories() {
        return this._calories
    }
    get protein() {
        return this._protein
    }
    get carbohydrate() {
        return this._carbohydrate
    }
    get lipid() {
        return this._lipid
    }
}

export default User
