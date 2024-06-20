import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Code.css';
import Navbar from '../navbar/Navbar';

const Code = () => {
  const navigate=useNavigate();
  return (
    <div>
    <Navbar/>
    <div class='content-body'>
        <h2 class='main_heading'>INDIAN NUMERIC CODE</h2>
        <hr/>
        <p>It is interesting to observe that ancient Indian Mathematicians 
          preferred Devanagari alphabet to numerals in representing large numbers.
          They used a code language to represent the digits of the numbers. 
          This, they did, not for secrecy but to facilitate memorizing. 
          They encoded numbers in the form of sutras or verses which made them easy to be memorized even for small children.
        </p><br/>
        <p>The shloka "gopi bhaagya..." is a good example of this encoding.<br/> Actually, it bears three different meanings. 
          In one sense it is a hymn in praise of Lord Krishna and  in another sense,<br/>
          it is a hymn towards Lord Shankara. Apart from the literary pun , the verse has mathematical importance. <br/>
          It is because, the verse  encodes 32 digits of the number 'Pi' using a code language. 
          The code language used for representing digits in that shloka is given below
        </p>
        <br/>
        <p class='r-center-para'>"  कादि नव टादि नव पादि पञ्चक याद्यष्टक " and  " क्ष: शून्यम् "</p><br/>
        <p>It actually means</p>
        <p>Nine letters starting from 'ka'      ( क ख ग घ ङ च छ ज झ )</p>
        <p>Nine letters  starting from 'Ta'    ( ट ठ ड ढ ण त थ द ध )</p>
        <p>Five letters starting from 'pa'      ( प फ ब भ म )</p>
        <p>Eight letters starting from 'ya'    and     ( य र ल व श ष स ह )</p>
        <p>KSha   for zero.         ( क्ष )</p>
        <br/>
        <h3> Elaborated, this means:</h3>
        <p>ka,Ta,pa and ya ( क ट प य ) all denote 1;</p>
        kha, Tha, pha and ra ( ख ठ फ र )  all represent 2;<p/>
        <p>ga, Da, ba and la ( ग ड ब ल )all stand for 3;</p>
        <p>gha, Dha, bha and va ( घ ढ भ व )all denote 4;</p>
        <p>gna, na, ma and sha (ङ ण म श ) all represent 5;</p>
        <p>cha, ta and Sha ( च त ष ) all  stand for 6;</p>
        <p>Cha, tha, and sa ( छ थ स ) all denote 7;</p>
        <p>ja, da and ha ( ज द ह ) all represent 8;</p>
        <p>jha and dha ( झ ध ) stand for 9; and</p>
        <p>Ksha (or Kshudra ) ( क्ष: ) means Zero!</p>
    <p>After knowing the code language, the key is now available with us. 
    So, we'll try to find how the "gopi bhaagya..." 
    shloka encodes the value of 'Pi' for 32 decimal places.
    </p>
    <br/>
    <p class='r-center-para'>गोपीभाग्यमधुव्रात श्रृङ्गीशोदधिसन्धिग। खलजीवितखाताव गलहालारसंधर।। <br/>
    gopIbhaagyamadhuvraata shrRiNgIshodadhisandhiga  khalajIvitakhaataava galahaalaarasandhara</p>
    <br/>
    <p>Consider the first  part "gopIbhaagyamadhuvraata".  
    This can be split into syllables as " ga pa bha ya ma dha ra ta " which, 
    according to the code language denotes the digits " 3 1 4 1 5 9 2 6 ".
    This continues further and the shloka encodes 32 digits of 'Pi' (note that Pi = 3.14159...)  
    As an exercise try and figure out the rest of the 32 digits with the help of the code language and the "gopi..." shloka.
    </p>
    <br/>
    <button style={{'margin-left':'35%'}}  className="back" onClick={()=>navigate('/')}>BACK TO HOME</button><br/>
    </div>
    </div>
  )
}

export default Code
