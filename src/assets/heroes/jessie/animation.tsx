import "./style.css"
import jessie from './jessie-p.svg'
import jessieReally from './jessie-really.svg'

const Animation = () => {

    return (
        <>
            <div className="container">
                <div className="balls">
                    <div className="ball"></div>
                    <div className="ball"></div>
                    <div className="ball"></div>
                </div>
                <div className="balls2">
                    <div className="ball2"></div>
                    <div className="ball2"></div>
                    <div className="ball2"></div>
                </div>
                <div className="balls3">
                    <div className="ball3"></div>
                    <div className="ball3"></div>
                    <div className="ball3"></div>
                </div>
                <div className="balls4">
                    <div className="ball4"></div>
                    <div className="ball4"></div>
                    <div className="ball4"></div>
                </div>
                <div className={"svg-wrapper"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 569 686" fill="none">
                        <path d="M0 167.971C0 147.398 13.9519 129.445 33.8877 124.364L512.888 2.29926C541.339 -4.95096 569 16.5455 569 45.9057V640.041C569 668.785 542.419 690.161 514.344 683.993L35.3445 578.765C14.7044 574.23 0 555.945 0 534.813V167.971Z" fill="url(#paint0_linear_78_1378)"/>
                        <defs>
                            <linearGradient id="paint0_linear_78_1378" x1="524.905" y1="39" x2="-45.5431" y2="486.794" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7B63FF"/>
                                <stop offset="1" stopColor="#FCD4FF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={"jessie-wrapper"}>
                    <img className={"picture"} src={jessie} alt="jessie"/>
                    <img className={"really-picture"}  src={jessieReally} alt="jessieReally"/>
                </div>
            </div>
        </>
    )

}

export default Animation