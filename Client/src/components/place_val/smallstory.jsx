import React from "react";
import '../division/nik_div.css'
import AppleRow2 from "../../images/row2apples.png";
import AppleRow1 from "../../images/row1apples.png";
import AppleRow3 from "../../images/row3apples.png";
export default function SmallStory(){
    return(
        <div>
            <div className="body">
                <h2 className="main_heading">A small story</h2>
                <hr/>
                <p>We'll begin with a story. Imagine that you are living in the age of the Early Man! There are no numbers. All that you know of counting are the following symbols :</p>
                <ol className="story-points">
                    <li>@ - which means 'zero'</li>
                    <li># - which means 'one'</li>
                    <li>$ - which means 'two'</li>
                </ol>
                <p>One day, you collect some apples scattered down under an apple tree. If you like to express the quantity of apples using the notation available (listed above), how would you do that? If there were 8 apples, how would you go about using the notation? If I were you, I would have grouped the apples into groups of three, say like this :</p>
               <img src={AppleRow1} alt="8 apples" />
               <p>Here, two groups are total (3 in a group) and one is partial with 2 apples. Now, to represent the number of apples, I'd first write the number of total groups, followed by the number of apples in the partial group, like this - $$. Therefore, '$$' successfully tells that there are 8 apples.</p>
               <h4>If there were 14 apples, how would you express the number?</h4>
               <img src={AppleRow2} alt="14 apples"/>
               <p>Here, the no. of total groups = 4 and the no. of apples in the partial group = 2. The number '4' can be represented as '##' (this is nothing but grouping the groups again into 1 total and a partial group with 1 apple). .</p>
               <img src={AppleRow3} alt="4 apples"/>
                <p>Hence, 14 can be represented as '##$' (4 groups + 2 in the partial group).</p>
                <p>If there were 27 apples, how would the representation look like? Take some time and try out. To what level of grouping of the groups does it lead to? Did you find any difficulty in the grouping. What is the role of zero in such a representation? Think about it.</p>
                <p >Actually, the answer is <span style={{'text-decoration':'none','color':'red','font-weight':'bold'}}>' #@@@</span></p>
                <h4>Did you observe that in the process of grouping, not once did we get a partial group? </h4>
                <p>How should such absence of partial groups be represented? Obviously, we need some notation to denote absence. That is zero.  Do you now appreciate the   discovery of zero by the Indian Mathematicians!</p>
                <br/>
            </div>

        </div>
    )
}