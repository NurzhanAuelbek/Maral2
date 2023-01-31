import React from "react";
import "../index.css"
import {Link} from "react-router-dom";

function HomePage() {


    return (
        <div className="ui center aligned container" style={{paddingTop:"10vh",paddingBottom:"10vh"}}>




            <div className="ui teal segment">

                <h2 className="ui header">
                    Python не үшін қолданылады?
                </h2>
                <ul className="ui bulleted list">
                    <li>
                        Оның көмегімен компьютерге және мобильді құралдарға түрлі қосымшалар жасалады.

                    </li>
                    <li>
                        Бұл тіл негізінде көптеген серверлер мен бұлтты сақтамалар сияқты деректер базасы жиналады.

                    </li>
                    <li>
                        Кейбір компьютерлік ойындар толығымен немесе ішінара Python-да жасалады (мысалы, Battlefield,
                        Sims, Civilization, World of Tanks, Vampire: The Masquerade – Bloodlines)

                    </li>
                    <li>
                        Python-да әртүрлі құрылғыларға, мысалы банкомат пен терминалдарға арналған кіріктірілген
                        жүйелерді жасауға болады.

                    </li>
                    <li>
                        Оның көмегімен машиналық оқыту (мысалы, көптеген нейрондық желілер, Netflix рекомендациялар
                        алгоритмі) бағдарламаларына арналған алгоритмдер, сондай-ақ көптеген аналитикалық қосымшалар
                        жазылады,

                    </li>
                </ul>

            </div>




            <div className="ui three column center aligned divided relaxed stackable grid container" style={{margin:"15vh"}}>
                <div className="row">
                    <div className="column">
                        <h2 className="ui icon header">
                            1. Пайтон тілін көшіріңіз
                        </h2>
                        <a className="ui black large button" href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Ресми сайты</a>
                    </div>
                    <div className="column">
                        <h2 className="ui icon header">
                            2. Қатарымызға кіріңіз
                        </h2>
                        <Link to="/register">

                            <div className="ui teal large button">Тіркелу</div>
                        </Link>
                    </div>
                    <div className="column">
                        <h2 className="ui icon header">
                            3. Біздің оқуларды өтіңіз
                        </h2>
                        <Link to="/tutorials">
                            <div className="ui black large button">Өтуге кірісу</div>
                        </Link>
                    </div>
                </div>
            </div>




            <div className="ui segment">
                <h2 className="ui header">Біз жайлы</h2>
                <p>

                    Python синтаксисінің қарапайымдылығы мен нақтылығына байланысты, курс бағдарламалау негіздерімен
                    танысып, өз бағытын анықтауды қалайтын жаңадан бастаушылар үшін де, Python тілін толықтай меңгеріп,
                    жетілдіруді қалайтын тәжірибелі бағдарламашылар үшін де қолайлы болады.
                </p>
                <p>
                    Біз Python тілімен танысуды басқа да бағдарламалау тілдері үшін іргелі болып табылатын арифметикалық
                    және логикалық операциялар, айнымалылармен жұмыс, шарттар, орындау тәртібі және т. б. оның басты
                    мүмкіндіктерін шолудан бастаймыз, сондықтан курстың соңына қарай сіз жалпы бағдарламалаудың есептік,
                    логикалық және синтаксистік негіздерін түсініп, өзінің IT-саласындағы жолыңызды таңдай аласыз.

                </p>
                <p>
                    Бұл курстың басты ерекшелігі мен мақсаты - қазақ тілінде IT саласы мен бағдарламалау бойынша қажетті оқу
                    материалын ұсыну болып табылады. Біз оқыту курсының базасын неғұрлым меңгеруге және түсінуге ыңғайлы
                    болу үшін қажетті игерілетін оқу материалын қамтамасыз етуге тырыстық.
                    Сәттілік тілейміз!
                </p>
            </div>

            {/*<div className="ui email alternate stripe vertical segment">*/}
            {/*    <div className="ui center aligned grid container">*/}
            {/*        <div className="column">*/}
            {/*            <h3 className="ui header">*/}
            {/*                Semantic is growing fast. Want to see just how much? Sign up and we'll let you know*/}
            {/*            </h3>*/}
            {/*            <form className="ui form" method="post"*/}
            {/*                  action="https://semantic-ui.clients.ubivox.com/handlers/post/">*/}
            {/*                <input type="hidden" name="action" value="subscribe"/>*/}
            {/*                    <input type="hidden" name="lists" value="29450"/>*/}
            {/*                        <div className="field">*/}
            {/*                            <div className="ui huge input">*/}
            {/*                                <input type="text" name="email_address" data-validate="email"*/}
            {/*                                       placeholder="E-mail"/>*/}
            {/*                            </div>*/}
            {/*                            <button type="submit" value="Subscribe"*/}
            {/*                                    className="ui huge secondary submit button">*/}
            {/*                                Sign-up*/}
            {/*                            </button>*/}
            {/*                        </div>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="ui three statistics">*/}

            {/*    <div className="statistic">*/}
            {/*        <div className="value">*/}
            {/*            <i className="python icon"></i> 5*/}
            {/*        </div>*/}
            {/*        <div className="label">*/}
            {/*            Icons*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="statistic">*/}
            {/*        <div className="value">*/}
            {/*            <i className="python icon"></i> 5*/}
            {/*        </div>*/}
            {/*        <div className="label">*/}
            {/*            Icons*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="statistic">*/}
            {/*        <div className="value">*/}
            {/*            <i className="python icon"></i> 5*/}
            {/*        </div>*/}
            {/*        <div className="label">*/}
            {/*            Icons*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
    )
}

export default HomePage