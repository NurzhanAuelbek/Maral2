import React from "react";
import NewLine from "./NewLine";

function CodeInput({syntax}) {

    const list = syntax.code.split("\\n").map(
        item => {
            return (
                <div className="item">{item}</div>
            )
        }
    )

    return (
            <div>
                <br/>
                <em>
                    <NewLine p={syntax.explanation}/>

                </em>
                <div className="ui black inverted segment">

                    <div className="ui inverted ordered list" >
                        {list}
                    </div>
                </div>
            </div>
          )
}

export default CodeInput