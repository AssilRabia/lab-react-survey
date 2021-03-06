import React, { Component } from "react";
import './_Login.scss';
import Header from "../header/Header";

class Login extends Component {

    state={
        identifier:'',
        users:[60763,62777, 63532, 70273,62521,63147,70354,61347,61672,62531,63472,61456,64589,68636,70272,69450,70271,56576,64792,
               68493,58392,61028,62324,64586,68498, 55916,58611,59171,58935,58615,61330,55597,57863,57926,59829,57306,59029,59676,56369,57850,            57194,            59024,
            59598,         57575,            57386,            60399,            59108,            59949,            57289,            59025,
            60271,            60723,            59629,            63002,            57085,            62720,            65155,            57477,
            58841,            61123,            62899,            57515,            61171,            62141,            64922,            58706,
            63035,            60650,            56033,            60227,            59293,            60894,            57533,
            57811,            60752,            57290,            62150,            53277,            57951,
            60179,            58150,
            58488,            57320,            60733,            57515,            63002,            61123,     61171,      64922,      58706,
            62141,            57477,            62720,            63035,            58841,            60650,            62899,           65155,
            57085,     56586,  56874,   62627, 62634,            71454,            65347,            60234,
            62728,    65176,  71603,    57078,     61301,    68246,    60891,        63208,  59299,            61462,    62028, 65926,
            70189,            59400,            61729,            63487,            70194,            70201,            70911,            61340,
            62884,            63973,            56684,            62681,
            64579 ,           65641    ,       69757,
            59390  ,          62280,            58363,            59646,            60042,            60812,
            64544,            70187,            55901,            61350,            61657,            64849,
            68155,            69885,            69899,            54346,
            65716,            69466,            70191,            70986,
            59141,            61037,            61088,            61165,            61201,            58615,
            59180,            59608,            60804,            61325,            61445,            56606,            59537,            60029,
            54250,            57098,            57680,            58482,            58847,            68466,            57809,            59028,
            60826,            61044,            61235,            61453,            68458,            59790,            60493,            60694,
            60719,            60753,            57431,            61089,            61155,            62000,            62478,            70404,
            61581,            62532,            63031,            57680,            58482,            60493,            60694,            60753,
            61044,            61235,            63037,            57809,            59537,            60719,            61088,            61581,
            68466,            58847,            59028,            59180,            59608,            60029,            60107,            61037,
            61155,            68458,            56606,            57098,            59141,            60790,            60826,            61089,
            62000,            62478,            62532,            54250,            55063,            58615,            60881,            61165,
            61201,            61325,            61453,            70404,            61445,            57431,            57513,            59790,
            60804,            61085,            61325,            56606,            58482,            59180,            60826,            61235,
            61453,            61581,            62000,            71099,            57098,            57513,            57966,            59537,
            61044,            61201,            62478,            68466,            57809,            58847,            60029,            60753,
            56129,            57431,            59141,            60804,            61445,            68458,            59028,            59437,
            59790,            60719,            61037,            61088,            63122,            57680,            59608,            60493,
            60694,            63031,            70404,            54250,            58615,            61155,            61165,            62532,
            58841,            64922,            57515,            61123,            62141,            63035,            57477,            60650,
            63002,            57085,            62899,            65155,            58706,            61171,            62720,            59178,
            60076,            62712,            71234,            55599,            68614,            57095,            61547,            62712,
            62747,            71234,            60221,            70080,            63241,            61565,            62007,            69955,
            57146,            61671,            61552,            70108,            61547,            70080,            70177,            65712,
            70139,            56911,            58649,            64989,            65876,
            60221,            60518,            62768,            65771,            57708,            68653,            62852,            62024,
            64928,            60936,            68713,            70337,            69420,            59886,            62633,            69902,
            69906,64462,61811,            69918,            57966,            59018,            65076,            55428,
            68594,61919,62986,            61780,            71264,            54311,            58961,            58879,
            59541,57667,58373,            61671,            65095,            65998,
            65411,61565,59861,            68564,            60413,            70080,            68681,            59890,
            70098,64478,65594,            64686,            68987,            70708,            64434,            59976,
            62390,63419,62175,            62174,            64725,            65171,            68665,            68148,
            59759,69687,69688,            69643,            68680,            68568,            61486 ,          69968,
            68665,64897,66017,62704 ,          62720,            58512  ,          69919,
            61538,64763,70704,70534,69307,           70706,            62704 ,           58182,
            70891,60302,70442,70705,68157,           62073,            71388,            71251,
            62133,71602,71406,70108,60010,            71481,            57814,            71246,
        ],
        invalid: false,
    };

    changeIdentifierHandler = (event) => {
        this.setState({identifier: event.target.value});
    };

    submitHandler = () => {
       const user = this.state.users.filter(identifier => identifier.toString() === this.state.identifier);
       if(user.length > 0) {
           this.setState({invalid: false});
           this.props.history.push('/wizard');
       }else{
           this.setState({invalid: true});
       }
    };

    render() {
        return(
            <div>
                <Header appName="Survey" />
                <div className="Login">
                    <div className="Login__title" >
                        <p>S'identifier</p>
                    </div>
                    <div className="Login__fieldContainer">
                        <div className="Login__fieldContainer-inputField">
                            <input onChange={(event) => this.changeIdentifierHandler(event)} type="text" className="Login__fieldContainer-input" placeholder="Matricule" required=""/>
                            {/*<label htmlFor="name" className="Login__fieldContainer-label">Identifier</label>*/}
                        </div>
                        {this.state.invalid?<p className="error_msg">Votre matricule est invalid</p>:null}
                        <div className="Login__fieldContainer-buttonFiled">
                            <button onClick={this.submitHandler} className="Login__fieldContainer-button">Se Connecter</button>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Login;
