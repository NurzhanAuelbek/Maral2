import React from "react";
import ListElements from "../components/ListElements";
import NewLine from "../components/NewLine";


function TutorialsPage({courses, setCurrentTopicIndex}) {


    const list = courses.map(
        (course, index) => {
            return (
                <ListElements
                    key={index}
                    course={course}
                    index={index}
                    setCurrentTopicIndex={setCurrentTopicIndex}
                />

            )
        }
    )
    return (
        <div className="ui container">
            <h1 className="ui header">
                Python тіліне кіріспе
            </h1>
            <NewLine
                p="Python - веб-сайттар мен бағдарламалық жасақтаманы құру, тапсырмаларды автоматтандыру және деректерді талдау үшін жиі қолданылатын компьютерлік бағдарламалау тілі."/>
            <NewLine
                p="Python - көп мақсатты және көп функциялы тілдердің бірі, яғни ол тек нақты бір мәселеге негізделмей, басқа да түрлі бағдарламалар мен шешімдер үшін де қолданыла алады. Бұл әмбебаптық, жаңадан бастаушыларға ыңғайлы болумен қатар, оны бүгінгі күнге дейін ең көп қолданылатын бағдарламалау тілдерінің біріне айналдырды."/>

            <div className="ui hidden divider"/>
            <div className="ui two column divided relaxed stackable grid container">

                <div className="row">
                    <div className="column">
                        <h1 className="ui sub header">

                            Python артықшылықтары:</h1>
                        <ul className="ui bulleted list">
                            <li>
                                Оқуға оңай, логикалы түрде жазылған қысқа және түсінікті синтаксис.

                            </li>
                            <li>
                                Тілдің жалпы жеңілдігі.

                            </li>
                            <li>
                                Үлкен интернет қауымдастығы.

                            </li>
                            <li>
                                Икемділік және әмбебаптық.

                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h1 className="ui sub header">
                            Python кемшіліктері:
                        </h1>
                        <ul className="ui bulleted list">
                            <li>
                                Төмен жұмыс жылдамдығы.

                            </li>
                            <li>
                                Деректер қауіпсіздігінің әлсіздігі.

                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="ui hidden divider"/>

            <h1 className="ui header">Барлық курстар</h1>
            <div className="ui link special three cards">
                {list}
            </div>

        </div>
    )
}

export default TutorialsPage