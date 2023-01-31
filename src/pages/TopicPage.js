import React from "react";
import SubtopicItem from "../components/SubtopicItem";
import CodeInput from "../components/CodeInput";
import NewLine from "../components/NewLine";

function TopicPage({courses, isShowing,setIsShowing,currentTopicIndex,setCurrentTopicIndex}) {

    const list = courses[currentTopicIndex].tutorials.map(
        tutorial => {
            return <SubtopicItem header={tutorial.name} text={tutorial.description} syntax={tutorial.syntax}/>
        }
    )

    const menu = courses.map(
        (course,index) => {
            return <div className={`item teal ${currentTopicIndex === index ? "active" : ""}`} onClick={(e) => setCurrentTopicIndex(index)}>{course.topic}</div>
        }
    )


    return (
        <div>

            {
                isShowing === true &&
                <div className="ui visible sidebar vertical menu">
                    <div className="item" onClick={(e) => {
                        setIsShowing(false)

                    }}>
                        Жабу
                        <i className="angle left icon"></i>
                    </div>
                    {menu}
                </div>
            }
            <div className="ui container">

                {
                    currentTopicIndex > 0 &&
                    <div className="ui vertical animated teal left floated button" tabIndex="0" onClick={(e) => setCurrentTopicIndex(currentTopicIndex - 1)}>
                        <div className="visible content">Артқа</div>
                        <div className="hidden content">
                            <i className="left arrow icon"></i>
                        </div>
                    </div>
                }
                {
                    currentTopicIndex < courses.length - 1 &&
                    <div className="ui vertical animated teal right floated button" tabIndex="0" onClick={(e) => setCurrentTopicIndex(currentTopicIndex + 1)}>
                        <div className="visible content">Алдыға</div>
                        <div className="hidden content">
                            <i className="right arrow icon"></i>
                        </div>
                    </div>
                }
                <h1 className="ui center aligned teal header" style={{margin:"30px"}}>{courses[currentTopicIndex].topic}</h1>

                    <NewLine p={courses[currentTopicIndex].description}/>

                {
                    courses[currentTopicIndex].syntax &&

                    <CodeInput syntax={courses[currentTopicIndex].syntax}/>

                }
                {list}
                <div style={{height:"10vh"}}/>
            </div>
        </div>
    )
}

export default TopicPage