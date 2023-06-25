import {observer} from "mobx-react-lite";
import {useStore} from "../store/store";
import {WineParams} from "../enums/WineParams";
import {keys} from "mobx";

export const PredictionForm = observer(() => {
    const { globalSettings, globalEnvData } = useStore();
    const setPrediction = (e) => {
        globalEnvData.predictionData[e.target.name] = e.target.value
    }
    return (
        <div style={{position:'absolute',height:'100%',width:500 + 'px', zIndex:999,top:'10%',padding:20 +'px',right:45 + '%'}} className='bg-white'>
            {/*<form >*/}
            {/*    {*/}
            {/*        Object.keys(WineParams).map((key) => {*/}
            {/*            return (*/}
            {/*                <div className="row mb-3">*/}
            {/*                    <label htmlFor="inputName" className="col-sm-2 col-form-label">{WineParams[key]}</label>*/}
            {/*                    <div className="col-sm-10">*/}
            {/*                        <input type="text" name={key} className="form-control" value={globalEnvData.predictionData[key]} onChange={setPrediction}/>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</form>*/}

            <form>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputName1">Name</label>
                        <input type="text" className="form-control" id="inputName1" placeholder="Enter Name"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputName2">Last Name</label>
                        <input type="text" className="form-control" id="inputName2" placeholder="Enter Last Name"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputEmail1">Email</label>
                        <input type="email" className="form-control" id="inputEmail1" placeholder="Enter Email"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputPhone">Phone Number</label>
                        <input type="tel" className="form-control" id="inputPhone" placeholder="Enter Phone Number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputEmail1">Email</label>
                        <input type="email" className="form-control" id="inputEmail1" placeholder="Enter Email"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputPhone">Phone Number</label>
                        <input type="tel" className="form-control" id="inputPhone" placeholder="Enter Phone Number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputEmail1">Email</label>
                        <input type="email" className="form-control" id="inputEmail1" placeholder="Enter Email"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputPhone">Phone Number</label>
                        <input type="tel" className="form-control" id="inputPhone" placeholder="Enter Phone Number"/>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>




            </form>

        </div>

)
})