import React from "react";
import {Link} from "react-router-dom";

function RegisterPage(){

    return (
        <div className="ui grid middle aligned" style={{height:"100vh",background:"#ececec",width:"100%",margin:"0 auto"}}>
            <div className="row">
                <div className="column" align="middle">


                    <div className="ui horizontal segment" style={{maxWidth:"600px",padding:"120px 60px"}}>
                                <form className="ui form">
                                    <h1 className="ui center aligned teal icon header">
                                        <i className="user circle icon"></i>
                                        Тіркелу
                                        <div className="ui hidden divider"/>
                                    </h1>
                                    <div className="two fields">
                                        <div className="field">
                                            <input type="text" name="first-name" placeholder="Аты"/>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="last-name" placeholder="Тегі"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <input type="text" name="login" placeholder="Электрондық пошта"/>
                                    </div>
                                    <div className="field">
                                        <input type="password" name="password" placeholder="Құпиясөз"/>
                                    </div>
                                    <Link to="/login">Аккаунтыңыз бар ма?</Link>
                                    <div className="ui hidden divider"/>
                                    <button className="ui medium fluid teal button">Тіркелу</button>
                                </form>



                </div>
            </div>
        </div>
        </div>
    )
}
export default RegisterPage