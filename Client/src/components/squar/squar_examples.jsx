import dest1 from "../../images/example1videosquar.mp4"
import dest2 from "../../images/ex_squar2.mp4"
import dest3 from "../../images/ex_squar3.mp4"
import "../division/nik_div.css"
export default function Squar_examples() {
    return (
        <div className="body">
            <h2 className="main_heading">EXAMPLES</h2>
            <h3 style={title}>Time to explore the visual examples❗❗</h3>
            <hr/>
            <h3>Example 1:</h3>
            <video style={videostyle}controls width="640" height="360">
                <source src={dest1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h4>Now we'll compute 59632</h4>
           <video style={videostyle} controls width="640" height="360">
                <source src={dest2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h4>And finally, have a look at  756232</h4>
            <video style={videostyle} controls width="640" height="360">
                <source src={dest3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video />
        </div>
    )
}
const videostyle={
    marginLeft:'30px'
}
const title={
    marginLeft:'40%'
  }
