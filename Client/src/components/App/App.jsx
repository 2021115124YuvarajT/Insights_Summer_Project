import React from "react";
import { Routes, Route } from 'react-router-dom';
import Homepg from '../home/Homepg.js';
import Place_val from '../place_val/place_val';
import Mul from '../mul/Mul';
import Div from '../division/Div';
import Divs from '../divs/Divs';
import Squar from '../squar/Squar';
import Squar_root from '../sqr_root/Squar_root';
import Code from '../code/Code';
import Misc from '../misc/Misc';
import Nomatch from '../Nomatch';
import { Dev_Team } from "../Dev_Team/Dev_Team.jsx";

import Nikilam from '../division/Nikilam';
import Urdh_div from '../division/Urdh_div';
import Intro from '../division/Intro';
import Urdh_example from "../division/Urdh_example";
import Three_digit_num from "../division/Three_digit_num";
import Div_not_9 from "../division/Div_not_9";
import Part_div_neg from "../division/Part_div_neg";
import Answer_part_div_neg from "../division/Answer_part_div_neg";
import Few_ex from "../division/Few_ex";
import There_a_way_out from "../division/There_a_way_out";
import Exercises from "../division/Exercises";
import Exercise2 from "../division/Exercise2";
import Urdh_sq from "../sqr_root/Urdh_sq";
import Sq_mishrank from "../sqr_root/Mishrank";
import Exercise from "../sqr_root/Exercise";
import More_example from "../sqr_root/More_example";
import Urdh_sq_ex from "../sqr_root/Urdh_sq_ex";
import Ex_2 from "../sqr_root/Ex_2";
import Reciprocal from "../misc/Reciprocal";
import Cube from "../misc/Cube";
import Misc_ex from "../misc/Misc_ex";
import Rec_19 from "../misc/Rec_19";
import Misc_mishrank from "../misc/Mishrank";
import How_it_works from "../misc/How_it_works";

import Naveesh from '../mul/Naveesh';
import Mul_intro from '../mul/MulIntro';
import Nikhilam from '../mul/Nikhilam';
import Naveesh_moreexample from "../mul/Naveesh_moreexample";
import Urdvha from "../mul/Urdvha";
import Quick from "../mul/quickrecap";
import More from "../mul/moreexample";
import TryN from "../mul/try_nikh";
import Nik_great from "../mul/nik_greater";
import Nik_fmexamples from "../mul/nik_fmexamples";
import Nik_otherbase from "../mul/nik_otherbase";

import Squar_intro from "../squar/squar_intro";
import Dwanda from "../squar/dwanda"
import Squar_method from "../squar/squar_method"
import Squar_examples from "../squar/squar_examples";
import Squar_exercises from "../squar/squar_exercises";
import Squar_stepbystep from "../squar/squar_stepbystep";

import Divs_intro from "../divs/divs_intro";
import Divs_eka from "../divs/divs_eka";
import Divs_better from "../divs/divs_better";
import Divs_negative from "../divs/divs_negative";
import Divs_exercise from "../divs/divs_exercise";
import Divs_how from "../divs/divs_how";

import SmallStory from "../place_val/smallstory";
import M_behind from "../place_val/M_behind";
import Mishrank from "../place_val/Mishrank";
import Try_pv from "../place_val/try_place_val";
import Stepbystep from "../place_val/stepbystep";
import More_p from "../place_val/moreproblems";

import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Profile from '../profile/Profile';
import Doubts from "../discussion_panel/Discussion";
import Logout from "../logout/Logout.jsx";

import Feedback from "../feedback/Feedback.jsx";
import Discussion_table from "../discussion_panel/Discussion_table.jsx";
export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path='/Homepg' element={<Homepg />} />
                <Route path='/place_val' element={<Place_val />}>
                    <Route index element={<SmallStory />} />
                    <Route path='/place_val/smallstory' element={<SmallStory />} />
                    <Route path='/place_val/M_behind' element={<M_behind />} />
                    <Route path='/place_val/Mishrank' element={<Mishrank />} />
                    <Route path='/place_val/try_place_val' element={<Try_pv />} />
                </Route>
                <Route path='/place_val/moreproblems' element={<More_p />} />
                <Route path="/place_val/stepbystep" element={<Stepbystep />} />

                <Route path='/mul' element={<Mul />} >
                    <Route index element={<Mul_intro />} />
                    <Route path='/mul/MulIntro' element={<Mul_intro />} />
                    <Route path='/mul/Nikhilam' element={<Nikhilam />} />
                    <Route path='/mul/Urdvha' element={<Urdvha />} />
                </Route>
                <Route path='/mul/try_nikh' element={<TryN />} />
                <Route path='mul/moreexample' element={<More />} />
                <Route path='/mul/Naveesh' element={<Naveesh />} />
                <Route path='/mul/Naveesh_moreexample' element={<Naveesh_moreexample />} />
                <Route path='mul/quickrecap' element={<Quick />} />
                <Route path='/mul/nik_otherbase' element={<Nik_otherbase />} />
                <Route path='/mul/nik_fmexamples' element={<Nik_fmexamples />} />
                <Route path='/mul/nik_greater' element={<Nik_great />} />

                <Route path='/division' element={<Div />}>
                    <Route index element={<Intro />} />
                    <Route path='intro' element={<Intro />}></Route>
                    <Route path='nik_div' element={<Nikilam />}></Route>
                    <Route path='urdh_div' element={<Urdh_div />}></Route>
                    <Route path='/division/exercise' element={<Exercises />}></Route>
                </Route>

                <Route path='/division/3_digit_num' element={<Three_digit_num />}></Route>
                <Route path='/division/div_not_9' element={<Div_not_9 />}></Route>

                <Route path='/division/urdh_ex' element={<Urdh_example />}></Route>
                <Route path='/division/part_div_neg' element={<Part_div_neg />} />

                <Route path='/division/answer_to_ques_part_div_neg' element={<Answer_part_div_neg />} />
                <Route path='/division/is_there_a_way_out' element={<There_a_way_out />} />
                <Route path='/division/few_ex' element={<Few_ex />} />
                <Route path='/division/ex_2' element={<Exercise2 />} />

                <Route path='/divs' element={<Divs />} >
                    <Route index element={<Divs_intro />} />
                    <Route path='/divs/divs_intro' element={<Divs_intro />} />
                    <Route path='/divs/divs_eka' element={<Divs_eka />} />
                    <Route path='/divs/divs_better' element={<Divs_better />} />
                    <Route path='/divs/divs_negative' element={<Divs_negative />} />
                    <Route path='/divs/divs_exercise' element={<Divs_exercise />} />
                    <Route path='/divs/divs_how' element={<Divs_how />} />
                </Route>

                <Route path='/squar' element={<Squar />} >
                    <Route index element={<Squar_intro />} />
                    <Route path='/squar/squar_intro' element={<Squar_intro />} />
                    <Route path='/squar/dwanda' element={<Dwanda />} />
                    <Route path='/squar/squar_method' element={<Squar_method />} />
                    <Route path='/squar/squar_examples' element={<Squar_examples />} />
                    <Route path='/squar/squar_exercises' element={<Squar_exercises />} />
                </Route>
                <Route path='/squar/squar_stepbystep' element={<Squar_stepbystep />} />

                <Route path='/squar_root' element={<Squar_root />}>
                    <Route index element={<Urdh_sq />} />
                    <Route path='/squar_root/mishrank' element={<Sq_mishrank />} />
                    <Route path='/squar_root/urdh_sq' element={<Urdh_sq />} />
                    <Route path='/squar_root/exercise' element={<Exercise />} />
                    <Route path='/squar_root/more_ex' element={<More_example />} />
                </Route>
                <Route path='/squar_root/urdh_sq_ex' element={<Urdh_sq_ex />} />
                <Route path='/squar_root/exer_2' element={<Ex_2 />} />

                <Route path='/misc' element={<Misc />}>
                    <Route index element={<Reciprocal />} />
                    <Route path='/misc/reciprocal' element={<Reciprocal />} />
                    <Route path='/misc/cubes' element={<Cube />} />
                    <Route path='/misc/ex' element={<Misc_ex />} />
                    <Route path='/misc/rec_19' element={<Rec_19 />} />
                    <Route path='/misc/mishrank' element={<Misc_mishrank />} />
                    <Route path='/misc/how' element={<How_it_works />} />
                </Route>
                <Route path='/code' element={<Code />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/discussion" element={<Doubts/>} />
                <Route path="/discussion_table" element={<Discussion_table/>} />
                <Route path="/profile" element = {<Profile/>}/>
                <Route path="/Dev_Team" element={<Dev_Team/>}/>
                <Route path="/logout" element = {<Logout/>}/>
            </Routes>
        </div>
    )
}