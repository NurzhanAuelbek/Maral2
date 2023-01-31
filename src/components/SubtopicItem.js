import React from "react";
import CodeInput from "./CodeInput";
import NewLine from "./NewLine";

function SubtopicItem({header,text,syntax}) {


    return (
        <div className="ui segment">

            <h3 className="ui teal centered header">
                {header}
                </h3>
            <NewLine p={text}/>
            {
                syntax &&
                <CodeInput syntax={syntax}/>

            }

        </div>
    )
}

export default SubtopicItem