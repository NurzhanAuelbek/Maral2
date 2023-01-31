import React from "react";
import {Link} from "react-router-dom";

function LoginPage(){

    return (
        <div className="ui grid middle aligned" style={{height:"100vh",background:"#ececec",width:"100%",margin:"0 auto"}}>
            <div className="row">
                <div className="column" align="middle">


                    <div className="ui horizontal segment" style={{maxWidth:"1000px"}}>
                        <div className="ui middle aligned grid">
                            <div className="eight wide column" style={{padding:"0px 60px"}}>
                                <form className="ui form">
                                    <h1 className="ui center aligned teal icon header">
                                        <i className="user circle icon"></i>
                                        Кіру
                                        <div className="ui hidden divider"/>
                                    </h1>
                                    <div className="field">
                                        <input type="text" name="login" placeholder="Электрондық пошта"/>
                                    </div>
                                    <div className="field">
                                        <input type="password" name="password" placeholder="Құпиясөз"/>
                                    </div>
                                    <span>Құпиясөз есіңізде емес пе?</span>
                                    <div className="ui hidden divider"/>
                                    <button className="ui medium fluid teal button">Кіру</button>
                                </form>
                            </div>
                            <div className="eight wide teal column" style={{padding:"250px 40px"}}>
                                <h1 className="ui inverted header">Мұнда жаңадан?</h1>
                                <p>Аккаунтыңыз болмаса тіркеліңіз!</p>
                                <Link to="/register">

                                    <button className="ui inverted large button">
                                        Тіркелу
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default LoginPage