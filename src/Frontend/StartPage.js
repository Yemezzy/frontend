import React from 'react'
import StartNavbar from './StartNavbar';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaLock,
  FaUser,
  FaSignal,
  FaDollarSign,
  FaDiscord,
  FaHourglassStart,
  FaTwitch,
  FaTelegram,
  FaYoutube,
  FaHandshake,
} from "react-icons/fa";
import { SiRoblox } from "react-icons/si";
import { FiTrendingUp } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import  { useRef, useState } from "react";
import BottomNav from './BottomNav';

const StartPage = () => {
    
      const navigate = useNavigate();
      const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    

    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const data = { email, password };

          const resp = await axios.post(
            "http://localhost:8100/user/login",
            data
          );
          console.log(resp);
          if (resp.status === 200) {
            toast.success(resp.data.message, {
              position: "top-right",
              autoClose: 100,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
            navigate("/");
          }
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 100,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        }
      };
  return (
    <div>
      <StartNavbar />
      <div className="md:grid grid grid-cols-1 md:grid-cols-2 pt-1 md:pt-16 justify-center  px-2  md:pl-16 w-full">
        <div className="md:hidden justify-center flex">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFhUXGB0bGRYXFxceHxsgHyIaHx0eHR4aICggHiAlHh0ZIjEhJSkrLi4uHR8zODMsNygtLisBCgoKDg0OGxAQGy0lICYtLy81LS0tLS0tLi8tLS0vLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAHUBrQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgAEBwMCAQj/xABKEAACAgAEAwYDBAcEBgkFAAABAgMRAAQSIQUxQQYTIlFhcQcygRRCkaEjUnKxwdHwM2KSohU0Q1OC4QgWJDVUssLS8RdjdLPT/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAQCAwUBBgf/xAAzEQABBAEDAgMHBAICAwAAAAABAAIDESEEEjFBUWFx8AUTIoGRobEywdHhFPEjQnKSsv/aAAwDAQACEQMRAD8A3HA/OcWiiNO4B8hZP1rljzxzNmKFnX5uQ9Cdr+nPCnwLLLJI2tS1AuaPOjyIo6tXLGdq9Y5krYYwNx73Q+nPB9cO6bSh7HSvvaO3JThk+JxS7RuCfLcH8Dvi9hB4nle6Mbx6l1CwGBDqVoEkep38sOXCsz3kSP1I39xsfzBxLSat0j3RSCnDOOCO+fMfUdbAjqdM2Noew2D35B7fn6K5gdleMQyTy5dWuSIKWHo11XnRBB8jir2q42mUgaRmUMfClkc/P2HP8uuMGHbIZbiMeZjYsVWnvbvFLNrWz58wT94A9MPpRfpTExV4fnEmiSaJgySKGVh1B3GPs0lEeJRvuD1sGgN9iT78jgQvXfDw8zq5UCehO9chQ5n088dAwNjy54VJOKTkt3EOvuxrcLmFP6Umnie72UMWoULUVgpwnPLIgZGUIWJB7zvNdgs4BJsaXLDqAF2AFVa6FzRf7g/gn1fYqtsgJpGsDc/xiCFgssmliLqmO30B8sXy4AvpV4zmDiTvPJmO7WS9tLAmhtWwB5Ac/fFYVeom93QHJ+ePIJv/AOs+U/33+R//AG4I5LNpKgeNtSm99+nvvhbz3EFWOFkgiZnW2XSTpNDagtjmeflip2KzbJK+Xbk3iHoQN/ax+YA54FAagiQNdRvsK6WOp5TxitmM2ifMwH7/AMOeJnptCM/kPz6fnhayqKWMk5J5MFINvfKvMen8MZ2t1roXNjYBuObJpoHcn60OtHqtKGHeC48DtyfJMmXzsb7K4J8uv4HfFrClxCNSQ8Vq9nUlG1I3JFcsH+FZnvIlY8+R9x/V4jpNcZJXRPAsZBHBGO+QRYsHIXZYdrQ4cfcfz4K2zgAkmgOZOFhfiJwsyd0M7Dqur1HT/jrR+eKPxNuQZLJlikWazSxzEGiyAM3d2OWsgDF3gP2LOQT5dMqgy8Mz5co0aBWKUCygdLOx52MaSXTUDjnNMqAs7BVHMsQAPqcJ/wAMXKw5rK6y8eUzcsETEkkIulghJ5lNRX2AHTDfPArqyOoZWBDKwBBB5gg8wcCF6jcMAykEHcEGwfY4+uwAJJoDck9MIMeWzPCXIgilzWQckiKPxS5djuQgJt0J6dPey0zCZrizCN4Zspw8byCUaJswf1KBtE8z1/dPb1vHroo7vqnuCdXGpGDL5qQR+Ix7ZgBZ2A645ZXKpEixxqERAAqqKAA5ADGd/F/jLqI8ohoOC8ldRdKvtYYn2GOxRmR4aEOdtFpkzPb3h6NpOYBPmiSMP8SqQfocG+G8ShnTXDIsi+am6PkeoPocZH2L4av2LO5pollZV7uIFA1NVlqIPLUhJ6AHAfsVxl8rm4mUnQ7Kki9GUmrPqt2Pb1OG3aNpDgwm29+uL8wqhKcXwV+gcVc/n4oEMk0iRoObuwUD6nbFrH5k7bcWn4vxb7IH0xLMYogflUKSHkI2skAsfSh0wgr1umS7fcNlfu0zsJYmgC2mz5AtQP0wz4/KU0a52PMQxwd19ijaSIlQH7tCBIkxHzOSTLfRu8HykadK/wCj92pkmjlyMzFu5AaIk2Qh2KeynTX7VcgBgQtjwNz3GoITpklVW/Vuz+A3xV7V8TOXy7MmzsdKnyJvf6AH8sZxxfg0kLHWQwLEd4CaJ6gnmD5g7/vxoaLRNny91cgDqa557WFma/2g7T4Y2yKJPQXdfWitWyPEophcUivXOjuPccxi7jJOFcPnjH2hCE07rvu4BA26ldxZO3TGoZDMiSNJAK1qDXlY5fTENZpWwO+B1jjyPZWaHWHUN+Nu01fmO49dl84hxCOBO8lbSt1yJJJ5AAWSfQDFZ+O5cQrOZR3bGlIDEk72oUDUWFNa1Yo3yOAPb3ORkRxA3Ksgk0jotOhLHkNmNA7mthsaVjO5jSEqulJXk16jZ1AitOmhz56jjHl1Oxxbjj79ltQ6b3jQ7PP27rUspmklRZI2DI3Ij+uYO1dDi1hV7C5yM5fuQf0iF2dCKI1uzWOjLvVi/Lngj2s4v9kyc+ZoExpag8ixpUB9CxAwzGd7QR1S0jdjiOy98Y7QZXK19pnjjJ3Csw1H1C8z9BjxwbtNlM0SMvmI5GAsqG8Veek01etYwp8k8aQ8TzifaxOzd4rkirru2sbbgNQPhA0rQ2q1m1yM8bZnh+vK5mAd5o3WwOZWiQDV0VIvkRviDp42kYJbZBeKLQ4HaQf+wF9arIPCi1r3GhzzXUirx8v3X6Ex4ZgBZ2A64AdhOOHO5GHMPWsgq9bDUpKkgdAa1AeuFn4ncUkLpk49VFQzhQSXJJCrtvtRNdbHlhuKB0knu+P2VUswjZvTTL2vyKtpOYW/MBiP8Sgj88GMrmUkUPG6up5MpBB+oxj79nYEVTNnRExF6Xy8orzFmrrleDPCIX4bnYYe+EkeYA1AArWo6UbSSaN1v5WOmGpNJFt/43G88jmuawBwlmamTd8bRXgeL4sWTytOxSz/ABKGFblkRAeWogX7ef0x1zU4jRpG5IpY+wFnGSLnYs4JZMwD3gfY94VVEOyr94KoavFR3dSRvYyZZdlVyt3Q6L/I3Ode1tA0ATZNAAGv3rGD00zI9osrMQsU6Mx5C6J9g1E/TBfGMr2XLgMiTxOWAQOocE9D3iAALewYrR6WLIfuwfFXmy5WazLE5jYnmaqifM9CepF9cRimLjTgrtd7PiiYZIX7gDRBqxfBsYI6Y4OLPRoxVizkbbB1JPIBgb9vPAHtpxcxIsS85PmP93qPc8va8c87xeR4UkgVJAP7WMrZ6UQL+XY8uX0NPNhJaHHr69cLHtxdQCbMTADgvFRIgcXo1aWBNmNtuv3kNjc7i/L5T+KiKNK1zXNNOFIbxzKGWFkXnzHuN6+vLCrwrNxoskcqkatiwsN6jrVe3XD5gDxI5ZpCksTFhVuFatxtbLv+OM7VaNz5BLGRuArPBH5HJ4TWn1IYwxvurvHIKXeIZvvzGsaNajSLOpmvzPp/PDpwzLd3EidQN/fmfzvFThIy4JESEEDmUcEj0LC/pgvjuj0bonOkkNuNcYAA/wBfYdbJNTqRI0MYKaO/JPq+pQHtXwdczAVaNJSu4Rxz8wrCmRq5MpG/peMWTsxlXz0cUMUs8zgaYp9ooQCdTylCGlC/q+DyNk0d5z/EFiIDBjqBrSt8q/mPzwJyZycc8mYRXEso0s3dS8lPIWu1s1muZryw+k0Y4dlBDEkS1SKFFKqjbyVQFX2AAGOksdkbKd9yeY2NEbGzdeXM+x9ZeYOoZbo+YIP4HfHp2oE+W+2+BCVpeFTAt3Mzp3g0MVgRf0gNtM96bDBStqD8wIwU4VkxGgVACgYjSYxHooFXKqFs6nBbfYhtjVXDxaABdnGkigEeh4TW6+FhR6Ej8MXcnmkk1FL5i7Vl6f3gL2xa+Zzm7T+APXruVARgG1bwp9qOzWu5oB4ubIPveq/3vTr7823HDMzaVLUTXQc+dYqXJYmyN2uSHnH+1R5aCG2dFIcEEAbKLJPQUcN3BODJlkpd2PzP1P8AIemPGSz8BclEZWkIs9041cqJNbc+tdcGMdtVxQBrt7sn9uMfRVc/DrjZepG3v0/PC7k5AzaJmZXGyNfyEf1zOGXMzBEZyCQoJIAs7b7DzwHzGZy0pGtH1V/u5AenMgUef78Zus0b5XNkjIscg3tcPGuo5aehytCGYNBa7jv1H++qq5+Tu28L3Lvqcct/u1+Htg1wfLmOJQeZ3P1wPy8mXjOtUc86YqxNgldgd+YO4Fct9xZmCYOoYXR8wQfLkd8R0mifHIZZCL4DQSQL5JJ5caG51WepPQlmDmhrfqev8AdFW4vmEihknkAIhRpNwNtKk2PI1e+Mv7BZLi7ZKKKOfKZeOZWl7wq75kiRixk02I99Wx6CuuNQ4u0fdlJozJHJaMunUKIYnUP1aBwMhzWUVldY2VkTulPdOKQdBtWkc/x9RjTVArr6/r1SudneCR5PLpl4tRC2SzG2dmNs7HqxJJ/5Yv5rMpGjSSMERQSzMQAAOZJPIY+5eYOoYXR8wQfqDuMepIwwpgCPIixgXEgwSZjjDl0kmyvD1NI0ZKS5gj7180j9OvXf5fuaTM8IbvhJNmuHn+1WRi8uX/vqebR+a9OfmcOuczKwoDpYjkAgvoen0xMjmhMmrQyjlTrV/Ty6fQ4nv6Vjso7fqveRzkc0ayxOHRxaspsEemM9+L3BXdY82gJEYKSV0W7VvYEsD5WPXGjxRKopQFHkAB+7HnMShVZjuACSPQc8dikMbw8Ic3cKWVtn8lPw7L5SXPd2y0z1DI29Gk2AFLYG36owF7Pdnlmz6R5eQzQRsjvNoKihTEUd9z4R9TyGH7NcA4W7szZYhgdwizKp3rYR0pv054ZOCwQpGBl4xGn6oTTv1JBF36nnhr/KaxpDLzfNUL8sqv3ZJyiWPzF2h4J9g4pmknbu1mSf7PKwbR+mDKNRUEgBXdSaNMByG+P07he7V5PJzoIc7CJUILCwbWtIJDCip8Q5G8Iq5Y1mst9mK5yZoo483IJp/wBIG1L3eiRIlS+87ySbMEVaALGSQCDg1/0duzsiCfPOpVZFEcV/eANufawoB8w3lg9lPh7wSNlkMDN1VZHkZebCtN77qedjz540XKFCi92AEoaQBQAGwAG1V5YEIZ2tyBmy5Ci2BDADrVg/kThK/wBJ/pZZCtrLqtCdvPfbej6Y1HCzxqHJCUiVSH06yVV9xdfdFFrB9cP6XVtjaWSCx4dLo/kDPRY/tH2fLM8SQOAdiwetWB36ONis2lVM48kktJqM3gA1cvENh6ACug9saJw/L93Eic9KgH36/nilwXLZcKWy69SpYhunMDV/DbBnENXqRLQYKA/ivlhW+ztFLAC6Z1uPbgCyT2Jsknt2WX8fyDmbNCyGZmLEfMoYUje2kABuVqRzXAmbKlou6EjA6QO8B8W1b+5r88aTxWTLO+iYMHWwrgSKw+UnQ6bgbrdH35YHkZWz/wBonNGqFjrXzBA3+bGHJpHlxLSO69HHrAGgOHgg/ZrKP9qhaiCoYsOugqw38gX0VfPSSPlNM/bXhBzeRny6/M6Wl7DUpDpZ6DUox04NPlVPd5ci2tjs+pqoFmZt2NULYk8sGsN6eMxNq88pSeT3rrWMdjO0GXbLfYM7pjeO42SagGAOwOrbUORU77WPQH2ryHDMup+yu7zt4UjilLKurayRZ60EuySBVXjT+0XAuGZty2ZiqUHSXUSK223iZNm9NV48dn+zXC8pKDDF+mulZ9blTZXw3YQ89xR53ipmijZM6Vj3AONlgPwk+fY9voaUDI5zQ0gY69Qr/wAOODPlOHwwyCpN3cfqlyW0+6ghT6g4B/EHJtFmIc6A5RQFfQxUiia8Q3XUGK2PLzIxomOUsQYFWAIIogiwR5EHGhFMWSbznm/EHlUSxB7NvrCyPM9ocpIweTJySMvIvm5W9a8V7emLXA2l4hxJcwy0kZVjW4QLuq31Jb/1HB/M8C4VrbVEVIYgqpmqxzoKaA9qw2ZHJRwoEhRUXyUV9fU+pw4/WRBv/GDdVk8X2+IpVmmlLrkIqwcda74H3XvPZcSRuh5OrKfqCP44xDLQtl8y0M40g3HJ5BW21C+YBqQH+6MbxgH2g4VlpU1ZiLVW2oWGUH1Ug16b+2MaaHfRHIXo/ZntAaXcx4Ja7tyCOov1wsy46xy7abJnEccYANiICNFYg9HZtVV8qm+bDS8fDXhTQ5Us4oytqAIohQAFseu59iMdeEdmshqMiIZGUg3JqNHmDTbE7c6Jw2YjDAWu3H6K3Xe02ywCGO+lkgC64AAJoDnnx5JJCdpeDfaI/DQkSyl8j/dPodt+mMEbtfnsjnGXMo8NH+xFWo6Mrcnvqb0tvj9G53NrEut7qwNhfM1gLxbM5LMLonjSdbFB4tQBO1ix+7eiMOB5ArosxmokYA1pwDfA+/ceBST2Y7az8VkfJxRhYtH6aZo99BsNVOArtyXwnq1bVjWcL/ZyPIw3DkkjjvxFUQrfLckjfYjnhgxEqtx3Emq8uPkpihneH94wYySKACNKNQ3BFn13/IYuk1zwk9oPiFBCSkAE8nKwfAP+L7x9F29cWQwSTO2xi/XU9FU97WC3FN+UyvdgjWzX+sbxZwrdnO2uXzVIT3Up+455/sNyb22PphpxySJ8TtrxRXWuDhbSuU0epStkWCLHS+uKEfCQpQiWa1N7uTq5fMOvL88fOLcbSHatT/qjp7npgXH2rN+OKh6Nv+Y3wo/VRMdtccrhe0GiU04mK+VzKyKHQ2D/AFR9cWMXAgiwpoVPwrUWJnmF3sr0ALPLbbmRft5DF7LRFVCli3Pc8zZJwAz/AG5yEMjRNmNTp84ijll0ftGJWCn0NdcE8rxvLSQfaUniaAAky610iudk7Cut8sdQieK+by+sUHZd7teeO4OF3jXadYZBBFG00537tOn7Ro158jtuaGJMY55po9ft81Fzw0WVdi4OFN99MedanJ53+NXYvBbGf5Dt/I2pnyhMaVraNixS7okEAdD1HLDrw/PRzRrLEwZGGxH8fIjyxZLBJF+sfg+vRUI5mSfpKt4ocQyPe6f0kiBd/wBG2m+XP0/ni/hZ4l2rRGKxJ3lc2uh9NiT+Q98KyysiFvNK9rS40EXyHDu6JPeyvfSRtXl/LF/Cpku2SFgkyaL+8GsD3FAgeu+GoHBFMyUWw2hzS3lc5k1KVsiwRY6euKEHCdNfppmog+J75dDy2Pljjx/j8WVUGSyx+VFqz678h6/vwv5Ht48j0uUYj+6xLV7af5Ydi0c8rd7G472B+SEnJrII3hjnZ7UT+AU9YmKHCuJxZiMSRNY5EciD5EdDi6TW5wu5paS1wohMtcHCxwqmeyXe1+kdAL+Rqu664+ZDI91dPI9gfOxY7X5+hHLywJbj8sjEZXLmRR/tGOkG6IKg0CCDe7KSKIBUhj9Tj8kbVm4DEv8AvAdQA83rZR5lWahZbSATgpdTHiYmAPHe0aZdhEI5JZSNWhAAAtkamZiFAsHYW22wOIPe1jdzjQ7nhdDS40Arr8NskmWXmSAG2FkGq8hX5nzxdiWgBZNCrPM+pwj5rtjmUXW0EI3ACiSRyxJoAfo13PtQ86F465Lt2QAc3lmiHV4nEqr6sKV/8KtXXENNMzUtL4cgcmjX3A+3CJW+5cGyYJ6WE744ZuEuhUMUJ+8vMe2O+BfFOItG0aJH3jyaqGoL8oBO598XtaXGh6rKqlkbG3c7jHc8mhgWckr7Dw1lZW7+Q1zUnY8uY/L29bJJ4Az8WzCKWfKUo3J71f4DBqKTUoPmAfxx18bmizXyIP481GOdkhIbdju1zef/ACA7FdMDM/w1pHDieWMAVpQgA89z59MX5HABJNAbknphTz3biNWqOMuB94nSD7CifxrCs2ojhFyGvXYJ2DTSzkiNt/QD6mgmTJZUxggyM9/rGyP6/gPUm5hY4N2tjmYIymNjsLNqT5XtR9xhnxKKaOVu5hsKM0EkLtsgorlOhZSASpIqx09cDm4Q/wD4mYemrbp9enn1OPPH+Pw5VAzklm+VF+Zv5D1OFT/6kHVRy1Le/j3H0K1fph6HRzzN3MbjvgfS+VAMccgJ+hSlAJsgAWevrjrgbwbjEWaj7yI2ORU7FT5Ef0MEsLuaWktcKIUSKVHN5RnaxKyDSBS+9379Pa8eMnkGjazNJIKqnIPWxyA9RZs8vrZkzIGw3x8izIPMVju09lPY6rpWcc5FsEA0SOY6euOmK+bzSxrqY7fmfbFbntYNzjQHVRAJNBD/APRL/wDiJunJvK/O/M3d8h5DBDKQlECli5H3m5nfrgQePNuRF4RzN/v22wRyGfSUbbEc1P8AW4wrDr9PM7Yx2fIi/KwLVr4JGC3DCvYq5nLlwBqZaazpJBPPax05fhi1hb7c9pjw7KnMjLvOAaIQgBb5FybIW9rAPPDipRTIZBozZmkkFVTm/Lf8j+OCGFPgnb7JZjJ/bTKIowypIHO8bsQoDV0sjxcq32o01g4EL4eXlgSOEvt/2mbYk7Hzvbe9uVXf8rPF+KRZaF553CRoLLH8gANySdgBuTjMZ/jOWd/s2QaREUuzPLpbSCAWKqjUASN7PPesSa0u4Ra1PJZcxrRdn35tz6bfv/HFrCd2K+IGW4gTGoaKcCzE9bjqUYbMB9CPLDjjhBGChLnxB/7vzHsv/nXAv4a8IhGVjzPdgzPrtzuRTMoC38uwHLnhl47w0ZmCSBmKhwPEKsUQRz9RjPB/pHhO1CbLWfMqL/zRn8Vs9TjR0/8Ay6YwMdTt10TViqodLvof9LyfDIHkYr6Lr8VeDwRrHNHGEd3IYrsDsTZHK76/jjR+H/2Uf7C/uGM1j4JnuJsJM0xhh5qumtv7iHf/AInPXaxjToIwqqo5KAPw2xHVkNijhLtxbd0bAuqF+CIR8bngUDSQkzY7/vJBq8dncit/Ty8sHOIZdX72L9H3igMlKwIQb0W5HbauX8KfHeDOjmSNdSE2QBdHrY8scJuJTTL3YQ2aB0Ai61bbdKIFE14ceWa4xbmSDnwObu/WfJcHw2D/ALV3sZKdUidKB+vL+vbH34iZ9o8qqLJ3XfzRwGYEL3auf0jgnYEIHo9DWCfZ7hhhQlvnbn6Ach+/AXtrwCXNywBIIpAgY95mXZoojsL+zrXfSEFqLEKK9caOlY5kQDuVdGCGgFDB2pgy+X7rhcEa5ePw/apj3WVQ7iwx8c7FhuEB1E/NvhazYmzEmXZkfM99OI48xm4zHlkZg76oMkCGekDfpJeZA53g/Fl4stOXzeU4hnJ0/s52gEyVt/YJATHCNtgVU+vOjnDstmM3mo83mIjl4YA32eByDIXcFWll0kqtISqpZI1EmtsMKabRyxjpzTdxG9tqzkzmZk+cqpUd2vuWJrr4Ry2xsmM543wRoWkUxPJlXfvFaL+0gfrQ6qfwoDcEbv6F7QSDzg+dXj607x21zSU1TSQCPH719sEHzQji83chMxlQihHMYZDJuoBKpNHIAdRANnkdx0GGrsWO7zOdy6bRKyOq/q6wSR9BQ/4cKOTz0uYde9ilnaOu7iVaR23t5j58rPXkSBd6D2V4Q8CO8zap5m1yEcgeij0Fn8T0rF+rIZFsdzx48g/YX2y6s5VMHxyBzeP6I+5rvgX2VvtJOUy0hXnQX/EQp/InCGmYVZFy+6loQ+s6dLFnoKPvGqA223ONIzuVEkbRtyYEe3qPUc8KEuXeAKjgbX4yPDzu1PS/In/n5bXMO4PIsVXkbWzCRxaE57hoTTISDJVMQKB8yASaH/Lnhz7JTFssoP3SVHsDt+A2+mF+TJGcjR425Ag+EX1YjYV+PkDhu4XkhDEsQN6RufMncn6knENDG73hf0qvv+y7O4bQOqyftVO0mcm1Hk5UWeQB0j2G1/U4JZ7IpFlAUJXUS9gxv8mygsrjbUX3AO/MCsEu2HZkmY5hFZkbdwoBKmui9QTRP1wp52YysiIjHQoRVAJO1kmh1LFj9a3rH0KB4mjjMZoNq/kOD43/AD5+LmaYJJPeCy4muep/g9+cUj/w0zDDMNGPldSSPVSKP5kfXDd21lK5V66kA+RXmyn0YAofRsD+wvZ54A00oqRxQXqo5m/UkDbpWGHiuTE0bRHa6INXTKQytXI0wBrrWML2lKyTUlzOMfb1XyW57MifHpg1/OTXa/V/NUuIQmKGNI2YAMimqJayLNn7xO99STeOUIMsM8Tk2mylgNSgC0Y8wSCL+m+BsnEVjRIc7GyCPTUuoaTVffbSDdVzLV8wU84mb76M5fJxEhxTzGtJ5AlmWwQRYIDB99gN2XJ92/32/p66evutb3jPdbOt+sox2RlLZVL+60iDnsqO6KN9yQqgX6YA9vyYpIJ9BZG1RPpFkE+ONvbwyDztlryLXw7LiKNY1JIUUWNWx5ljW1k2T6nHjieSSeJ4pBaNsfMEGwwPRgQCD0IGJTwsnjMb+D6/v1Spa97DuZyOLyPmBmu6yPjHEnd4TBGWSN9blyELDS6aUDb3TE+LSLA350VylZloY0372RVIIOyqblB8iFVxv1odcceJcLmy8gikR3JNRtGhqT9mvlauaHlubKi8N/Yvs02W1TS/2sjHw2CIlOnwAjmTpUseVgAbAEs6SOLRaf3MN0b55s9VjxzazWapztUwN21wDWOALJ3A82PmmsyYDcXasxlyKsCYgnp4R5YL3gTxdtM0DsLVdd7eYA/r64lB+v5O/wDkprXmobuqcw+VSNs/JD5pmMUwMiOGGqhrNGx57AemGbLfIvsP3YXszmIdEixKdT0d162NvTlyww5f5FHWh+7Fmo4GKyfwEt7PcC93xB3wjIJI/U7qfrXTyQHt1OVy2333Cn2on+AwB41wJWpsvRkCI0kQ503J1HkSDt6HDrxHLa42XTGxq1Ei6l1dLHl7YxrtNxPPRZwTyR/ZpUQRqUB0FRfItasDfL0GwIxkTaMTOcXnBAA7gi8j6r0sGvdAxjYxkEk9jdY+3y6Jtk4RHFlZizBswvd6gDfdamUhf2iOfpXQ2Xbg8xeCJ2+ZkUk+Zrn9cZZ8PjnHLosCSQyuHlmnVyNuZBsa261vvzrnjXIYgqhVAAAoADYAcgMSh0ohfbONoFeIJN/dQ1GsdPHtfl24m/AgCh244Wd5/NO+czegp9oUImXD6bFEatGvbURqI677YH5+IFEPEG0Sgn+zVWmYEDSJOSrp3PiJYg1Q5kr2+7MSNIczCpYMB3iKLIIFagOooCwN9r67K/DeIUDBJAJ1LlwvjVw5ABIZfFvQsUb9Mev0wbJG18fQCwK3ChRFk1R5oiiTdg8VtFix/aYex0LZfPJGrh45odQYAjUtFlJB3B2IrpZxo85pThW7JcJl1faswixtoEcUSihGg9Oh9DvzvnQbHWxWMjXSh8180ACR1Of9YxhVuNuspf4pI6qO7+c2q7X0Y7jrVX5+XOjVi4m4zAhkChWHgYBxqsXRvw3sRV2fIYu8Q4YWZZA7I6atJWq8QA8QPMbA1tjjl+EEsjP4nRr1/rCvlbkKDUdh90EAXislaEZh2fEeh8wemeK4/wDbjqj+Wa1GF3tG5MoXoF2+t3/DDLGlCsCuN8OMgDpuwFEeY/mMY3taJ8uncGC8g13APrHVKaZ7WzWVWyWaqIs6JoFADTu5HL39/fywO4dKe+RhtbUQPU0f34spxJlTu2jGpaCjTy9weuO/COHsX71xp3JAqt/boBjG+KeSFkbi7bV/DVG82flhvlk3abxG15cKvx57UP3+XRMOMCzvx4kkVk+wRFWBBV5CwIOxBGkWCMb9gN2izuXymWmzUyJoiUsdlsnoovqzEKPUjHqVlpI7EdgOHZjhoYwMBm1Dv+lclSCxUIb2CEkC7J+8Ww19hMyzZbumRl+zO2XUtdyLFSLJZAvUADY2u8Zj8NeHcTz8GezJzcsKZgSLCoZgneE2WUG9CKfBab7kX4cax2Q4OcnkoMqz940SaS3mdzt6C6HoBgQsz/6QGdfXlYLIjp5COhbZQf8AhBb/ABY49l+ApkOGyZude8zGei7mCAcyJR4E938LN5ADyNuXxV7GtxDLq0IH2iEkoCQNatWpLOwJpSCdrFbAkjP07YCKXhf26GaObIl43jZK7xWj0LIuqrZSFsdbsHF7ctACjwUrT5KfhfEURj+lgkRgy8nBo7ejKSpH7Qx+pMYvwTgWZ4txP/SWZgaDLIylEcEM4T5FANEi/EzctyBfMbRiMrrrugBTASfPzJYfuBy3ZytA3z58/Pbzrpg3ivLlI2OpkVjysqD+/FSkqHDc5LIbPclN7Mbkn05jzBB9QfIjBfHGKFV+VQt+QA5csdsCEIzGZzCF2YQ90LolmBrar5jz/rnxTikjVpMBY3pUOfEPu0a8wQTR32ryMSxKw0sAQeYO4xzTJxj5Y0FUdlA5cuXlgQvOTaU33qqPLSSfxv8Arf0xbxMTAhL+Y4pKrOCcvpU82dgQurSLHnuBd8/wwYyUpZFZtNn9U2PoceGyERsmNCTdkqpu+fMY7pGFACigOgwIXTAriuamQjR3QUj/AGhN2LJ5HkBRwVxxlgVq1KGrlYB/f7DAhCI+JyNQUwNYWvEw5gX52CxIHL6m6Mxk0LFGtwPPHBchEKIjQUbFKBXLyHoPwxbwIUwDznE5o2KkQnfa3Kmr2Ju728t+e225zFebJxsbZFY1VlQdvrgQhuU4lJI4UCEjrpck1fMeGjsCfXY4NYrxZSNTqVFU+YUD92LGBCqZ9pAtxaLF3ruqo+X97T9LwOg4nM9aFgJujUh9f7t8gx+mDLKCKO4OOS5VAQwRQRyIAvlXP22wIVjA/O99qXuhGV+/rLAjlVVseuCGJgQlybjEqHS4gRgNw0351Vncr5fMNx07Q52dnYKIWG9AMwNbVd+4/EfUpLko2JLRoxNXag3XLnj0mWQNqCqGqrAAPT+QwIXLKLIQe9VVN7BCSK+oGLJTHvEwIS9xHiciSFUfL6R+uzA/WtgNQIv+WC+SfXGjEqSVFlPlvrV9LvHxshESSY0JN2SoPPnzGO8UYUUoAHkMCF60Yo8TnMaWrIrdNd1XW65cxv0wQxxlhVvmUHYjcXsav9wwIQSHish0lny+ksQSC3IUbVtwSN9q6YPBN7xwbIREUY0r9kfjy54tYF0klTALO8UkikcOcuI6BQtIVaqGotsR8xA28x54O4rzZONzborH+8oP78C4q3Cs68o1ER6fNHLb9RyGCOOMMKrYVQoO9AVjtgQqfEswUTUpQbizISBXXcdcCV43ISAqwtfUS7b7gbAncX/hY8gLOzQK4p1DDyIsfnjmMjFy7tOd/KvPz5c/XAhe4GJUE1ZAOxsfQ+WO2PEagAACgNgMe8CEKz+amQmhFo+6WYgnayOXod/bHjh/EZZWFLCydWSXVQ3o/KOe39b4JTQK1alDVvuAf34+Q5dEvQqrfOgBf4e5wIXfExMTAhLw4vLy/QaqJvWwq912o2Kve96vbodjJoahRrcDffrjgOGw1XdJ/hX+XqcW8dsoUxQ4pM6ICmgnUAQ5IBHkK68vPrseWL+OU0KuKZQw8iLGOIQvh/EmkcKO507jwPq3AOwoVzB29D9DOK8WVjX5UVa32AHSunptixgQqudaUAd0qsb3DEjb0rrgbJxKZSVfuEO1DUzHcrzAAPLVv+z51g5jg2WQkkqCTVmvLlgQquWmzBI1xxhepVyTW/Svbr54I4+AY+4EKjxXiEeXhknmbTHGpZm8gPTqfIDmcYLxn4zcQzMwiyCLCrMFjGhXkYk0t6rWztsBt5nnjQPj4X/0S2j5TNHr/Zs1/n0Yy34ZcLeGM8QCapmf7PkUI+aZxTSH+5GpJJ5fNyIwITVwL4tZzLZr7JxeJRRCvIoAaOwCGYKdLLRB8NECzvyxtqMCAQbB3BHXH5w+N8A1ZORWjk1RNG86pTSywkRyFz1qlAHTfneNt+G5c8LyWvn3CfhXh/y1gQqXartf3Dd1CA0g+YtuF9KHM/kPXoLzXHeIZdYppSjJILClBt6HSAQSKPPz8sU+CcHOZz0hkFqkjM99TqPh+pv6A4P9qFbOTDJREAIO8lciwDRAH5/n6HCdvcC6/AL0Xu9PA9kO1ppu57jmhX2zwBk4GbRvs9xtM1FrUUwNOp6H+IPQ4MYzv4dROmYnRgRpWmHkwYAf+rDxxBpAv6IAtfXy9L2xaJqi3kE10AsmuwWXrtM2HUmNhxgjwBF8+sKrneKaXEca62vceX/P92CEMqsLUg71t5jC7O41mOADW3zkch+sFPRb5nHXhstOI4QCo3kc/e/kPLzxlxa94mIebBNY6HoG4txAzIThvAzgxdANmMEC8/k9uwHJ8kx4yzt58S5IHaLJoCFJVsw6krqGzLHyBKkEEkncEV1xp2Y1aG0/NRr3rb88fmrgUx0osneCz4GjszMLJdSOTRWXJ1Cw11qplxvMaDykiU2r8ROIQyqNS5lbZXRowp1IacKYgCBupBIbY8jjWOz3GY83As0YZb2ZGFMjDmrDoRt7gg8jjHu0rwKAYmZFLyCQxnTE0hCa1neMllUmqFg1YIX5gyfBJpbzokFAPHtQADU4YADagojAraqrasdcBVoC0vNZlY0aSRgqIpZmPIACyT7DGa57t5ms80kHB4CxUW076FIB2BRZCAPdrPPw9cO3bX/u7Of/AI03/kbGZ/DzhBgyi5+LOaVaVBmIwqBQgbQdTsCylA5k1bAjaq8WJxNbtLjzYA7Kt5NgBXsj2s4lw1UHFoC8LNpWUPEZAaJ30sQ+w60ee55Y0ng3FYs1Cs8D643umojkaIIO4IIIo4z/ALW8MGfy+Ym+3/8AZIKaOhHIjOq2zl1Go7OYwqnYjrywa+Dv/dUP7Uv/AOx8dkDXM3jBujV190MJDtp4pMnEeI6CEUW56eXl/wDGB75zMr4iDXqmPL/60b/XHn6Vy+mPcIQP4dGq9qaT/wBuPMyTSSvJ95t+ItA3Vx4Udx8LHmtdkTGNHw3i79HCJcNz4lB2phzH8Rj5xuWVYJWy+jvQjFO8NJqA21Hy+o9xihkgBmDorTR5X/H1r0xT+KTOOE5zu/m7o3+ySA/+TVjT0Uj5GfGcgkX0NdUnOwNd8PBAPlaB8R4xxuSPLDJQ5RjJEGlmDhlDGj4bYDSQQQRru+lbzhnGONxLmBnYcquiItFMXCqXokaqatAolidFAc9xgh8NliHCskYT4u76b29kyA+mvVflj78RhEeF54znxd116NY7oL6FwtHqfag91qv5VKZOATzPl4Xn7vvWQF+6NpZF+E2bH1PuceOPcXTLR9425OyqOp/gPM4C/CcyHhGT735u7NX+rqbu/wDJpxU7c6DmcuJyRDpayL896r/hxbp4g+XaeM8daBNDzpKa2Z0UJc3nAzwLIFnyu1wi4xxOcCWFPASa0qlbbfes4OcI4zLrWLNxd273oYVT1VirNHl6H060MhmctFDqWXMJECdJCvp5/sVd3hazvEnlzKaZGkVZB3RPPfl0HkMPe5Ett2BoF5og+GeLvnwWT/kHTBrzK5zjVjc0jPJAoECrois0tZxm3bv4iSQTHJ5CNZcwoBkdyNEYNbVa23iW7IC2LvcDSMfm3L5ms1mE1FsxLmZy/hKGEqzrXeL45A6sx0oyBWRSbxkr0KK8O+IfGAzu7xOETvBE8O0g1KpEbQjc+IblqGNZ7Edq4uI5fvUGh1OmWImyjc+fVTzDVv6EEDGsjmWDmR3QFQGRg86Duy0cgLFnaStUaJQfwDWOemznwPm1cQzpiDdyYwfESSSG8LNZJ1N+karNWRZq8CFsudzKxoZGul51+GFfO9sDyiTb9Ymz+FV+/BztP/q0vsP3jCDkP7RfrjlrzntnXaiKdkETtocBmheXEdf6PimfJ9qiADMgVf1tQF+wJ3w1g4wqaUtbMSSepJJ/E43NOQ9sWPZtTXsfVyThwe66rJq832Hh3J8SkH4jfET7C6ZXKxd/m5BYTcqg3osF3Ymj4QRsCSRtecRfEHtCH1mEsv8Auzlhp/y03+bA/tVnWTjmcEhmBd9IMVFtIVdGxUkjSF5YuLmv/v8AEvpGf/5Yuig3s3WtDUmdrd0QB8x/YWvdhe2H25GSWIwZmKu9hY9G+V16lT5HcHbyJaZZAoLMaAFknoBzOPz98IoXTjbhWkZWikLNKrK5U6T4gwBvVp35H8sbR2z1fYp9HOh+GpdX+W8VRx75Aw4sgfVTdIWRF5yQ28eAvrn65S7mu1s0xlGV0xpEpbUwtmVasgEEDmNj+PTFLhXb2dWAnAkTqQACPUVQPtX1GKHZPOMvfR96VuF9A1aRr8NVZADUDvjrx93fL+GZpFiYBw+51tZ16tTBl2YCiKrrZJ9H/iwNcYnMFYzm+Obq+cc8rA/yJ3RiYPN5xisHir4AzwTQ7rUMvOrorobVgCD5g4o8Z4p3OlEXXLJehSaG1WSfKyAB1JA2FsKHYAt9ijvzevbUf43ibHifi5iAab920V60cx9Acedmj93I5nYkfQr0EEnvI2v7gH6hcxBnmotmlR+kS90Aef60bsvI7am5Hc1eLfC+KyCQZfNBVlNlGU7P8xqrNGlYjfxBWNLRUD+KMO9lKuoZVUgmRgQ3isKBzO9V0v1x07RPZyjCxIZI9vvBTJDr/MqD6E4Uim3uLcY/kj9k3JDsa13f+Af3TO3Lbnhbg7U1OcvmYzA33WLalby3obHofoaODfEZjHFJIBZRGYDzoE1hK7J8AizcRzOYZpJHY34iKrbp/wDFVtjS08cRjfJN+kUBV3ZvjIHTN/JJSufuDWc854r8/RNOY4q8ZIaA0PvBrFefLF/K5lZFDKdj+XocDoM9l4U7sOxC7ANrJ9rYfvx97OxkIzEUGNgen9fuwo7lVxyH3m0ODgb7Y+Y8e+VV7bdqouHZY5iUFiTpjjBALseQs8hzJPQDqaBwziHxk4m76o3ihW9kWJWFepeyfcV9MM//AEgcpPNmcjFFG8mpJdCIpYlrTVQHppxQ7EdheHxtr4pmYWnVWc5NZUOgICx7zQxLkKNWgbUDerHE2mn4b/E+TNOkGei7t5SRDOqsI5WHNN9g3sSCdtjQOqY/Nvbjtv8Abc1lYeHho8tA8YhQDQGkDDSwQbADwhQRY35XWP0lgQh/GuFRZqCTLzLqjkXSw/cR5EGiD0IGMX4x2O47lJYvsbLPFBG8WXdFgVo1f5vC4FSN1cWT5743jC3PmpUlKHMD7x/seX3goN0djQ6mhsTvgQsq7I/C/iE8cWX4kRFk4ZDIIbQyEnmAyXpVuttfkOo3SGIKoVQAoAAA5ADkBgRwrNPI4uXUACdPdBb+oY8rG3XnyIwcwISnx7gmY1NLk5ShbeSO6DGq1A8rrmD735rXDuDcSV20akLm3cuKJ33Jsk8zyvnh74u8iW4l0LpoKItZ1UxsUQT0Fda9cUIs+7MFGYO7Af6vW/Tcn3B+nLrS6FpN2R81oQ+0pI49m1p822ccXxddLtX+B8L7hWLuZJXIMkh6kCgPYDlgtjjl1YKA7Bm6sBV/SzWOOegkbT3cvdkHfwhr2O2/rvi0AAUEi97nuLnclVeIcPLAiKk1N49uf9eXXFzJZRYl0qPc9SfM4AycTkBZe/NqSP8AVx6f3t9/bF3JmWY94mYIQObQxLysHTd+Rq8UM00bZDIBkivIeA4FnJrk5K6ZHFu08I3jJe33w6zLs8mRctHISWyxfSASSW0WdBBYltJqiTV3Q1rAvjEzJoYSFBdUI9dk1vzHIA/Qk9MMgkKCyBuxPEp5gY4TlgWd3kaRFCtIQXC92zMVACgbC63q8a32Y4GmTgESsXYnU8jfM7UAWP0AAHQADpihFxOTVGhmbU5Uf6vt05kOdN+p6gjYi2fHXOJXKVXP5RJY3ikFpIpRhZFqwIIsbjYnljN812Qz3DknPCnEsUw8UMgBdOY1RkkKxo14hyA2Y41LAHPGePSO/FMSL7tbHKqs158zv4QPI9ZIW+XbouOaCs67O9mOJ5zJRZTNMMtk0IIBSpnA3CkE0FB3thdgGmxqHAeERZSBMvACI0urJJskkkk+ZJPl5YpZLOSzHSs2khbOqCuvq2x3Ar0wciBAAJs1uaqz510x2SUv8uyGsDUP4lw8uQ6GnH51y+uKDZfMnaufPdR+YwazkbMpCPobbxUDW4vY+Y2wCj4k50r35s7X3G3Mf3trB2BN0pNYzZdAyRxcHObfNGgfMZCZZqHNFUD5hFeF8P7oWd2PP09BicejkbLTLCsbSNGwRZfkYkEU3ocW8urBQHbU3U1V/THQjbbbDUUTImBjBQCqe8vO53KzbO5TjeXjyxyMOUISELLlxQ8XkuoqAiiqCsNyxOqwcTIZXjmZTMHPRZRQ0LLFAaPj8m0lgY2FhgzHkpGki8NGazMsJCPmCx06ie5U2Nh+sN7v6X5Xj3lsxJI2hMwbCqSTEvkl1vsbJJFbXXTF27wUVd7PRSploUmWNJFjUMsfyKQKpfQCscu0XBVzUekmmXdG8j6+h/l5YLLy3545ZiMsKViu4JIA5A7jfzG14GuLTubyoSRtkaWOFgrOsxwXiKx/ZtGqIGwAY6u7uzTcz1rBbsp2SMTiaetS7qgN0fNjysdAPfBOeaVdSCaRmQ7sIkI3S6+YWfCx2/WA8sFOHLJQZ5Q4KigE0+t8z0w0/WyOaWgAXzQq0hH7LhZIHkudXFm6rj6dFfxlnb/4cSS5j7dkNHen+1hkrTJtpJGoFbZfCynY3dg3ep4E8cdlUOJWjUWCFjDk35ewB/H2wmtJY1/1W4tOwjfh0SjU5Zp5FZLYFUaw5cMmp2LLZd2LsC2+NR7Adj4+G5cxhtcrkNLJVaiOQA6Ku9D1J649LxFyNpnG/MwDbU21jVew2vyF+pP5JiY1JbUSL1VVg7jbptWBC85/KCSNoySA3Ue94Wst2YeKVHVg6hrI5c+ex2/PDhhfzuakhch5yQ1kAQAlQdQALA1t5kfd3O+4ktR7Pg1D2yPHxN4N9jfkRfcL7xPsnlZrPd6GP3k2/L5fywdUUKwH4XNI7E97qC1amMDndb2eo367EGjsDWO2mWxMa4uaACeaHKzr4i9gpM0/2vIyLFmgultQFSKOW9HSw5X1FA1QOM0g7I9oy4TQy7/MXy+ketgm/peP0NxC+6fS+g6SdYAOn1o88Ao8/KxIGYomwC0Aq+X6+46jz3onSRibZpGimuIHmVeHuAoE0h/w37DDh6PJK4lzU1d7ILoddK3vV7k7XtsKGHGaIOpRhasCCD1B2Ix2xMVqCzTOdj8xl5llyoEgUgrZFijYDAkA+45+mLEPZ7Mz/o3iXLRM+tyG1M535Wx5WaGwFk74Zc6Z4zX2j5iQg7kMRZAFnULonnttudgSPuTlllLaJtNb00S7XyGzdKIrGifak5AurHWs/mr65Bys8ezIQTV7T/1xX4uvIj6IrlMssaLGgpVAAHoMDuOcKaUpLEwWaO9JN0b6NQNejUa3sMrMrGcCZcrmAXK5gUSSFMSnSPIEGzXmbxnX1T4FIX9tzQYFslqkXk4cC61CwAWFeI/Mw59MWuHcNleUZnNVrUeBF+7z8R3IumYAAmra2bw6KkfE5W2757ojw5et/l21NvRIO3Pbn1IZJJ3WxmQd/wDdL5XzDEHmPPBgKVo0cKB7HvG7Nlcy8KMbKbkD2phY9x9cNkYNCzZrc1V/TA/jUzIoZZNG9fIGsnlzIAqj1xdFPJFew884BB+RsKt8bX/qXObhJkRe8ZTKP9oq1q9xf8f5YIZVHC07Bj5gVgRks5I8ir3xo70YQLq7F6tjtuCLHI0dsH8VWuNja124c/nz7+aWu3PZZOIZYwlzG4spIt7HkQQCNSMNivXbqBjBcx8LOLwSju8vrKsCssMqVY3BBYqwIPmBj9M5hSVYK2liCA1A6T0NHY1zrC3NxZ1/27V6ZYk7bbeLeyy71WxHnXFYkf4Z/CqSCZc7n9PeKdUcIIam/XdhsWBsgLYujeNixU4eWMal3Dk76gunY7jazyFDFvAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhTExMTAhf/Z"
            alt=""
          />
        </div>
        <form className="p-2 md:py-4 w-full" onSubmit={handleSubmit}>
          <p className="text-lg font-bold md:text-7xl md:block md:font-semibold hidden">
            Get-Fast-Investors <br /> For Your <br /> Community...
          </p>
          <p className="text-2xl md:hidden font-extrabold md:text-7xl md:font-semibold flex">
            Get-Fast-Investors For Your Community...
          </p>
          <p className=" md:block md:mt-5 mt-1  md:text-lg font-medium">
            Investors Grain Helps Your projects sell out your NFT/Tokens, You
            can easily get people to Mint/Buy your NFT and get people to buy
            your tokens, We get you investors from Chinese, European, Turkish
            and other Asian countries.
          </p>

          <div className="w-full md:w-[60%] bg-slate-200 p-2 flex mt-5 h-[2.5rem] md:h-[3rem] gap-1 rounded-full items-center p">
            <FaUser className="h-6 w-6 md:h-7 md:w-8  rounded-full p-1 bg-[#383f68] text-gray-200" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
              placeholder="Email"
              className="outline-none w-full h-[2.5rem] rounded-r-full bg-gray-200 px-3"
            />
          </div>

          <div className="w-full md:w-[60%] bg-slate-200 p-2 flex mt-5 h-[2.5rem] md:h-[3rem] gap-1 rounded-full items-center ">
            <FaLock className="h-6 w-6 md:h-7 md:w-8 rounded-full p-1 bg-[#383f68] text-gray-200" />
            <input
              type={"password"}
              placeholder="Password"
              value={password}
              id="password"
              onChange={(event) => setpassword(event.target.value)}
              className="outline-none w-full h-[2.5rem] rounded-r-full bg-gray-200 px-3"
            />
          </div>

          <div className="flex justify-between items-center md:block">
            <button
              type="submit"
              className="px-4 py-1 md:px-5 md:py-2 bg-[#383f68] mt-3 rounded-md text-gray-50"
            >
              Sign in
            </button>
            <Link to="" className="mt-2 md:ml-28 text-blue-900 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>

        <section className="md:w-full md:h-full md:p-7 md:items-center md:justify-center md:flex hidden">
          <img
            className=" rounded-lg w-[100%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzojXx1cOlHh5jgdUX8Lso1y2OhACXS1jWJQ&usqp=CAU"
            alt=""
          />
        </section>
      </div>
      <div className="md:hidden block p-5 pb-0">
        <img
          className=" rounded-lg w-[100%]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzojXx1cOlHh5jgdUX8Lso1y2OhACXS1jWJQ&usqp=CAU"
          alt=""
        />
      </div>

      <div className="block md:flex px-2 md:px-5 py-1 md:py-2 text-[#383f68]">
        <section className="hidden md:flex justify-center w-[50%]">
          <img
            className="w-[90%]"
            src="https://cdn.mypanel.link/6f7c88/3qdd689argaez2k3.JPG"
            alt=""
          />
        </section>
        <section className="w-full md:w-[50%] pt-10 md:pt-20 px-5">
          <div>
            <p className="text-2xl md:text-5xl font-bold">Investors-Grain</p>
            <b className="text-5xl md:text-8xl font-extrabold">Features</b>
            <p className="mt-5">
              WANT TO GET INVESTORS/BUYERS FOR YOUR COMMUNITY?
            </p>
            <p className="mt-5">
              We’re the online marketing veterans. We provide a comprehensive
              set of results-orientated online media services that help you grow
              and build your Community presence.
            </p>
            <p className="md:mt-5 mt-2 ">
              Tired of looking at Hundreds of Website with services that simply
              don't work? Check our Major Services for Investors through Media
              with the Best Quality and Quickest Delivery.
            </p>
            <p className="md:mt-5 mt-2">
              We do Prefer Support LIVE via Telegram/Discord support for Instant
              Response getting any Information and re-solve any issue soon as
              possible. We provide the best customer support.
            </p>
          </div>
          <div className="flex items-center w-full mt-10 gap-2 md:gap-5">
            <div className=" text-center">
              <p className="bg-[#383f68] ml-6 md:ml-9 w-16 h-16 flex justify-center items-center md:w-20 md:h-20 p-5 rounded-full">
                <FaHourglassStart className="w-10 h-10 text-white" />
              </p>
              <div>
                <p className="text-[100%] md:text-2xl font-bold">0.12 SEC</p>
                <p className="text-sm md:text-base font-semibold">
                  An Order Is Made every
                </p>
              </div>
            </div>

            <div className=" text-center">
              <p className="bg-[#383f68] ml-4 md:ml-9 w-16 h-16 flex justify-center items-center md:w-20 md:h-20 p-5 rounded-full">
                <FaSignal className="w-10 h-10 text-white" />
              </p>
              <p className="text-[100%] md:text-2xl font-bold">20,100,000+</p>
              <p className="text-sm md:text-base font-semibold">
                Orders Completed
              </p>
            </div>
            <div className="text-center">
              <p className="bg-[#383f68] ml-5 md:ml-9 w-16 h-16 flex justify-center items-center md:w-20 md:h-20 p-5 rounded-full">
                <FaDollarSign className="md:w-10 md:h-10 w-9 h-9 text-white" />
              </p>
              <p className="text-[100%] md:text-2xl font-bold">$0.002/K</p>
              <p className="text-sm md:text-base font-semibold">
                Prices Starting From
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#383f68] justify-between mx-5 md:mx-24 md:px-10 py-2 items-center block text-center md:flex rounded-full h-[7rem] item-center my-5">
        <p className="font-extrabold mt-2 text-xl md:text-5xl text-white">
          Ready to Get Started?
        </p>
        <Link to="/Signup">
          <button className="bg-white px-10 mt-2 md:mt-0 rounded-full py-2 md:py-5 text-[#383f68] hover:underline">
            Get Started Now
          </button>
        </Link>
      </div>

      <div className="block text-[#383f68] md:flex px-2 md:px-5 py-1 md:py-5 md:pl-16">
        <section>
          <p className="text-xl md:text-5xl ml-2 font-bold">Investors-Grain</p>
          <b className="text-4xl md:text-8xl ml-2 font-extrabold">Services</b>

          <div className="grid grid-cols-3 md:ml-5 gap-5 md:gap-14 mt-5">
            <div className="md:text-2xl font-bold grid justify-center items-center ">
              <p className="bg-[#383f68] flex justify-center items-center md:ml-2 w-16 h-16 md:w-28 md:h-28 p-5 rounded-full">
                <FaDiscord className="w-14 h-14 text-white" />
              </p>
              <p className="text-[100%] text-center">Discord</p>
            </div>

            <div className="md:text-2xl grid justify-center items-center font-bold text-center">
              <p className="bg-[#383f68] flex justify-center items-center md:ml-2 w-16 h-16 md:w-28 md:h-28 p-5 rounded-full">
                <FaTwitch className="w-14 h-14 text-white" />
              </p>
              <p className="text-[100%]">Twicth</p>
            </div>

            <div className="grid justify-center items-center md:text-2xl font-bold text-center">
              <p className="bg-[#383f68] flex justify-center items-center md:ml-2 w-16 h-16 md:w-28 md:h-28 p-5 rounded-full">
                <FaTelegram className="w-14 h-14 text-white" />
              </p>
              <p className="text-[100%]">Telegram</p>
            </div>

            <div className=" md:text-2xl grid justify-center items-center font-bold text-center">
              <p className="bg-[#383f68] flex justify-center items-center md:ml-2 w-16 h-16 md:w-28 md:h-28 p-5 rounded-full">
                <SiRoblox className="w-14 h-14 text-white" />
              </p>
              <p className="text-[100%]">Roblox</p>
            </div>

            <div className="md:text-2xl grid justify-center items-center font-bold text-center">
              <p className="bg-[#383f68] flex justify-center items-center md:ml-2 w-16 h-16 md:w-28 md:h-28 p-5 rounded-full">
                <FaYoutube className="w-14 h-14 text-white" />
              </p>
              <p className="text-[100%]">Youtube</p>
            </div>

            <div className="md:text-2xl grid justify-center items-center font-bold text-center">
              <p className="bg-[#383f68] flex justify-center items-center md:ml-2 w-16 h-16 md:w-28 md:h-28 p-5 rounded-full">
                <FiTrendingUp className="w-14 h-14 text-white" />
              </p>
              <p className="text-[100%]">Trending</p>
            </div>
          </div>
        </section>
        <section className="w-[50%] p-10 hidden md:block">
          <img
            className="w-full  ml-10 mt-28 shadow-xl border-8 border-[#383f68] rounded-2xl"
            src="https://d1-invdn-com.investing.com/content/picc8b2764fcf2358933ee4aa88dd78b8cc.jpg"
            alt=""
          />
        </section>
      </div>

      <div className="  mx-2 text-[#383f68]  md:text-center">
        <p className="text-2xl md:text-7xl font-extrabold mt-10 md:mb-10 ">
          Why Use Investors Grain?
        </p>
        <section className="block md:flex md:px-24 mt-5 md:mt-10">
          <div className=" mb-3 md:mb-0">
            <div className="md:flex justify-center hidden">
              <img
                src="https://cdn.punchng.com/wp-content/uploads/2017/09/07163539/Handshake.jpg"
                className="w-[50%] mb-10 h-[50%]"
              />
            </div>
            <p className="font-bold ">Full Control</p>
            <p>
              We Providing many service on our own.So we have full option to
              support for your orders, make them complete or Refill or Cancel at
              any time
            </p>
          </div>

          <div className="md:px-10 md:mb-0 mb-3">
            <div className="md:flex justify-center hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19kQvVujCVIbpiI72mBo1gv75HFr7A_KWPw&usqp=CAU"
                className="w-[20%] mb-10 h-[20%]"
              />
            </div>
            <p className="font-bold ">Easy & Safe to Use</p>
            <p>
              Designed with you, the client, in mind. Get insight into every
              single campaign from one easy to use central location. Safety is
              our #1 priority. We have taken every step to ensure the safety of
              both your account as well as your transactions with triple
              verification methods.
            </p>
          </div>

          <div className="">
            <div className="md:flex justify-center hidden">
              <img
                src="https://bbfeshop.com.ng/wp-content/uploads/2020/10/24-7-Customer-Service-.png"
                className="w-[60%] mb-10 h-[60%]"
              />
            </div>
            <p className="font-bold ">365/24/7 Support</p>
            <p>
              The client panel is ridiculously efficient. But our support
              maintains its accessibility through our Telegram LIVE chat and
              also through E-mails. Never feel left out.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-10 mb-5 text-[#383f68] mx-2">
        <div className="text-center">
          <p className="text-base font-extrabold md:text-2xl md:font-bold">
            More Than 3,500,000 Successful Cases
          </p>
          <p className="text-3xl md:text-7xl font-bold">Projects Results</p>
        </div>
        <div className="mt-5  md:block">
          <>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="h-full w-full">
                  <section>
                    <img
                      src="https://pbs.twimg.com/media/FEfwU_OVUAIDCws.jpg"
                      alt=""
                      className="h-full border-2 border-black w-full"
                    />
                  </section>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full">
                  <section>
                    <img
                      src="./marketcapvvv.png"
                      alt=""
                      className="h-full w-full"
                    />
                  </section>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full">
                  <section>
                    <img
                      src="./nftdata.jpeg"
                      alt=""
                      className="h-full w-full"
                    />
                  </section>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full">
                  <section>
                    <img src="./nftspp.png" alt="" className="h-full w-full" />
                  </section>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full">
                  <section>
                    <img
                      src="./nftsoldi.jpeg"
                      alt=""
                      className="h-full w-full"
                    />
                  </section>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full">
                  <section>
                    <img
                      src="https://pbs.twimg.com/media/Fk5prCWaMAAnI8x?format=jpg&name=large"
                      alt=""
                      className="h-full w-full"
                    />
                  </section>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
            </Swiper>
          </>
        </div>
        <ToastContainer />
      </div>
      <BottomNav />
    </div>
  );
}

export default StartPage