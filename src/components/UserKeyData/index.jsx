import React from 'react'
import PropTypes from 'prop-types'

//Css
import './UserKeyData.scss'

//Icon
import energy from '../../assets/fire.svg'
import chicken from '../../assets/chicken.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import apple from '../../assets/apple.svg'

export default function UserKeyData({
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
}) {
    return (
        <div className="container-userInfos">
            <div className="keydata">
                <div className="icon" id="energy">
                    <img src={energy} alt="fire represent energy" />
                </div>
                <div className="content">
                    <p>
                        <strong>{calorieCount}kCal</strong>
                    </p>
                    <p>
                        <em>Calories</em>
                    </p>
                </div>
            </div>
            <div className="keydata">
                <div className="icon" id="chicken">
                    <img src={chicken} alt="chicken leg to represent protein" />
                </div>
                <div className="content">
                    <p>
                        <strong>{proteinCount}g</strong>
                    </p>
                    <p>
                        <em>Proteines</em>
                    </p>
                </div>
            </div>
            <div className="keydata">
                <div className="icon" id="apple">
                    <img src={apple} alt="apple to represent glucides" />
                </div>
                <div className="content">
                    <p>
                        <strong>{carbohydrateCount}g</strong>
                    </p>
                    <p>
                        <em>Glucides</em>
                    </p>
                </div>
            </div>
            <div className="keydata">
                <div className="icon" id="cheeseburger">
                    <img
                        src={cheeseburger}
                        alt="cheeseburger to represent lipid"
                    />
                </div>
                <div className="content">
                    <p>
                        <strong>{lipidCount}g</strong>
                    </p>
                    <p>
                        <em>Lipides</em>
                    </p>
                </div>
            </div>
        </div>
    )
}

UserKeyData.propTypes = {
    calorieCount: PropTypes.number.isRequired,
    proteinCount: PropTypes.number.isRequired,
    carbohydrateCount: PropTypes.number.isRequired,
    lipidCount: PropTypes.number.isRequired,
}
